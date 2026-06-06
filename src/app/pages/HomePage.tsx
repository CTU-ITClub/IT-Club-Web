import { useEffect, useRef, useState } from "react";
import {
  ActivitiesSection,
  TeamSection,
  QaASection,
  HeroSection,
  IntroSection,
} from "../components/sections/homePage/index";

interface HomePageProps {
  isDark: boolean;
}

function FadeInSection({ children }: { children: React.ReactNode }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
}

export default function HomePage({ isDark }: HomePageProps) {
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-[#0a1929]" : "bg-slate-50"}`}
    >
      <HeroSection isDark={isDark} />

      <div
        className={`${isDark ? "bg-linear-to-b from-[#0d2137] to-[#1a365d]" : "bg-linear-to-b from-slate-50 to-white"} overflow-x-hidden`}
      >
        <FadeInSection>
          <IntroSection isDark={isDark} />
        </FadeInSection>
        <FadeInSection>
          <ActivitiesSection isDark={isDark} />
        </FadeInSection>
        <FadeInSection>
          <TeamSection isDark={isDark} />
        </FadeInSection>
        <FadeInSection>
          <QaASection isDark={isDark} />
        </FadeInSection>
      </div>
    </div>
  );
}
