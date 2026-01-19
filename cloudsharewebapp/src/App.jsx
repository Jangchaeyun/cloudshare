import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-files" element={<MyFiles />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
