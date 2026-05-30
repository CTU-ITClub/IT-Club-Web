import { useState } from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./app/routes/AppRoutes";

// để tạm hashrouter để tránh lỗi khi deploy lên github page, vì github page không hỗ trợ browser router
// sau này có đổi nền tàng thì đổi lại browser router để tốt cho SEO hơn

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <HashRouter>
      <AppRoutes isDark={isDark} onToggle={toggleTheme} />
    </HashRouter>
  );
}
