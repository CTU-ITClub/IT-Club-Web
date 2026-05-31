import { Rocket, Lightbulb } from "lucide-react";

interface IntroSectionProps {
  isDark: boolean;
}

const Items = [
  {
    name: "Sứ mệnh",
    icon: Rocket,
    description:
      "Tạo ra một cộng đồng năng động cho những người đam mê công nghệ thông tin, mang đến trải nghiệm học tập phong phú và cơ hội phát triển toàn diện.",
  },
  {
    name: "Tầm nhìn",
    icon: Lightbulb,
    description:
      "Trở thành một trong những câu lạc bộ công nghệ hàng đầu, nơi các thành viên có thể phát triển kỹ năng, chia sẻ kiến thức và cùng nhau tạo ra những giá trị tích cực cho cộng đồng.",
  },
];

export function IntroSection({ isDark }: IntroSectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto w-full">
        <div className="py-10 md:py-18 flex justify-between flex-col lg:flex-row items-center gap-10">
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-sans ${
                isDark ? "text-white" : "text-blue-950"
              }`}
            >
              Giới thiệu
            </h2>
            <div className="space-y-4 mt-10 max-w-2xl md:max-w-xl text-lg sm:text-xl md:text-2xl">
              <p
                className={`text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl ${isDark ? "text-white/90" : "text-slate-700"}`}
              >
                Câu lạc bộ Tin học được thành lập với sứ mệnh tạo ra một cộng
                đồng năng động cho những người đam mê công nghệ thông tin.
              </p>
              <p
                className={`text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl ${isDark ? "text-white/90" : "text-slate-700"}`}
              >
                Từ những buổi workshop thực hành, các dự án nhóm, các cuộc thi
                CICT ICPC, CLB Tin học luôn mang đến những trải nghiệm học tập
                phong phú và cơ hội phát triển toàn diện cho tất cả mọi người.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg group">
            <img
              className="w-full max-w-xl h-56 sm:h-64 md:h-92 lg:h-105 object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1 transform-gpu"
              src="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/657173409_1525823052697559_3491735791438855593_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFU15LjFtztxwgR1JkpSMgpJIv9Nkcu6gEki_02Ry7qASfpytdJ0XHXI07qezHW3jFhAs4Ay1X74LXojGz657uU&_nc_ohc=lA21II0idD8Q7kNvwEz1jnQ&_nc_oc=Adp_svQm0BhR5f158xTQKR_ldAa1mj08R2FBVFLiLeWgQGQpT5mACyuCTviv8pQL3kIt9blaf76cyc4WpsMQHTvs&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=a__hopuEUEaLf6N0qUfUtw&_nc_ss=7b2a8&oh=00_Af_s_lvkecIG4XtkkM30tYnCueftzcZk_DmrRjnXPHugWQ&oe=6A218126"
              alt="IT CLUB image"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {Items.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className={`rounded-3xl p-8 sm:p-10 min-h-56 transition-transform duration-400 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isDark
                    ? "bg-[#0d2137]/80 border border-cyan-400/50 hover:border-cyan-400/70"
                    : "bg-white border border-blue-100/60 hover:border-blue-300"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${isDark ? "bg-cyan-400/10" : "bg-blue-50"}`}
                  >
                    <Icon
                      className={`${isDark ? "text-cyan-400" : "text-blue-500"} w-10 h-10`}
                    />
                  </div>
                  <h3
                    className={`text-2xl sm:text-3xl font-bold font-sans mt-1 ${
                      isDark ? "text-cyan-300" : "text-blue-800"
                    }`}
                  >
                    {t.name}
                  </h3>
                </div>
                <p
                  className={`text-base ${isDark ? "text-white/90" : "text-slate-700"}`}
                >
                  {t.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
