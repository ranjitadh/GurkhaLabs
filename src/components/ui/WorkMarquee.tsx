// components/LogoMarquee.tsx
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function LogoMarquee() {
  const logos = [
    { src: "/assets/Images/khatraDokan.png", width: 150, height: 150 },
    { src: "/assets/Images/nakab.png", width: 150, height: 150 },
    { src: "/assets/Images/Tara Global Logo.png", width: 120, height: 120 },
    { src: "/assets/Images/helios.jpg", width: 130, height: 130 },
  ];

  return (
    <div className="mt-8  px-6 sm:px-10 max-w-screen mx-auto">
      <Marquee speed={80} gradient={false} pauseOnHover={true}>
        {logos.map((img, index) => (
          <div
            key={index}
            className="flex justify-center items-center mx-20"
            style={{ minWidth: `${img.width}px` }}
          >
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt="Company logo"
              className="mx-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
