import groupImage from "../assets/group_profile.png";
import heroImg from "../assets/hero_img.png";
import bgImage1 from "../assets/bgImage1.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12
      lg:px-24 xl:px-40 text-center w-full overflow-hidden
      bg-white dark:bg-gray-900
      text-gray-700 dark:text-white"
    >
      {/* Trusted Section */}
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={groupImage} alt="Group Profile" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-gray-300 max-w-lg pb-3">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>

      {/* Images */}
      <div className="relative">
        <img src={heroImg} alt="Hero" className="w-full max-w-6xl" />

        <img
          src={bgImage1}
          alt="Background"
          className="absolute -top-40 -right-40 sm:-top-52 sm:-right-52 -z-10 dark:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
