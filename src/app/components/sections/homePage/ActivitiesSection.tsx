import { useState, useEffect } from "react";
import LogoCarousel from "./LogoCarousel";

interface ActivitiesSection_Props {
  isDark: boolean;
}

interface CloudinaryResource {
  version: number;
  public_id: string;
  format: string;
}


export function ActivitiesSection({ isDark }: ActivitiesSection_Props) {
  const [logosWorkshop, setLogosWorkshop] = useState<string[]>([]);
  const [logosGame, setLogosGame] = useState<string[]>([]);
  const [logosExam, setLogosExam] = useState<string[]>([]);

  useEffect(() => {
    const fetchCloudinaryList = async (url: string) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.resources && data.resources.length > 0) {
          return data.resources.map(
            (img: CloudinaryResource) =>
              `https://res.cloudinary.com/dcvuaqnah/image/upload/v${img.version}/${img.public_id}.${img.format}`,
          );
        }
      } catch (error) {
        console.error("Error fetching Cloudinary list:", error);
      }
      return [];
    };

    fetchCloudinaryList(
      "https://res.cloudinary.com/dcvuaqnah/image/list/HomePage-ActivitiesSection-Workshops.json",
    ).then((urls) => urls.length && setLogosWorkshop(urls));
    fetchCloudinaryList(
      "https://res.cloudinary.com/dcvuaqnah/image/list/HomePage-ActivitiesSection-GameAndAdmission.json",
    ).then((urls) => urls.length && setLogosGame(urls));
    fetchCloudinaryList(
      "https://res.cloudinary.com/dcvuaqnah/image/list/HomePage-ActivitiesSection-Competitions.json",
    ).then((urls) => urls.length && setLogosExam(urls));
  }, []);

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
          LOGOS={logosWorkshop}
          direction="left"
          title="Workshop"
          isDark={isDark}
        />
        <LogoCarousel
          LOGOS={logosGame}
          direction="right"
          title="Game và tuyển sinh"
          isDark={isDark}
        />
        <LogoCarousel
          LOGOS={logosExam}
          direction="left"
          title="Các cuộc thi"
          isDark={isDark}
        />
      </div>
    </section>
  );
}
