interface LogoCarousel_Props {
  direction: "left" | "right";
  LOGOS: string[];
  title: string;
}

export default function LogoCarousel({
  LOGOS,
  direction,
  title,
}: LogoCarousel_Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative py-5">
      <div className="flex flex-col gap-4 relative">
        <h1>{title}</h1>
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
                  className="h-28 md:h-36 w-auto object-contain rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
