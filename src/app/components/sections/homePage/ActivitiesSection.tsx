import LogoCarousel from "./LogoCarousel";

import image1 from "../../../../assets/images/homePage/photos/image1.png";
import image2 from "../../../../assets/images/homePage/photos/image2.png";
import image3 from "../../../../assets/images/homePage/photos/image3.png";
import image4 from "../../../../assets/images/homePage/photos/image4.png";
import image5 from "../../../../assets/images/homePage/photos/image5.png";
import image6 from "../../../../assets/images/homePage/photos/image6.png";
import image7 from "../../../../assets/images/homePage/photos/image7.png";
import image8 from "../../../../assets/images/homePage/photos/image8.png";
import image9 from "../../../../assets/images/homePage/photos/image9.png";
import image10 from "../../../../assets/images/homePage/photos/image10.png";

interface ActivitiesSection_Props {
  isDark: boolean;
}

const LOGOS_Workshop = [image1, image2, image3, image4, image5];

const LOGOS_Game = [image6, image7, image8, image9, image10];

const LOGOS_Exam = [image1, image3, image5, image7, image9];

export function ActivitiesSection({ isDark }: ActivitiesSection_Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 text-center font-sans ${
          isDark ? "text-white" : "text-blue-950"
        }`}
      >
        Hoạt động
      </h2>
      <div className="mb-10">
        <LogoCarousel
          LOGOS={LOGOS_Workshop}
          direction="left"
          title="Workshop"
          isDark={isDark}
          durationSeconds={15}
        />
        <LogoCarousel
          LOGOS={LOGOS_Game}
          direction="right"
          title="Game và tuyển sinh"
          isDark={isDark}
          durationSeconds={15}
        />
        <LogoCarousel
          LOGOS={LOGOS_Exam}
          direction="left"
          title="Các cuộc thi"
          isDark={isDark}
          durationSeconds={15}
        />
      </div>
    </section>
  );
}
