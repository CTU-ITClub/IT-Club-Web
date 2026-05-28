interface AboutPageProps {
  isDark: boolean;
}

export default function AboutPage({ isDark }: AboutPageProps) {
  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-[#0a1929] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1
          className={`text-4xl font-extrabold mb-4 ${
            isDark ? "text-cyan-300" : "text-blue-900"
          }`}
        >
          Giới thiệu
        </h1>
        <p
          className={`text-lg ${isDark ? "text-slate-200" : "text-slate-700"}`}
        >
          Trang giới thiệu thông tin chung cho CLB sẽ được viết sau.
        </p>
      </div>
    </div>
  );
}
