import { Rocket, Lightbulb } from "lucide-react";
import { use, useEffect, useState } from "react";

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

const srcImg = [
  {
    id: 1,
    src: "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/657173409_1525823052697559_3491735791438855593_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFU15LjFtztxwgR1JkpSMgpJIv9Nkcu6gEki_02Ry7qASfpytdJ0XHXI07qezHW3jFhAs4Ay1X74LXojGz657uU&_nc_ohc=lA21II0idD8Q7kNvwEz1jnQ&_nc_oc=Adp_svQm0BhR5f158xTQKR_ldAa1mj08R2FBVFLiLeWgQGQpT5mACyuCTviv8pQL3kIt9blaf76cyc4WpsMQHTvs&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=a__hopuEUEaLf6N0qUfUtw&_nc_ss=7b2a8&oh=00_Af_s_lvkecIG4XtkkM30tYnCueftzcZk_DmrRjnXPHugWQ&oe=6A218126",
  },
  {
    id: 2,
    src: "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/657375455_1525824582697406_8685435483667334194_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_eNa9ZMnsP_UDej93SodytrsLC_GJHWC2uwsL8YkdYJArf8uFP6tAdYeIZyUrtFQrSMzMnqEqOeA4Y8WOvZLQ&_nc_ohc=E7U-KiY3FNEQ7kNvwGkH3Rp&_nc_oc=AdrUKwDCPwUzPf9N1YteeZq4LAPXleXIy2cmlnODgWUulnaevK6otHm1Ky3FdJ07mzELGpgNfT0CNDcMbvkSXw3o&_nc_zt=23&_nc_ht=scontent.fvca1-2.fna&_nc_gid=4gtfnfuJgkiQCAm5cGQQGA&_nc_ss=7b2a8&oh=00_Af94Cjv6tTh0wOJQFwBoQ94RXrVdnZGiP_wdIJ28pnxJ2w&oe=6A2232C1",
  },
  {
    id: 3,
    src: "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/658112408_1525823619364169_2656015095863835323_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE2sAf2Q8Ox0QuUo5x8iZQr2jmMLYDVJIfaOYwtgNUkh-wU394vBf7d19DtUydb8ySMnV9tXSLq9PGuOQdpaS3B&_nc_ohc=7z1U7-D1uuwQ7kNvwHBJEn7&_nc_oc=AdohyqONcWihqa7WZd_gJ356LCp5PlT02I65uiInHvNFP2TfIvF8GU3oxN6I6D7pBGezGmj5CvSx_nGRKeMJwVCj&_nc_zt=23&_nc_ht=scontent.fvca1-2.fna&_nc_gid=42UkzOaFA5SssEzGIa49VQ&_nc_ss=7b2a8&oh=00_Af_RUdNIt_6EgVga8FRRoJVBBL6RmM2MpIrDg6d9mGdLUQ&oe=6A2238F2",
  },
  {
    id: 4,
    src: "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/581515863_1411506210795911_1017979397159752859_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEistFxZW_yjazaFPAs_MgrVhX1xh3yAE1WFfXGHfIATcTorPbqbNGAqunOYKSkWRaiKR1wxq33YEiwXqx6Kux_&_nc_ohc=T53kHRciuQoQ7kNvwFEe8mB&_nc_oc=AdpTdRW5LhRPdhOCNJmi6LZUSRK6iPhcUHuYR0MoE_jtgCw0SEnOVZmW9cXJn-ZfAwmqqxfTiI3Jm29MUOHsyswX&_nc_zt=23&_nc_ht=scontent.fvca1-2.fna&_nc_gid=uYwzNyCvLzCytnf1XAYKyg&_nc_ss=7b2a8&oh=00_Af9ftKdDsdsfu3AU42YMOMjOvZ7CC6ceZvNp3GF8oSm0lQ&oe=6A22275F",
  },
  {
    id: 5,
    src: "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/489416009_1222564213023446_377397701322289831_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFCRH5EK0n-m6_q-ZBGS_nUuEM0yaD3KQ64QzTJoPcpDuwOj2LKcVPjUc6CztAXJieBksIzqlqUhFbsQhC9eHmZ&_nc_ohc=eK5E40TfjSgQ7kNvwEdO_4_&_nc_oc=Adqs0AA3pVna5DlVt2UQiZ1uDNw_ByN6LwdrxxU3wdVZvl2mTljSkH5r6A-060kXiXjcmJ8bq92mwWWU_ivCnoYM&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=Vr7R6w_Zd2dQPMaCKUl-6Q&_nc_ss=7b2a8&oh=00_Af9-9cJyEmJZhoFTP-vyzHOTncXSCF0Nk7uoK2Pyy60byw&oe=6A22495E",
  },
];

export function IntroSection({ isDark }: IntroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const nextImageIndex = (currentImageIndex + 1) % srcImg.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === srcImg.length - 1 ? 0 : prevIndex + 1,
        );
        setIsFading(false);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-3 sm:mx-auto w-full">
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

          <div className="relative rounded-2xl overflow-hidden shadow-lg group max-w-xl h-56 sm:h-96 w-full">
            <img
              className={`inset-0 object-cover transition-opacity duration-700 ease-in-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
              src={srcImg[currentImageIndex].src}
              alt="IT CLUB image"
            />
            <img
              className={`inset-0 object-cover transition-opacity duration-700 ease-in-out ${
                isFading ? "opacity-100" : "opacity-0"
              }`}
              src={srcImg[nextImageIndex].src}
              alt="IT CLUB image"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {Items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
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
                    {item.name}
                  </h3>
                </div>
                <p
                  className={`text-base ${isDark ? "text-white/90" : "text-slate-700"}`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
