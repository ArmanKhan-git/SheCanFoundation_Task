
import LogInPage from "./pages/LogInPage";
import Dashboard from "./pages/Dashboard";


import { Routes, Route, Navigate } from "react-router-dom";


import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div >
     

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={ <LogInPage />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Toaster />
    </div>
  );
};
export default App;