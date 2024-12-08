const Services = () => {
  const services = [
    {
      name: "Fertilizer",
      image:
        "https://img.freepik.com/premium-photo/fertilizer-sack_39396-8.jpg?ga=GA1.1.906105498.1710994680&semt=ais_hybrid",
      description:
        "Enhance soil fertility with our premium fertilizers, designed to boost plant growth.",
    },
    {
      name: "Vegetable Seeds",
      image:
        "https://img.freepik.com/premium-photo/microgreens-microgreens-sprouted-chard-seeds-white-background-home-seed-germination_410516-3872.jpg?ga=GA1.1.906105498.1710994680&semt=ais_hybrid",
      description:
        "Quality vegetable seeds for a bountiful harvest in your home or garden.",
    },
    {
      name: "Pesticides",
      image:
        "https://img.freepik.com/premium-photo/person-protective-gear-spraying-pesticides-field_1270664-34536.jpg?ga=GA1.1.906105498.1710994680&semt=ais_hybrid",
      description:
        "Protect your crops from pests with effective and safe pesticide solutions.",
    },
    {
      name: "Herbicides",
      image:
        "https://img.freepik.com/premium-photo/farmer-wears-protective-mask-while-spraying-pesticides-field-cockroach-species-identified-as-bl_948103-2525.jpg?ga=GA1.1.906105498.1710994680&semt=ais_hybrid",
      description:
        "Control unwanted weeds and invasive plants with powerful herbicides.",
    },
    {
      name: "Equipment",
      image:
        "https://img.freepik.com/premium-photo/gardening-tools-white-top-view_185193-13080.jpg?ga=GA1.1.906105498.1710994680&semt=ais_hybrid",
      description:
        "High-quality farming tools and equipment for all your agricultural needs.",
    },
    {
      name: "Plant Nutrition",
      image:
        "https://img.freepik.com/premium-photo/close-up-hand-watering-plant-against-black-background_1048944-30688009.jpg?ga=GA1.1.906105498.1710994680&semt=ais_hybrid",
      description:
        "Ensure healthy plant growth with our plant nutrition solutions and supplements.",
    },
  ];

  return (
    <div className="w-full py-10 bg-slate-200">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600 mt-1">
          Explore our range of premium agricultural products.
        </p>
        <div className="w-16 h-[3px] bg-sky-500 mx-auto mt-3"></div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex items-center justify-center h-48 bg-gray-100">
              <img
                src={service.image}
                alt={service.name}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-base font-semibold text-gray-800">
                {service.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
