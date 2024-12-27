import { hero } from "../../assets/index";

const HeroSection = () => {
  return (
    <section className="relative py-44 -mt-28">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-6 max-w-[70%] mx-auto">
            <span>
              <p className="font-semibold text-blue-700">Welcome to,</p>
              <h1 className="text-4xl font-bold capitalize">
                Kumar Fertilizer
              </h1>
            </span>

            <p className="text-gray-700">
              As India's premier online agri shop, we provide everything you
              need for successful farming from high-quality seeds, fertilizers,
              and pesticides to plant growth regulators, irrigation solutions,
              and cutting-edge farming tools. Our commitment lies in offering
              you the market's best prices, along with dedicated customer
              support to ensure your farming endeavors thrive. Explore our
              extensive range and experience the difference with{" "}
              <b>Kumar Fertilizer Pvt Ltd.</b>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative mt-6">
              <img
                src={hero}
                alt="hero"
                className="w-full max-w-sm h-auto rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-purple-300 opacity-50 -z-10 transform translate-x-8 -translate-y-12 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
