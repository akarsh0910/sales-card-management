import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SalesDashboard from "./pages/SalesDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sales" element={<SalesDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;