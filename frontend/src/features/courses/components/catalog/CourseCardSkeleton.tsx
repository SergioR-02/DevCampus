const CourseCardSkeleton= () => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 animate-pulse">
      <div className="w-full h-48 bg-slate-700" />
      <div className="p-6">
        <div className="h-6 bg-slate-700 rounded mb-3" />
        <div className="h-4 bg-slate-700 rounded mb-2 w-3/4" />
        <div className="h-4 bg-slate-700 rounded mb-4 w-1/2" />
        <div className="flex items-center justify-between">
          <div className="h-4 bg-slate-700 rounded w-20" />
          <div className="h-9 bg-slate-700 rounded w-24" />
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;