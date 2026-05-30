import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

interface LogoCarousel_Props {
  direction: "left" | "right";
  LOGOS: string[];
  title: string;
  isDark: boolean;
  durationSeconds?: number;
}

export default function LogoCarousel({
  LOGOS,
  direction,
  title,
  isDark,
  durationSeconds = 40,
}: LogoCarousel_Props) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";
  const groupRef = useRef<HTMLDivElement | null>(null);
  const [marqueeDistance, setMarqueeDistance] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
    const groupElement = groupRef.current;

    if (!groupElement) {
      return;
    }

    const updateDistance = () => {
      setMarqueeDistance(groupElement.scrollWidth);
    };

    updateDistance();

    const resizeObserver = new ResizeObserver(updateDistance);
    resizeObserver.observe(groupElement);

    return () => resizeObserver.disconnect();
  }, [LOGOS]);

  const renderLogos = (groupKey: string) =>
    LOGOS.map((logo, index) => (
      <div
        key={`${direction}-${groupKey}-${index}`}
        className="shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-700 cursor-pointer relative hover:z-20"
      >
        <img
          src={logo}
          alt={`image-${index}`}
          className="w-full h-48 sm:h-52 md:h-60 object-cover rounded-2xl transition-transform duration-300 ease-out hover:scale-110 transform-gpu"
        />
      </div>
    ));

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative py-5">
      <div className="flex flex-col gap-4 relative">
        <h3
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 font-sans ${
            isDark ? "text-cyan-300" : "text-sky-700"
          }`}
        >
          {title}
        </h3>
        <div
          className="flex overflow-hidden py-4 sm:py-6"
          style={{
            maskImage: isHovered
              ? "none"
              : "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: isHovered
              ? "none"
              : "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex items-center w-max"
            style={
              {
                animation: `${animationName} ${durationSeconds}s linear infinite`,
                animationPlayState: isHovered ? "paused" : "running",
                willChange: "transform",
                ["--marquee-distance" as unknown as string]: `${marqueeDistance}px`,
              } as CSSProperties
            }
          >
            <div
              ref={groupRef}
              className="flex shrink-0 items-center gap-8 md:gap-14 pr-8 md:pr-14"
            >
              {renderLogos("a")}
            </div>
            <div
              className="flex shrink-0 items-center gap-8 md:gap-14"
              aria-hidden="true"
            >
              {renderLogos("b")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
