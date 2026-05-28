import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import ActivitiesPage from "../pages/ActivitiesPage";
import HomePage from "../pages/HomePage";
import StaffPage from "../pages/StaffPage";

interface AppRoutesProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function AppRoutes({ isDark, onToggle }: AppRoutesProps) {
  return (
    <Routes>
      <Route element={<MainLayout isDark={isDark} onToggle={onToggle} />}>
        <Route index element={<HomePage isDark={isDark} />} />
        <Route path="about" element={<AboutPage isDark={isDark} />} />
        <Route path="staff" element={<StaffPage isDark={isDark} />} />
        <Route path="activities" element={<ActivitiesPage isDark={isDark} />} />
        <Route path="*" element={<HomePage isDark={isDark} />} />
      </Route>
    </Routes>
  );
}
