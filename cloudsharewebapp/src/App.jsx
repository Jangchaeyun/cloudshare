import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dasbboard";
import Upload from "./pages/Upload";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
} from "@clerk/clerk-react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dasboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-files" element={<MyFiles />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
