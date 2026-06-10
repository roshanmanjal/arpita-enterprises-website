export default function SkeletonLoader({ type = "page", count = 4 }) {
  if (type === "hero") {
    return (
      <div className="min-h-[70vh] bg-sky-50 px-5 pt-28">
        <div className="mx-auto max-w-7xl space-y-5">
          <div className="h-8 w-52 rounded-full skeleton-shimmer" />
          <div className="h-16 max-w-2xl rounded-2xl skeleton-shimmer" />
          <div className="h-5 max-w-xl rounded-lg skeleton-shimmer" />
          <div className="h-12 w-44 rounded-2xl skeleton-shimmer" />
        </div>
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className="rounded-[24px] border border-sky-200 bg-white p-4 shadow-card-md animate-pulse">
        <div className="aspect-square rounded-[18px] skeleton-shimmer" />
        <div className="mt-4 h-4 rounded skeleton-shimmer" />
        <div className="mt-2 h-4 w-2/3 rounded skeleton-shimmer" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-50 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 h-10 max-w-sm rounded-xl skeleton-shimmer" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: count }).map((_, index) => (
            <SkeletonLoader key={index} type="card" />
          ))}
        </div>
      </div>
    </div>
  );
}

