"use client";

import { useState } from "react";
import { MainNavigation } from "@/components/ui/site/subscription/MainNavigation";
import { OrderFilters } from "@/components/ui/site/subscription/OrderFilters";
import { SearchAndFilters } from "@/components/ui/site/subscription/SearchAndFilters";
import Container from "@/components/site/layout/Container";
import Image from "next/image";
import Button from "@/components/ui/site/button/Button";

export default function OrderHistoryPage() {
  const [activeTab, setActiveTab] = useState("order-history");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Container>
        <MainNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "order-history" && (
          <div>
            <div className="py-10 md:py-16 w-full flex flex-col-reverse lg:flex-col">
              <OrderFilters
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />

              <SearchAndFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-24">
              <div>
                <Image
                  width={200}
                  height={200}
                  alt={"/"}
                  src={"/images/subscription/no-result.jpg"}
                />
              </div>
              <h4 className="my-2">No relevant orders found</h4>
              <p>You can go and see what you want to buy</p>
              <Button
                buttonName={"Go to buy"}
                href={"/"}
                className={"!w-fit my-6"}
              />
            </div>
          </div>
        )}

        {activeTab === "subscription" && (
          <div className="p-6 my-20">
            <div className="text-center py-12">
              <h3>Subscription Management</h3>
              <p>Manage your subscription settings and billing information.</p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
