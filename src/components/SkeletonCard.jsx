const SkeletonCard = () => {
  return (
    <div className="border p-3 rounded animate-pulse">
      <div className="bg-gray-300 h-32 w-full mb-3 rounded"></div>
      <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
    </div>
  );
};

export default SkeletonCard;