const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-t-4 border-blue-500 animate-spin"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-4 border-green-500 animate-spin-reverse"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
  