import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes/AppRoutes";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <BrowserRouter>
      <AppRoutes isDark={isDark} onToggle={toggleTheme} />
    </BrowserRouter>
  );
}
