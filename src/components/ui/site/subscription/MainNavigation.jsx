"use client";

export function MainNavigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: "subscription", label: "Subscription" },
    { id: "order-history", label: "Order history" },
  ];

  return (
    <div className="pt-28 md:pt-32 lg:pt-42">
      <nav className="flex space-x-6 md:space-x-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative transition-colors duration-200 cursor-pointer`}
          >
            <h4
              className={`${
                activeTab === tab.id
                  ? "border-b-2 border-gray-900"
                  : "!text-[var(--font-color)]/50 hover:!text-[var(--font-color)]"
              }`}
            >
              {tab.label}
            </h4>
          </button>
        ))}
      </nav>
    </div>
  );
}
