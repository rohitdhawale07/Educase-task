import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import AccountSettingsPage from "./components/AccountSettingsPage";
import WelcomePage from "./components/WelcomePage";
import "./App.css";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("userData");
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/account-settings"
              isAuthenticated={isAuthenticated}
              element={<AccountSettingsPage />}
            />
          </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
