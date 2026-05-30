interface LogoCarousel_Props {
  direction: "left" | "right";
  LOGOS: string[];
  title: string;
  isDark: boolean;
}

export default function LogoCarousel({
  LOGOS,
  direction,
  title,
  isDark,
}: LogoCarousel_Props) {
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
          className="flex overflow-hidden group"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            className={`flex animate-marquee-${direction} group-hover:[animation-play-state:paused] gap-8 md:gap-14 items-center w-max`}
          >
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={`${direction}-${index}`}
                className="shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-700 cursor-pointer"
              >
                <img
                  src={logo}
                  alt={`image-${index}`}
                  className="w-full h-48 sm:h-52 md:h-60 object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
