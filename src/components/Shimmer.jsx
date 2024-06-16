const Shimmer = () => {
  return (
    <div className="flex items-center flex-wrap justify-center gap-8">
      {Array(20)
        .fill(0)
        .map((item, i) => (
          <div
            key={i}
            className="w-72 animate-pulse border border-gray-400 rounded-xl p-5"
          >
            <div className="w-full bg-gray-300 rounded-xl h-60"></div>
            <p className="bg-gray-300 w-full rounded-lg h-5 mt-2"></p>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
