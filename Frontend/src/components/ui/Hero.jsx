import { hero } from "../../assets/index";
const HeroSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-48">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <p className=" font-semibold text-blue-700">Welcome to,</p>
            <h1 className="text-4xl font-bold capitalize">Kumar Fertilizer</h1>
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
            <div className="relative">
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
