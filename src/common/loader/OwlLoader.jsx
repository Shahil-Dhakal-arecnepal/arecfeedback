const OwlLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-24 h-24 animate-bounce">
        {/* Head/Body (abstract owl shape) */}
        <div className="w-full h-full bg-blue-500 rounded-full shadow-lg" />

        {/* Eyes */}
        <div className="absolute top-5 left-1/2 flex space-x-3 -translate-x-1/2">
          <div className="w-5 h-5 bg-white rounded-full border border-blue-700 flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-blue-700 rounded-full" />
          </div>
          <div className="w-5 h-5 bg-white rounded-full border border-blue-700 flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-blue-700 rounded-full" />
          </div>
        </div>

        {/* Beak-like triangle (subtle) */}
        <div className="absolute top-11 left-1/2 w-2 h-2 bg-yellow-400 transform -translate-x-1/2 rotate-45 rounded-sm" />
      </div>
    </div>
  );
};

export default OwlLoader;
