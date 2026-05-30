import {
  ActivitiesSection,
  // FaqSection,
  // FooterSection,
  HeroSection,
  // IntroSection,
} from "../components/sections/homePage/index";

interface HomePageProps {
  isDark: boolean;
}

export default function HomePage({ isDark }: HomePageProps) {
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-[#0a1929]" : "bg-slate-50"}`}
    >
      <HeroSection isDark={isDark} />

      <div
        className={`${isDark ? "bg-linear-to-b from-[#0d2137] to-[#1a365d]" : "bg-linear-to-b from-slate-50 to-white"}`}
      >
        <ActivitiesSection isDark={isDark} />
        {/* <IntroSection isDark={isDark} />
        <FaqSection isDark={isDark} />
        <FooterSection isDark={isDark} /> */}
      </div>
    </div>
  );
}
