import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "@/lib/auth";
import Home from "./page/Homepage/Home";
import FindJob from "./page/Findjob/Findjob";
import Support from "./page/Support/Support";
import Profile from "./page/Profile/Profile";
import Employer from "./components/Basicemploy/Employ";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

function ProtectedRoute({ element }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user ? <>{element}</> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Không có Header/Footer */}
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }
          />

          {/* Có Header/Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/find-job" element={<FindJob />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} />}
            />
            <Route path="/employer" element={<Employer />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
