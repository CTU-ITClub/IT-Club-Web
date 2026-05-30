import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface QaASectionProps {
  isDark: boolean;
}

const faqs = [
  {
    question: "Câu lạc bộ tin học là gì?",
    answer:
      "Câu lạc bộ Tin học là nơi tập hợp những sinh viên đam mê công nghệ thông tin, cùng nhau học hỏi và phát triển kỹ năng lập trình.",
  },
  {
    question: "Làm thế nào để tham gia CLB?",
    answer:
      "Bạn có thể đăng ký tham gia thông qua form đăng ký trực tuyến hoặc liên hệ trực tiếp với ban quản trị CLB qua email hoặc fanpage.",
  },
  {
    question: "CLB có những hoạt động gì?",
    answer:
      "CLB tổ chức các workshop, game tuyển sinh, cuộc thi lập trình như CICT, ICPC và nhiều hoạt động học thuật khác.",
  },
  {
    question: "Có cần kinh nghiệm lập trình không?",
    answer:
      "Không nhất thiết! CLB chào đón tất cả các bạn từ người mới bắt đầu đến những người đã có kinh nghiệm.",
  },
  {
    question: "Liên hệ CLB như thế nào?",
    answer:
      "Bạn có thể liên hệ qua email: itc.cit.ctu@gmail.com hoặc gọi điện: 090909090909",
  },
];

export function QaASection({ isDark }: QaASectionProps) {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const handleToggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <section
      className={`py-16 md:py-24 ${
        isDark
          ? "bg-linear-to-b from-[#1a365d] to-[#0d2137]"
          : "bg-linear-to-b from-white to-blue-50/50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-sans ${
              isDark ? "text-white" : "text-blue-950"
            }`}
          >
            Q & A
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-[#0d2137]/60 border-cyan-400/40 hover:border-cyan-400/70"
                  : "bg-white border-blue-100 hover:border-blue-300"
              } backdrop-blur-sm shadow-lg`}
            >
              <button
                onClick={() => handleToggleFaq(idx)}
                className="w-full px-5 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-left"
              >
                <span
                  className={`text-lg sm:text-xl md:text-2xl font-bold pr-4 font-sans ${
                    isDark ? "text-white" : "text-blue-900"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                    isDark ? "text-cyan-400" : "text-blue-500"
                  } ${openFaqs.includes(idx) ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqs.includes(idx)
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 sm:px-8 pb-6 pt-2">
                  <p
                    className={`text-base sm:text-lg leading-relaxed font-sans ${
                      isDark ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
