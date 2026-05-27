import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import ReceiveMoney from "./pages/ReceiveMoney";
import TransactionHistory from "./pages/TransactionHistory";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

import "./styles/main.css";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/send"
          element={
            <ProtectedRoute>
              <SendMoney />
            </ProtectedRoute>
          }
        />

        <Route
          path="/receive"
          element={
            <ProtectedRoute>
              <ReceiveMoney />
            </ProtectedRoute>
          }
        />

        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <TransactionHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
