"use client";

import CategoryDetails from "./CategoryContentDetails";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function CategoryContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("category")?.toLowerCase() || "all";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/product/public/get/get-product-by-category-slug/${slug}`,
      );
      if (res?.data?.success) {
        setProducts(res.data.products || []);
      } else {
        setProducts([]);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load Products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [slug]);

  const SkeletonCard = () => (
    <div className="relative custom-rounded p-6 bordered mt-8 animate-pulse bg-gray-100 h-64 flex flex-col justify-between">
      <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-10 lg:py-16">
      {loading ? (
        // Show 6 skeleton cards while loading
        Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
      ) : products?.length > 0 ? (
        products?.map((product, index) => (
          <div key={index}>
            <Link href={`/details/${product?.slug}`}>
              <div
                className={`relative custom-rounded p-6 bordered hover:shadow-lg mt-8`}
              >
                <div className="absolute top-6 right-4">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-white">👤</span>
                    </div>
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">C</span>
                    </div>
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">R</span>
                    </div>
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-orange-600 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {/* {item.users || "0"} */} 200+
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-8 w-20 h-20 md:w-24 md:h-24">
                  <Image
                    fill
                    src={product?.basic_info?.thumbnail?.url}
                    alt={product?.basic_info?.thumbnail?.alt || "product"}
                    className="object-contain rounded-4xl"
                    sizes="(max-width: 768px) 100vw,
   (max-width: 1200px) 50vw,
   25vw"
                  />
                </div>

                <div className="flex justify-between items-center mt-16 md:mt-24">
                  <div>
                    <h3 className="mb-2">{product?.basic_info?.name}</h3>
                  </div>
                  <div className="text-right">
                    <h2>${product?.basic_info?.price?.originalPrice}</h2>
                  </div>
                </div>
              </div>
            </Link>
            {product?.productPoints && product?.productPoints.length > 0 && (
              <CategoryDetails
                details={product?.productPoints}
                slug={product?.basic_info?.slug}
              />
            )}
          </div>
        ))
      ) : (
        // No products found
        <p className="col-span-full text-center text-gray-500 bg-pink-200 font-bold capitalize rounded-4xl p-3 mt-10">
          No products found.
        </p>
      )}
    </div>
  );
}
