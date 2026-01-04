"use client";

export function OrderFilters({ activeFilter, onFilterChange }) {
  const filters = [
    { id: "all", label: "All", count: null },
    { id: "processing", label: "Processing", count: 0 },
    { id: "completed", label: "Completed", count: 0 },
    { id: "pending-resolution", label: "Pending Resolution", count: 0 },
    { id: "refunded", label: "Refunded", count: 0 },
    { id: "cancelled", label: "Cancelled Orders", count: 0 },
  ];

  return (
    <div className="flex whitespace-nowrap overflow-x-auto gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded text-sm cursor-pointer transition-colors duration-200 border ${
            activeFilter === filter.id
              ? "border-[var(--navigation-color)] text-[var(--font-color)] shadow-sm"
              : "text-[var(--font-color)] border-[var(--navigation-color)]/20"
          }`}
        >
          {filter.label}
          {filter.count !== null && (
            <span
              className={`ml-1 ${
                activeFilter === filter.id ? "text-[var(--font-color)]" : "text-[var(--font-color)]"
              }`}
            >
              ({filter.count})
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
