import { Outlet } from "react-router-dom";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";

interface MainLayoutProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function MainLayout({ isDark, onToggle }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <ThemeToggle isDark={isDark} onToggle={onToggle} />
      <Header isDark={isDark} />
      <Outlet />
    </div>
  );
}
