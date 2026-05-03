import { Routes, Route } from "react-router";
import { AuthLayout } from "../components/AuthLayout";
import { NotFound } from "../pages/NotFound";

import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
