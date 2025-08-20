// components/LogoMarquee.tsx
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function LogoMarquee() {
  const logos = [
    { src: "/assets/Images/khatraDokan.png", width: 150, height: 150 },
    { src: "/assets/Images/nakab.png", width: 150, height: 150 },
    { src: "/assets/Images/Tara Global Logo.png", width: 150, height: 150 },
    { src: "/assets/Images/helios.jpg", width: 150, height: 150 },
     { src: "/assets/Images/nakab.png", width: 150, height: 150 },

  ];

  return (
   <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded  bg-transparent z-0">
      <Marquee speed={80}   direction="right"  gradient={false} gradientColor="black" pauseOnHover={false}>
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
              className="mx-auto object-fit"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
