import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { apiEndpoints } from "../util/apiEndpoints";

const { createContext, useState, useCallback } = require("react");

export const UserCreditsContext = createContext();

export const UserCreditsProvide = ({ children }) => {
  const [credits, setCredits] = useState(5);
  const [loading, setLoading] = useState(false);
  const { getToken, isSignedIn } = useAuth();

  // Function to fetch the user credits that can be called from anywhere
  const fetchUserCredits = useCallback(async () => {
    if (!isSignedIn) return;

    setLoading(true);

    try {
      const token = await getToken();
      const response = await axios.get(apiEndpoints.GET_CREDITS, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCredits(response.data);
    } catch (error) {
      console.error("Error fetching the user credits", error);
    } finally {
      setLoading(false);
    }
  }, [getToken, isSignedIn]);

  const contextValue = {};
  return (
    <UserCreditsContext.Provider value={contextValue}>
      {children}
    </UserCreditsContext.Provider>
  );
};
