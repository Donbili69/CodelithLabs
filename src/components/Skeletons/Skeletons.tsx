// Skeleton components for loading states

// Hero Section Skeleton
export const HeroSkeleton = () => (
  <div className="relative w-full overflow-hidden bg-gray-100 py-20 md:py-32">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge skeleton */}
        <div className="mx-auto mb-6 h-8 w-32 animate-pulse rounded-full bg-gray-200" />

        {/* Title skeleton */}
        <div className="mx-auto mb-4 h-12 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="mx-auto mb-8 h-12 w-1/2 animate-pulse rounded bg-gray-200" />

        {/* Description skeleton */}
        <div className="mx-auto mb-8 max-w-2xl space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-3/5 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Buttons skeleton */}
        <div className="flex justify-center gap-4">
          <div className="h-12 w-40 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-12 w-40 animate-pulse rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  </div>
)

// Services Section Skeleton
export const ServicesSkeleton = () => (
  <div className="w-full bg-gray-50 py-20">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="mx-auto mb-4 h-6 w-24 animate-pulse rounded-full bg-blue-200" />
        <div className="mx-auto mb-4 h-10 w-96 animate-pulse rounded bg-gray-200" />
        <div className="mx-auto h-4 w-2/3 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 h-12 w-12 animate-pulse rounded-lg bg-gray-200" />
            <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Team Section Skeleton
export const TeamSkeleton = () => (
  <div className="w-full bg-white py-20">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="mx-auto mb-4 h-6 w-24 animate-pulse rounded-full bg-blue-200" />
        <div className="mx-auto mb-4 h-10 w-80 animate-pulse rounded bg-gray-200" />
        <div className="mx-auto h-4 w-2/3 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Team Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto mb-4 h-48 w-48 animate-pulse rounded-full bg-gray-200" />
            <div className="mx-auto mb-2 h-5 w-32 animate-pulse rounded bg-gray-200" />
            <div className="mx-auto h-4 w-24 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Testimonials Skeleton
export const TestimonialsSkeleton = () => (
  <div className="w-full bg-gray-50 py-20">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="mx-auto mb-4 h-6 w-32 animate-pulse rounded-full bg-blue-200" />
        <div className="mx-auto mb-4 h-10 w-72 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />
              <div>
                <div className="mb-1 h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Generic Card Skeleton
export const CardSkeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse rounded-lg bg-gray-200 ${className}`} />
)

// Generic Text Line Skeleton
export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {[...Array(lines)].map((_, i) => (
      <div
        key={i}
        className="h-4 animate-pulse rounded bg-gray-200"
        style={{ width: i === lines - 1 ? '75%' : '100%' }}
      />
    ))}
  </div>
)
