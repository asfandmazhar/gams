"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import NotFound from "@/app/not-found";
import Container from "@/components/site/layout/Container";
import Image from "next/image";
import {
  Tick,
  Cross,
  CheckCircle,
  Arrow,
  Lock,
} from "@/components/icons/icons";
import Button from "@/components/ui/site/button/Button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function SkeletonLoading() {
  return (
    <div className="animate-pulse">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            {/* TOP SECTION */}
            <div className="lg:flex lg:gap-16 mb-24">
              <div className="flex gap-6 mb-8">
                {/* Thumbnail */}
                <div className="rounded-2xl bg-gray-300 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-48" />
              </div>

              <div className="space-y-6 w-full">
                {/* Title */}
                <div className="h-8 w-40 bg-gray-300 rounded-md" />
                {/* Purchase months */}
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-300 rounded" />
                  <div className="flex gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-24 bg-gray-300 rounded-lg"
                      />
                    ))}
                  </div>
                </div>

                {/* Select type */}
                <div className="space-y-2">
                  <div className="h-4 w-28 bg-gray-300 rounded" />
                  <div className="flex gap-3 flex-wrap">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-28 bg-gray-300 rounded-lg"
                      />
                    ))}
                  </div>
                </div>

                {/* Product points */}
                <div className="flex flex-wrap gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-gray-300 rounded-full" />
                      <div className="h-4 w-40 bg-gray-300 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* HIGHLIGHT SECTION */}
            <div className="text-center space-y-4 mb-32">
              <div className="h-12 w-3/4 mx-auto bg-gray-300 rounded" />
              <div className="h-6 w-1/2 mx-auto bg-gray-300 rounded" />
              <div className="h-4 w-2/3 mx-auto bg-gray-300 rounded" />
            </div>

            {/* PRODUCT DETAILS */}
            <div className="bg-gray-200 custom-rounded p-6 lg:p-10 mb-32 space-y-6">
              <div className="h-4 w-48 bg-gray-300 rounded mx-auto" />
              <div className="h-8 w-2/3 bg-gray-300 rounded mx-auto" />

              {/* Main image */}
              <div className="h-64 w-full bg-gray-300 rounded-xl my-10" />

              {/* Repeated detail blocks */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-2 gap-12 items-center my-20"
                >
                  <div className="space-y-4">
                    <div className="h-4 w-32 bg-gray-300 rounded" />
                    <div className="h-8 w-2/3 bg-gray-300 rounded" />
                    <div className="h-4 w-full bg-gray-300 rounded" />
                    <div className="h-4 w-5/6 bg-gray-300 rounded" />
                  </div>

                  <div className="h-56 w-full bg-gray-300 rounded-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="hidden lg:block">
            {/* Price box */}
            <div className="custom-rounded bordered shadow-xl p-6 space-y-6 mb-32">
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-300 rounded" />
                <div className="h-4 w-16 bg-gray-300 rounded" />
              </div>

              <div className="flex justify-between items-center">
                <div className="h-6 w-20 bg-gray-300 rounded" />
                <div className="space-y-2">
                  <div className="h-6 w-24 bg-gray-300 rounded" />
                  <div className="h-4 w-20 bg-gray-300 rounded" />
                </div>
              </div>

              <div className="h-12 w-full bg-gray-300 rounded-xl" />
            </div>

            {/* How it work */}
            <div className="space-y-6 mb-20">
              <div className="h-6 w-40 bg-gray-300 rounded" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 w-full bg-gray-300 rounded-xl" />
              ))}
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <div className="h-6 w-24 bg-gray-300 rounded" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 w-full bg-gray-300 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailSlugPage({ params }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { slug } = React.use(params);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const originalPrice = product?.basic_info?.price?.originalPrice || 0;
  const discountMap = {
    1: 0,
    3: 2,
    6: 4,
    12: 6,
  };
  const discountPercent = discountMap[selectedMonth] || 0;
  const basePrice = selectedMonth
    ? selectedMonth * originalPrice
    : originalPrice;
  const discountAmount = (basePrice * discountPercent) / 100;
  const subtotal = basePrice - discountAmount;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      setProduct([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [slug]);

  if (!product && !loading) {
    return <NotFound />;
  }

  const handleJoinNow = () => {
    if (!selectedMonth || !selectedType) {
      toast.error("Please Select Month and type");
      return;
    }
    setIsPaymentOpen(true);
  };

  return (
    <div className="pt-28 md:pt-32 lg:pt-42">
      {loading ? (
        <SkeletonLoading />
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
                </div>
                <div className="space-y-4 w-full">
                  <div className="space-y-2">
                    <h1 className="text-black mb-2">
                      {product?.basic_info?.name}
                    </h1>
                    <div>
                      <h5 className="mb-2">Purchase Duration</h5>
                      {[1, 3, 6, 12].map(
                        (m) =>
                          product?.purchaseMonths?.[
                            m === 1
                              ? "oneMonth"
                              : m === 3
                                ? "threeMonth"
                                : m === 6
                                  ? "sixMonth"
                                  : "twelveMonth"
                          ] && (
                            <button
                              key={m}
                              onClick={() => setSelectedMonth(m)}
                              className={`mr-3 ${
                                selectedMonth === m
                                  ? " border-btn "
                                  : " muted-btn "
                              }`}
                            >
                              {m} month
                            </button>
                          ),
                      )}
                    </div>
                  </div>
                  {/* TYPE SELECTION */}
                  <div>
                    <h5 className="mb-2">Select Type</h5>
                    {product?.type?.map((t, i) => (
                      <button
                        key={i}
                        className={`mr-3 ${selectedType == t.title ? " border-btn " : " muted-btn "}`}
                        onClick={() => setSelectedType(t.title)}
                      >
                        {t.title}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center flex-wrap gap-4">
                    {product?.productPoints?.map((point, i) => (
                      <div
                        className="flex items-center gap-1 md:gap-2 text-[var(--font-color)]/80"
                        key={i}
                      >
                        <Tick className={"w-3 md:w-4 h-3 md:h-4"} />
                        <span className="text-sm md:text-base !text-[var(--font-color)]/80">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-32 lg:mb-42">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {product?.productHighlight?.name}
                  </span>
                </h1>
                <h2>{product?.productHighlight?.subtitle}</h2>
                <p className="max-w-md mx-auto px-4">
                  {product?.productHighlight?.tagline}
                </p>
              </div>
              <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-32 lg:mb-42 bg-[var(--muted-background-color)] custom-rounded p-6 lg:p-10 px-4 lg:px-14">
                <p className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                  {product?.productDetails?.subtitle}
                </p>
                <h2>{product?.productDetails?.tagline}</h2>

                <div className="py-8 md:py-12 border-bottom">
                  <Image
                    width={880}
                    height={400}
                    src={product?.productDetails?.image?.url}
                    alt={product?.productDetails?.image?.alt}
                    className="object-cover custom-rounded"
                  />
                </div>

                {product?.details?.map((detail, i) => (
                  <div
                    key={i}
                    className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center my-20 ${
                      (i + 1) % 2 == 0 ? "md:flex-row-reverse" : ""
                    } flex md:flex`}
                  >
                    <div className="space-y-4 text-start md:w-1/2">
                      <p className="!text-xs bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                        {detail?.tagline}
                      </p>
                      <h3>{detail?.title}</h3>
                      <p className="!text-sm">{detail?.description}</p>
                    </div>

                    <div className="md:w-1/2">
                      <Image
                        width={880}
                        height={400}
                        src={detail?.imageUrl}
                        alt={detail?.title}
                        className="w-full h-auto custom-rounded shadow-lg object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="flex md:mb-32 md:relative fixed bottom-0 w-full left-0 bg-white z-10">
                <div className="custom-rounded bordered shadow-xl p-6 w-full h-fit">
                  <div className={`space-y-6 mb-10 mt-6`}>
                    <div className="flex justify-between">
                      <h5>Subtotal</h5>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <h4>Total</h4>
                      <div className="text-right">
                        <h3 className="text-2xl">${subtotal.toFixed(2)}</h3>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                          ${originalPrice}/mo
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer">
                    <button
                      className="btn-secondary w-full"
                      onClick={() => {
                        if (!isLoggedIn) {
                          router.push("/auth/login");
                          return;
                        }
                        handleJoinNow();
                      }}
                    >
                      {isLoggedIn ? "Join Now" : "Login to continue"}
                    </button>

                    <div className="flex items-center gap-2 lg:hidden mt-4 justify-center">
                      <h3>${subtotal.toFixed(2)}</h3>
                      <Arrow className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-20 mb-74">
                <div className="space-y-3 lg:space-y-4">
                  <h3>How it work</h3>
                  {product?.howItWork.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 lg:space-x-3 shadow-sm px-4 py-6 custom-rounded"
                    >
                      <div className="flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 fill-[var(--error-color)]" />
                      </div>
                      <p>{point.title}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3>Faqs</h3>
                  {product?.faqs?.map((faq, index) => (
                    <div
                      key={index}
                      className={`flex flex-col shadow-sm hover:shadow-lg h-auto px-4 py-4 md:px-8 md:py-6 rounded-xl cursor-pointer`}
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex justify-between items-center gap-2">
                        <h4>{faq?.title}</h4>
                        <div>
                          <Cross
                            className={`w-4 h-4 md:w-6 md:h-6 transition-transform transform duration-300 text-base md:text-xl ${
                              openIndex === index ? "" : "rotate-45"
                            }`}
                          />
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          openIndex === index ? "max-h-auto pt-6" : "max-h-0"
                        }`}
                      >
                        <p>{faq?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <PaymentPopup
            isOpen={isPaymentOpen}
            onClose={() => setIsPaymentOpen(false)}
            selectedType={selectedType}
            selectedMonth={selectedMonth}
            subTotal={subtotal}
            originalPrice={originalPrice}
            basePrice={basePrice}
          />
        </Container>
      )}
    </div>
  );
}
function PaymentPopup({
  isOpen,
  onClose,
  selectedType,
  selectedMonth,
  subTotal,
  originalPrice,
  basePrice,
}) {
  const modalRef = useRef(null);
  const [step, setStep] = useState("details");
  const [selectedMethod, setSelectedMethod] = useState("card1");

  const methods = [
    {
      id: "card1",
      title: "Credit & Debit Card",
      logos: [
        "/images/payment/visa.jpg",
        "/images/payment/master-card.jpg",
        "/images/payment/american-express.jpg",
        "/images/payment/jcb.jpg",
        "/images/payment/union-pay.jpg",
        "/images/payment/diners.jpg",
      ],
      tag: "One-time payment",
    },
    {
      id: "googlepay",
      title: "Google Pay",
      logos: ["/images/payment/g-pay.jpg"],
      tag: "One-time payment",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:items-center md:justify-center items-end">
      <div className="absolute inset-0 bg-[var(--font-color)]/50"></div>

      <div
        ref={modalRef}
        className="relative bg-white p-4 md:p-6 rounded-t-2xl md:rounded-xl shadow-lg z-10
        w-full md:w-[90%] md:max-w-3xl h-auto overflow-y-auto"
      >
        {/* ================= DETAILS STEP ================= */}
        {step === "details" && (
          <>
            <div className="border-bottom relative">
              <div className="flex items-start gap-4 md:gap-10">
                <Image
                  width={96}
                  height={96}
                  src="/images/category/shopify.jpg"
                  alt="product"
                  className="rounded"
                />

                <div className="flex flex-col space-y-1">
                  <h3 className="mb-2 !text-2xl md:!text-3xl !text-[var(--theme-color)]">
                    <span className="text-xl">$</span>
                    {subTotal}
                    {subTotal !== basePrice && (
                      <del className="!text-gray-400 md:ml-2">
                        <span className="text-xl">$</span>
                        {basePrice}
                      </del>
                    )}
                  </h3>

                  <span className="text-sm px-2 py-1 bg-[var(--hover-color)]/20 w-fit rounded">
                    ${originalPrice}/mo
                  </span>

                  <p className="mb-4 !text-sm mt-4">{selectedType}</p>
                </div>
              </div>

              <div onClick={onClose} className="cursor-pointer">
                <Cross className="w-8 h-8 absolute right-0 top-0" />
              </div>
            </div>

            <div className="flex flex-col space-y-4 my-4">
              <div>
                <h5>Selected Month</h5>
                <p className="border-btn mt-2">{selectedMonth} month(s)</p>
              </div>

              <div>
                <h5>Selected Type</h5>
                <p className="border-btn mt-2">{selectedType}</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 py-4">
              <button
                className="muted-btn !w-full !rounded-full"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                className="btn-secondary !w-full"
                onClick={() => setStep("methods")}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* ================= PAYMENT METHODS STEP ================= */}
        {step === "methods" && (
          <>
            <div className="border-bottom relative">
              <div className="flex items-center gap-2 mb-4">
                <button onClick={() => setStep("details")}>
                  <Arrow className="w-6 h-6 rotate-90" />
                </button>
                <h4>Select a Payment Method</h4>
              </div>

              <div className="flex space-x-2">
                <Lock className="w-6 h-6 fill-[var(--navigation-color)]" />
                <p className="!text-sm mb-4">
                  We do not store your bank card info. Payments are processed
                  securely by external providers.
                </p>
              </div>

              <div onClick={onClose} className="cursor-pointer">
                <Cross className="w-8 h-8 absolute right-0 top-0" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3 py-6 border-bottom">
              {methods.map((m) => (
                <div
                  key={m.id}
                  onClick={() => setSelectedMethod(m.id)}
                  className={`border rounded-lg p-3 cursor-pointer space-y-4 ${
                    selectedMethod === m.id
                      ? "border-[var(--navigation-color)]"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-4 relative">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-white font-bold ${
                        selectedMethod === m.id
                          ? "bg-[var(--navigation-color)] border-[var(--navigation-color)]"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {selectedMethod === m.id && "✓"}
                    </div>

                    <span className="text-sm font-medium">{m.title}</span>

                    <span
                      className={`text-[10px] absolute -right-3 -top-3 px-4 py-1 rounded ${
                        selectedMethod === m.id
                          ? "bg-[var(--navigation-color)] text-[var(--navigation-font-color)]"
                          : "bg-[var(--muted-background-color)] text-[var(--font-color)]/80"
                      }`}
                    >
                      {m.tag}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {m.logos.map((logo, idx) => (
                      <Image
                        key={idx}
                        src={logo}
                        alt={m.title}
                        width={32}
                        height={20}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between py-6">
              <h4 className="font-semibold">Total:</h4>
              <h2 className="!text-[var(--navigation-color)] font-bold">
                ${subTotal}
              </h2>
            </div>

            <div className="flex justify-between gap-3">
              <Button
                onClick={onClose}
                buttonName="Cancel"
                className="!bg-[var(--muted-color)]/20 !text-[var(--font-color)] bordered"
              />
              <Button buttonName="Pay now" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
