"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AnimationWrapper from "@/common/PageAnimation.jsx";
import Faqs from "@/components/admin/dashboard-data/Faqs";
import ImageVideo from "@/components/ui/admin/ImageVideo";
import { Arrow, Cross } from "@/components/icons/icons";

export default function AddProductData() {
  const router = useRouter();
  const [publish, setPublish] = useState(false);
  // const navigate = useNavigate();
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <>
      <nav className="border-b border-light/10 h-24 flex justify-between items-center spacing sticky top-0 bg-black z-40">
        <div>
          <button
            onClick={() => router.back()}
            className="glass-btn flex justify-center items-center hover:gap-2 gap-1 text-sm md:text-base !px-6 md:!py-4"
          >
            <Arrow
              className={
                "w-5 h-5 fill-[var(--navigation-font-color)] rotate-90"
              }
            />
            <span className="hidden md:block">Go Back</span>
          </button>
        </div>
        <div className="flex gap-2 ">
          <button className="glass-btn flex justify-center items-center hover:gap-2 gap-1 capitalize shadow-none text-sm md:text-base !px-6 md:!py-4">
            <span>draft</span>
          </button>
          <button
            onClick={() => setPublish(!publish)}
            className="glass-effect secondary-btn invert flex justify-center items-center hover:gap-2 gap-1 capitalize text-sm md:text-base !px-6 md:!py-4 cursor-pointer"
          >
            <span>publish</span>
          </button>
        </div>
      </nav>
      <AnimationWrapper>
        <div className="spacing md:py-20">
          {/* Main Content */}
          <div className="flex xl:flex-row flex-col md:pt-0 pt-20 justify-between gap-10 lg:gap-40 items-start w-full spacing relative">
            <div className="xl:w-1/2 w-full">
              <div className="rounded-xl w-full">
                {/* product title */}
                <div className="mb-8 gap-2 flex md:justify-between md:items-center flex-row">
                  <textarea
                    ref={textareaRef}
                    onInput={handleInput}
                    className="text-2xl md:text-3xl font-bold capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                    placeholder="Product Name"
                    rows={1}
                  />
                </div>
                {/* product image */}
                <div className="space-y-3">
                  <ImageVideo size={"80 x 80"} className={"w-44 h-44"} />
                  <input
                    type="number"
                    placeholder="image alt text"
                    className="input-box glass-effect !rounded-xl mt-4"
                  />
                </div>
                {/* product price */}
                <div className="space-y-3 md:space-y-0 md:space-x-3 mt-4 flex flex-wrap md:flex-nowrap items-center">
                  <input
                    type="number"
                    placeholder="Enter Product Price"
                    className="input-box glass-effect !rounded-xl"
                  />
                  <input
                    type="number"
                    placeholder="Enter Product Discounted Price"
                    className="input-box glass-effect !rounded-xl"
                  />
                </div>
                {/* product points */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">
                    Enter Product Point:
                  </h4>
                  <div className="space-y-3">
                    <button className="input-box glass-effect !rounded-xl text-center cursor-pointer">
                      +
                    </button>
                    <input
                      type="text"
                      placeholder="Enter Product Point"
                      className="input-box glass-effect !rounded-xl"
                    />
                  </div>
                </div>
                {/* product Purchase months */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">Purchase months:</h4>
                  <div className="flex flex-wrap gap-4">
                    {["1 Month", "3 Month", "6 Month", "12 Month"].map(
                      (plan, i) => (
                        <div
                          key={i}
                          className="flex gap-2 input-box glass-effect !rounded-xl !w-fit cursor-pointer"
                          onClick={(e) => {
                            const checkbox =
                              e.currentTarget.querySelector("input");
                            checkbox.checked = !checkbox.checked;
                          }}
                        >
                          <input
                            type="checkbox"
                            className="glass-effect !rounded-xl cursor-pointer"
                          />
                          <h5 className="!text-[var(--navigation-font-color)]/80">{plan}</h5>
                        </div>
                      )
                    )}
                  </div>
                </div>
                {/* product select type */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">Select Type:</h4>
                  <div className="flex flex-wrap gap-4">
                    <button className="input-box glass-effect !rounded-xl text-center cursor-pointer">
                      +
                    </button>
                    <input
                      type="text"
                      placeholder="Enter Select Type"
                      className="input-box glass-effect !rounded-xl"
                    />
                  </div>
                </div>
                {/* product Access & Devices */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">Access & Devices:</h4>
                  <Faqs
                    placeholder="Features"
                    faqDescription="Features description"
                  />
                </div>
                {/* product Highlight */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-6">Product Highlight:</h4>
                  <div className="flex flex-wrap gap-6 md:gap-10">
                    <textarea
                      ref={textareaRef}
                      onInput={handleInput}
                      className="text-2xl font-bold capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                      placeholder="Product Name"
                      rows={1}
                    />
                    <textarea
                      ref={textareaRef}
                      onInput={handleInput}
                      className="text-xl capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                      placeholder="Product Subtitle"
                      rows={1}
                    />
                    <textarea
                      ref={textareaRef}
                      onInput={handleInput}
                      className="text-base capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                      placeholder="Product Tagline "
                      rows={1}
                    />
                  </div>
                </div>
                {/* product details */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-6">Product Details:</h4>
                  <div className="flex flex-wrap gap-6 w-full">
                    <div className="w-full space-y-4">
                      <textarea
                        ref={textareaRef}
                        onInput={handleInput}
                        className="text-base text-center capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                        placeholder="Tagline "
                        rows={1}
                      />
                      <textarea
                        ref={textareaRef}
                        onInput={handleInput}
                        className="text-xl text-center capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                        placeholder="Subtitle"
                        rows={1}
                      />
                    </div>
                    <div className="w-full">
                      <ImageVideo
                        size={"800 x 400"}
                        className={"w-full h-72"}
                      />
                    </div>
                    <input
                      type="number"
                      placeholder="image alt text"
                      className="input-box glass-effect !rounded-xl"
                    />
                    <h4 className="!text-[var(--navigation-font-color)]/80">Add Videos:</h4>
                    <button className="input-box glass-effect !rounded-xl text-center cursor-pointer">
                      +
                    </button>
                    <div className="p-4 glass-effect !rounded-xl space-y-4 w-full">
                      <div className="w-full space-y-4">
                        <textarea
                          ref={textareaRef}
                          onInput={handleInput}
                          className="text-base capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                          placeholder="Tagline "
                          rows={1}
                        />
                        <textarea
                          ref={textareaRef}
                          onInput={handleInput}
                          className="text-xl capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                          placeholder="Title"
                          rows={1}
                        />
                        <textarea
                          ref={textareaRef}
                          onInput={handleInput}
                          className="text-base capitalize bg-transparent w-full resize-none overflow-hidden transition-all duration-300 ease-in-out"
                          placeholder="Description"
                          rows={1}
                        />
                      </div>
                      <ImageVideo
                        size={"1080 x 1920"}
                        className={"w-full h-72 mt-6"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2 w-full space-y-8">
              <div>
                <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">How it work:</h4>
                <div className="space-y-3">
                  <button className="input-box glass-effect !rounded-xl text-center cursor-pointer">
                    +
                  </button>
                  <input
                    type="text"
                    placeholder="How it work"
                    className="input-box glass-effect !rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">Faq's:</h4>
                <Faqs
                  placeholder="Faq's title"
                  faqDescription="Faq's description"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>

      <section
        className={`fixed py-8 w-full bg-[var(--admin-bg-color)] z-50 overflow-y-scroll min-h-screen scrollbar-hide flex justify-center items-center transition-all duration-500 ease ${
          publish ? " top-0 " : " -top-[200%] "
        }`}
      >
        <div className="flex xl:flex-row flex-col md:pt-0 pt-20 justify-between gap-10 lg:gap-40 items-center w-full spacing relative">
          <div className="absolute lg:right-24 lg:-top-12 right-4 top-2">
            <button
              className="glass-btn w-12 h-12 flex justify-center items-center"
              onClick={() => setPublish(false)}
            >
              <Cross className={"w-5 h-5 !fill-[var(--navigation-font-color)]"}/>
            </button>
          </div>
          <div className="xl:w-1/2 w-full">
            <div className="!rounded-xl w-full">
              <ImageVideo size={"80 x 80"} className={"w-44 h-44"} />
            </div>
            <h5 className="text-xl mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, molestias!
            </h5>
          </div>
          <div className="xl:w-1/2 w-full">
            <h3 className="!text-[var(--navigation-font-color)]/80 mb-4">SEO:</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Meta Title"
                className="input-box glass-effect !rounded-xl"
              />
              <textarea
                className="input-box glass-effect !rounded-xl"
                rows={4}
                placeholder="Meta Description"
              ></textarea>
              <textarea
                className="input-box glass-effect !rounded-xl"
                rows={4}
                placeholder="Enter Tags"
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
