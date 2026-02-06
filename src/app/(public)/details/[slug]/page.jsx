"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import NotFound from "@/app/not-found";

import Container from "@/components/site/layout/Container";
// import TypeOptions from "../payment/TypeOptions";
import Image from "next/image";
// import PaymentBox from "../payment/PaymentBox";
// import Points from "./ProductPoints";
// import BrandName from "./BrandName";
// import WhyChoice from "./WhyChoose";
// import Faqs from "./DetailsFaqs";
// import HowItWork from "./HowItWork";
import { Tick } from "@/components/icons/icons";
import BorderButton from "@/components/ui/site/button/BorderButton";

export default function DetailSlugPage({ params }) {
  const { slug } = React.use(params);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/product/public/get/get-product-by-slug/${slug}`,
      );
      console.log(res?.data?.product);
      if (res?.data?.success) {
        setProduct(res?.data?.product[0] || []);
      } else {
        setProduct([]);
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

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="pt-28 md:pt-32 lg:pt-42">
      {loading ? (
        "Loading"
      ) : (
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="lg:flex lg:gap-16 mb-24 lg:mb-32">
                <div className="flex gap-6 mb-8">
                  <Image
                    src={product.basic_info.thumbnail.url}
                    alt={product.basic_info.thumbnail.alt || "Product image"}
                    width={250}
                    height={250}
                    className="rounded-2xl w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-48 object-cover"
                  />
                  <div className="block lg:hidden">
                    <div className="justify-end text-end mb-4 flex lg:hidden ">
                      <button className={"muted-btn !text-xs md:!text-base"}>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 w-full">
                  <div className="justify-end text-end mb-10 hidden lg:flex">
                    <button className={"muted-btn"}>Share</button>
                  </div>
                  {/* <PurchaseMonth /> */}

                  <div className="space-y-2">
                    <h5>Purchase months</h5>
                    {product?.purchaseMonths?.oneMonth && (
                      <button className={`mr-4 cursor-pointer border-btn`}>
                        1 month
                      </button>
                    )}
                    {product?.purchaseMonths?.threeMonth && (
                      <BorderButton
                        buttonName={"3 month"}
                        className={`mr-4 muted-btn hover:border-btn`}
                      />
                    )}
                    {product?.purchaseMonths?.sixMonth && (
                      <BorderButton
                        buttonName={"6 month"}
                        className={`mr-4 muted-btn hover:border-btn`}
                      />
                    )}
                    {product?.purchaseMonths?.twelveMonth && (
                      <BorderButton
                        buttonName={"12 month"}
                        className={`mr-4 muted-btn hover:border-btn`}
                      />
                    )}
                  </div>
                  <div className="space-y-2 relative">
                    <h5>Select Type</h5>
                    <BorderButton
                      buttonName={"1 type"}
                      className={`mr-4 muted-btn"`}
                    />
                    <BorderButton
                      buttonName={"2 type"}
                      className={`mr-4 border-btn"`}
                    />
                  </div>
                  <div className="flex items-center flex-wrap gap-4">
                    <div className="flex items-center gap-1 md:gap-2 text-[var(--font-color)]/80">
                      <Tick className={"w-3 md:w-4 h-3 md:h-4"} />
                      <span className="text-sm md:text-base !text-[var(--font-color)]/80">
                        point.name
                      </span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 text-[var(--font-color)]/80">
                      <Tick className={"w-3 md:w-4 h-3 md:h-4"} />
                      <span className="text-sm md:text-base !text-[var(--font-color)]/80">
                        point.name
                      </span>
                    </div>
                  </div>
                  <p>
                    Netflix is a global leading streaming platform that offers a
                    variety of movies, TV shows, documentaries, and more.
                  </p>
                </div>
              </div>
              <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-32 lg:mb-42">
                <h2 className="!text-[35px] md:!text-[50px] lg:!text-[65px]">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Netflix
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                    Premium
                  </span>
                </h2>
                <h2>
                  Global Hits, Instantly
                  <br />
                  Within Reach
                </h2>
                <p className="max-w-md mx-auto px-4">
                  Join the world's leading streaming platform - share stories
                  daily and the world watches.
                </p>
              </div>
              <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-32 lg:mb-42 bg-[var(--muted-background-color)] custom-rounded p-6 lg:p-10 px-4 lg:px-14">
                <p className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                  No ads, offline downloads, high-quality audio, and on-demand
                  listening—every moment made for you
                </p>
                <h2>
                  Enjoy limitless listening with premium high-quality music
                  experience
                </h2>

                <div className="py-8 md:py-12 border-bottom">
                  <Image
                    width={880}
                    height={400}
                    src="/images/ProductDetails/spotify.png"
                    alt="/"
                    className="object-cover custom-rounded"
                  />
                </div>

                {features.map((feature, i) => (
                  <div
                    key={i}
                    className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center my-20 ${
                      feature.reverse ? "md:flex-row-reverse" : ""
                    } flex md:flex`}
                  >
                    <div className="space-y-4 text-start">
                      <p className="!text-xs bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                        {feature.descriptionOne}
                      </p>
                      <h3>{feature.title}</h3>
                      <p className="!text-sm">{feature.description}</p>
                    </div>

                    <div>
                      <video
                        src={feature.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto custom-rounded shadow-lg object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="hidden lg:flex lg:mb-32">
                {/* <PaymentBox /> */}
              </div>
              <div className="space-y-20">
                {/* <HowItWork /> */}
                {/* <Faqs className="!w-full" /> */}
              </div>
            </div>
          </div>
        </Container>
      )}
      <div className="flex lg:hidden fixed bottom-0 w-full z-50 bg-[var(--muted-background-color)]">
        {/* <PaymentBox /> */}
      </div>
    </div>
  );
}

const features = [
  {
    descriptionOne: "Only on GamsGo: Recharge your own account",
    title: "Only on GamsGo: Recharge your own account",
    description:
      "GamsGo will recharge your Spotify account directly, with no need to switch accounts or share with others. All your listening history, playlists, and favorites will be fully retained，enjoy all the same rights and interests as the official website",
    video: "/video/one.mp4",
    reverse: false,
  },
  {
    descriptionOne:
      "Changed your family group in the Last 12 Months? No Worries—GamsGo Has You Covered",
    title: "Individual Premium, no family group worries",
    description:
      "Even if you’ve changed your family group in the past 12 months, GamsGo can still recharge your account with an individual Premium membership—no need to join a family group",
    video: "/video/two.mp4",
    reverse: true,
  },
  {
    descriptionOne:
      "Activate immediately after placing an order and enjoy all the benefits of Spotify Premium membership immediately",
    title: "Instant activation, music right away",
    description:
      "You’ll get your personal account immediately after payment—no waiting. Be the first to stream new albums from your favorite singer",
    video: "/video/three.mp4",
    reverse: false,
  },
  {
    descriptionOne: "A More Cost-Effective Choice: 1 Slot",
    title: "Exclusive, independent account for a more stable experience",
    description:
      "By choosing the 1 Shot plan, you'll receive a dedicated personal account that's independent and more stable, all at a more affordable price to meet the diverse needs of different users",
    video: "/video/four.mp4",
    reverse: true,
  },
];
