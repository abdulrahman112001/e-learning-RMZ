import { Route, Routes } from "react-router-dom";
import Category from "../pages/category";
import Courses from "../pages/course";
import Home from "../pages/home";
import Institute from "../pages/institute";
import Instructors from "../pages/instructors";
import Lesson from "../pages/lesson";
import LoginPage from "../pages/login";
import Register from "../pages/regester";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import Client from "../pages/client";
import Admin from "../pages/admin";
import Staff from "../pages/staff";

export const AllRoutesProvider = () => {
  // tail
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/dashboard/instructors" element={<Instructors />} />
        <Route path="/dashboard/client" element={<Client />} />
        <Route path="/dashboard/admin" element={<Admin />} />
        <Route path="/dashboard/staff" element={<Staff />} />



        <Route path="/dashboard/institute" element={<Institute />} />
        <Route path="/dashboard/category" element={<Category />} />
        <Route path="/dashboard/course" element={<Courses />} />
        <Route path="/dashboard/lesson" element={<Lesson />} />
      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<LoginPage />}
      />
      <Route
        errorElement={<ErrorPage />}
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
};
