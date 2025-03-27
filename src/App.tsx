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
import Transportation from "./page/Transportation/Transportation";
import Job2 from "./page/job2/Job2";
import Job3 from "./page/Job3/Job3";
import Job4 from "./components/Job4/Job4";
import Job5 from "./components/Job5/Job5";
import Job6 from "./components/Job6/Job6";
import Job7 from "./components/Job7/Job7";
import Job8 from "./components/Job8/Job8";
import View from "./components/Viewallnotifications/Viewallnotifications";
import Job9 from "./components/Job9/Job9";
import Job10 from "./components/Job10/Job10";
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
            path="/Login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/Register"
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
            <Route path="/view" element={<View />} />
            <Route path="/omega" element={<Job2 />} />
            <Route path="/nghenang" element={<Job3 />} />
            <Route path="/yongxing" element={<Job4 />} />
            <Route path="/trungdung" element={<Job5 />} />
            <Route path="/hatdieubatu" element={<Job6 />} />
            <Route path="/kienlongbank" element={<Job7 />} />
            <Route path="/fptjobs" element={<Job8 />} />
            <Route path="/congnghiepdainam" element={<Job9 />} />
            <Route path="/indovina" element={<Job10 />} />
            <Route path="/fpt-telecom" element={<Transportation />} />
            <Route path="/employer" element={<Employer />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
