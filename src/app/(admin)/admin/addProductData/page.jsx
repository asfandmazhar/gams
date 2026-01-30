"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AnimationWrapper from "@/common/PageAnimation.jsx";
import { Arrow, Cross } from "@/components/icons/icons";
import { toast } from "react-hot-toast";
import axios from "axios";
import AutoResizeTextarea from "@/components/ui/admin/input";
import PlaceholderImage from "@/components/ui/admin/PlaceholderImage";
import { uploadImage } from "@/utils/uploadImage";

export default function AddProductData() {
  const router = useRouter();
  const [publish, setPublish] = useState(false);
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    basic_info: {
      name: "",
      thumbnail: { url: null, publicId: "", alt: "" },
      price: { originalPrice: 0, discountedPrice: 0 },
    },
    productPoints: [],
    purchaseMonths: {
      oneMonth: false,
      threeMonth: false,
      sixMonth: false,
      twelveMonth: false,
    },
    category: "",
    type: [],
    howItWork: [],
    faqs: [],
    accessAndDevices: [],
    productHighlight: { name: "", subtitle: "", tagline: "" },
    productDetails: {
      tagline: "",
      subtitle: "",
      image: { url: null, publicId: "", alt: "" },
    },
    details: [],
    SEO: { title: "", description: "", tags: "" },
  });

  const getCategories = async () => {
    try {
      const res = await axios.get("/api/category/get");
      if (res.data.success) setCategories(res.data.categories);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load categories");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const goBack = () => {
    if (
      confirm("Are you sure? This action will permanently delete the data.")
    ) {
      router.back();
    }
  };

  const handleUploadBanner = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const toastId = toast.loading(`Thumbnail Image Uploading...`);
    try {
      const { url, publicId } = await uploadImage(file);
      toast.success(`Thumbnail Uploaded Successfully!`, {
        id: toastId,
      });
      setFormData((prev) => ({
        ...prev,
        basic_info: {
          ...prev.basic_info,
          thumbnail: {
            ...prev.basic_info.thumbnail,
            url: url,
            publicId: publicId,
          },
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadProductDetailImg = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const toastId = toast.loading(`Product Detail Image Uploading...`);
    try {
      const { url, publicId } = await uploadImage(file);
      toast.success(`Product Detail Uploaded Successfully!`, {
        id: toastId,
      });
      setFormData((prev) => ({
        ...prev,
        productDetails: {
          ...prev.productDetails,
          image: {
            ...prev.productDetails.productDetails,
            url: url,
            publicId: publicId,
          },
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const validateProduct = (data, status) => {
    if (status === "draft") {
      if (!data.basic_info.name?.trim()) {
        toast.error("Product Name is Required!");
        return false;
      }

      /* ================= CATEGORY ================= */
      if (!data.category?.trim()) {
        toast.error("Category is required!");
        return false;
      }

      return true;
    }

    if (!data.basic_info.name?.trim()) {
      toast.error("Product Name is Required!");
      return false;
    }

    if (
      !data.basic_info.price.originalPrice ||
      data.basic_info.price.originalPrice <= 0
    ) {
      toast.error("Original price must be greater than 0!");
      return false;
    }

    if (!data.basic_info.thumbnail.url) {
      toast.error("Product thumbnail is required!");
      return false;
    }

    if (
      data.basic_info.thumbnail.alt &&
      data.basic_info.thumbnail.alt.length < 3
    ) {
      toast.error("Thumbnail alt text must be at least 3 characters!");
      return false;
    }

    if (
      data.basic_info.price.discountedPrice < 0 ||
      data.basic_info.price.discountedPrice >
        data.basic_info.price.originalPrice
    ) {
      toast.error("Discounted price must be less than original price!");
      return false;
    }

    /* ================= CATEGORY ================= */
    if (!data.category?.trim()) {
      toast.error("Category is required!");
      return false;
    }

    /* ================= PRODUCT POINTS ================= */
    if (!Array.isArray(data.productPoints) || !data.productPoints.length) {
      toast.error("Add at least one product point!");
      return false;
    } else if (data.productPoints.some((p) => !p?.trim())) {
      toast.error("Product points cannot be empty!");
      return false;
    }

    /* ================= PURCHASE MONTHS ================= */
    const hasAnyMonth = Object.values(data.purchaseMonths).some(Boolean);

    if (!hasAnyMonth) {
      toast.error("Select at least one purchase duration!");
      return false;
    }

    /* ================= TYPE ================= */
    if (!Array.isArray(data.type) || !data.type.length) {
      toast.error("Select at least one product type!");
      return false;
    }

    /* ================= HOW IT WORKS ================= */
    if (!Array.isArray(data.howItWork) || !data.howItWork.length) {
      toast.error("Add at least one 'How it works' step!");
      return false;
    }

    /* ================= FAQ ================= */
    if (!Array.isArray(data.faqs) || !data.faqs.length) {
      toast.error("Add at least one FAQ!");
      return false;
    }

    /* ================= ACCESS & DEVICES ================= */
    if (
      !Array.isArray(data.accessAndDevices) ||
      !data.accessAndDevices.length
    ) {
      toast.error("Add at least one access/device item!");
      return false;
    }

    /* ================= PRODUCT HIGHLIGHT ================= */
    if (!data.productHighlight.name?.trim()) {
      toast.error("Product highlight name is required!");
      return false;
    }

    if (!data.productHighlight.subtitle?.trim()) {
      toast.error("Product highlight subtitle is required!");
      return false;
    }

    if (!data.productHighlight.tagline?.trim()) {
      toast.error("Product highlight tagline is required!");
      return false;
    }

    /* ================= PRODUCT DETAILS ================= */
    if (!data.productDetails.tagline?.trim()) {
      toast.error("Product details tagline is required!");
      return false;
    }

    if (!data.productDetails.subtitle?.trim()) {
      toast.error("Product details subtitle is required!");
      return false;
    }

    if (!data.productDetails.image.url) {
      toast.error("Product details image is required!");
      return false;
    }

    /* ================= DETAILS ================= */
    if (!Array.isArray(data.details) || !data.details.length) {
      toast.error("Add at least one product detail section!");
      return false;
    } else if (
      data.details.some(
        (item) => !item?.title?.trim() || !item?.description?.trim(),
      )
    ) {
      toast.error("Each detail must have title and description!");
      return false;
    }

    /* ================= SEO ================= */
    if (!data.SEO.title?.trim()) {
      toast.error("SEO title is required!");
      return false;
    }

    if (!data.SEO.description?.trim()) {
      toast.error("SEO description is required!");
      return false;
    }

    if (!data.SEO.tags?.trim()) {
      toast.error("SEO tags are required!");
      return false;
    }

    return true;
  };

  const handleUpdateProduct = async (status) => {
    setLoading(true);
    if (!validateProduct(formData, status)) {
      setLoading(false);
      return;
    }
    const toastId = toast.loading(
      status === "draft"
        ? "Saving your draft..."
        : "Publishing your product...",
    );

    try {
      const res = await axios.post(`/api/product/create/${status}`, formData);

      if (res?.data?.success) {
        toast.success(res?.data?.message, {
          id: toastId,
        });
      } else {
        toast.error(res?.data?.message, {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="border-b border-light/10 h-24 flex justify-between items-center spacing sticky top-0 bg-black z-40">
        <div>
          <button
            onClick={goBack}
            className={`glass-btn flex capitalize justify-center items-center hover:gap-2 gap-1 text-sm md:text-base md:!px-6 md:!py-4 ${loading ? "opacity-50 cursor-progress " : "opacity-100 cursor-pointer"}`}
            disabled={loading ? true : false}
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
          <button
            disabled={loading ? true : false}
            className={`glass-btn capitalize flex justify-center items-center hover:gap-2 gap-1 text-sm md:text-base !px-6 md:!py-4 ${loading ? "opacity-50 cursor-progress " : "opacity-100 cursor-pointer"}`}
            onClick={() => handleUpdateProduct("draft")}
          >
            <span>draft</span>
          </button>
          <button
            onClick={() => setPublish(!publish)}
            disabled={loading ? true : false}
            className={`glass-btn invert capitalize flex justify-center items-center hover:gap-2 gap-1 text-sm md:text-base !px-6 md:!py-4 ${loading ? "opacity-50 cursor-progress " : "opacity-100 cursor-pointer"}`}
          >
            <span>Next</span>
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
                  <AutoResizeTextarea
                    placeholder="Write Product Name"
                    value={formData.basic_info.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        basic_info: {
                          ...prev.basic_info,
                          name: e.target.value,
                        },
                      }))
                    }
                  />
                </div>

                {/* Product Image & Alt Text */}
                <div>
                  {/* product image */}
                  <label className="space-y-3">
                    {/* Image preview */}
                    {formData.basic_info.thumbnail.url && (
                      <img
                        src={formData.basic_info.thumbnail.url}
                        alt={
                          formData.basic_info.thumbnail.alt ||
                          "Product Thumbnail"
                        }
                        className="w-44 h-44 object-cover rounded-xl cursor-pointer"
                      />
                    )}
                    {!formData.basic_info.thumbnail.url && (
                      <PlaceholderImage
                        size={"80 x 80"}
                        className={"w-44 h-44"}
                      />
                    )}

                    {/* File input */}
                    <input
                      type="file"
                      accept="image/*"
                      className="input-box glass-effect !rounded-xl mt-4"
                      hidden
                      onChange={(e) => handleUploadBanner(e)}
                    />
                  </label>
                  {/* Alt text */}
                  <input
                    type="text"
                    placeholder="Image alt text"
                    className="input-box glass-effect !rounded-xl mt-2"
                    value={formData.basic_info.thumbnail.alt}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        basic_info: {
                          ...prev.basic_info,
                          thumbnail: {
                            ...prev.basic_info.thumbnail,
                            alt: e.target.value,
                          },
                        },
                      }))
                    }
                  />
                </div>

                {/* Price */}
                <div className="space-y-3 md:space-y-0 md:space-x-3 mt-4 flex flex-wrap md:flex-nowrap items-center">
                  {/* Original Price */}
                  <input
                    type="number"
                    min={0}
                    placeholder="Enter Product Price"
                    className="input-box glass-effect !rounded-xl"
                    value={formData.basic_info.price.originalPrice}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        basic_info: {
                          ...prev.basic_info,
                          price: {
                            ...prev.basic_info.price,
                            originalPrice: Number(e.target.value),
                          },
                        },
                      }))
                    }
                  />

                  {/* Discounted Price */}
                  <input
                    type="number"
                    min={0}
                    placeholder="Enter Product Discounted Price"
                    className="input-box glass-effect !rounded-xl"
                    value={formData.basic_info.price.discountedPrice}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        basic_info: {
                          ...prev.basic_info,
                          price: {
                            ...prev.basic_info.price,
                            discountedPrice: Number(e.target.value),
                          },
                        },
                      }))
                    }
                  />
                </div>

                {/* Points */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">
                    Enter Product Points:
                  </h4>
                  <div className="space-y-3">
                    {formData.productPoints.map((point, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder={`Point ${index + 1}`}
                          className="input-box glass-effect !rounded-xl flex-1"
                          value={point}
                          onChange={(e) => {
                            const newPoints = [...formData.productPoints];
                            newPoints[index] = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              productPoints: newPoints,
                            }));
                          }}
                        />
                        <button
                          type="button"
                          className="glass-btn !text-red-900 flex justify-center items-center text-2xl hover:font-bold !w-18 !h-14 !rounded-xl"
                          onClick={() => {
                            const newPoints = formData.productPoints.filter(
                              (_, i) => i !== index,
                            );
                            setFormData((prev) => ({
                              ...prev,
                              productPoints: newPoints,
                            }));
                          }}
                        >
                          <span className="mb-2">×</span>
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="input-box glass-btn !rounded-xl flex justify-center gap-2 items-center hover:gap-4 text-center cursor-pointer hover:font-bold"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          productPoints: [...prev.productPoints, ""],
                        }))
                      }
                    >
                      <span className="mb-1">+</span> <span>Add Point</span>
                    </button>
                  </div>
                </div>

                {/* Category */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">
                    Select Category:
                  </h4>
                  <select
                    className="input-box glass-effect !rounded-xl !px-4"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }));
                    }}
                  >
                    <option
                      value=""
                      className="!text-[var(--navigation-font-color)]/80 bg-[var(--admin-bg-color)] cursor-pointer"
                    >
                      Select Category
                    </option>
                    {categories?.length > 0 ? (
                      categories?.map((category) => (
                        <option
                          value={category._id}
                          key={category._id}
                          className="!text-[var(--navigation-font-color)]/80 bg-[var(--admin-bg-color)]"
                        >
                          {category?.name}
                        </option>
                      ))
                    ) : (
                      <option
                        value=""
                        className="!text-[var(--navigation-font-color)]/80 bg-[var(--admin-bg-color)]"
                      >
                        Categories Not Found!
                      </option>
                    )}
                  </select>
                </div>

                {/* product Purchase months */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">
                    Purchase months:
                  </h4>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {[
                      { label: "1 Month", key: "oneMonth" },
                      { label: "3 Month", key: "threeMonth" },
                      { label: "6 Month", key: "sixMonth" },
                      { label: "12 Month", key: "twelveMonth" },
                    ].map((plan, i) => (
                      <div
                        key={i}
                        className="flex gap-2 input-box glass-btn !rounded-xl !w-full cursor-pointer items-center"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            purchaseMonths: {
                              ...prev.purchaseMonths,
                              [plan.key]: !prev.purchaseMonths[plan.key],
                            },
                          }))
                        }
                      >
                        <input
                          type="checkbox"
                          className="!rounded-xl cursor-pointer"
                          checked={formData.purchaseMonths[plan.key]}
                          readOnly
                        />
                        <h5 className="!text-[var(--navigation-font-color)]/80">
                          {plan.label}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>

                {/* product select type */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">
                    Select Type:
                  </h4>

                  <div className="space-y-3">
                    {formData.type.map((typeItem, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={`Type ${index + 1}`}
                          className="input-box glass-effect !rounded-xl flex-1"
                          value={typeItem.title}
                          onChange={(e) => {
                            const newTypes = [...formData.type];
                            newTypes[index] = {
                              ...newTypes[index],
                              title: e.target.value,
                            };
                            setFormData((prev) => ({
                              ...prev,
                              type: newTypes,
                            }));
                          }}
                        />

                        {/* Remove button */}
                        <button
                          type="button"
                          className="glass-btn !text-red-900 flex justify-center items-center text-2xl hover:font-bold !w-18 !h-14 !rounded-xl"
                          onClick={() => {
                            const newTypes = formData.type.filter(
                              (_, i) => i !== index,
                            );
                            setFormData((prev) => ({
                              ...prev,
                              type: newTypes,
                            }));
                          }}
                        >
                          <span className="mb-2">×</span>
                        </button>
                      </div>
                    ))}

                    {/* Add button */}
                    <button
                      type="button"
                      className="input-box glass-btn !rounded-xl flex justify-center gap-2 items-center hover:gap-4 text-center cursor-pointer hover:font-bold"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          type: [...prev.type, { title: "" }],
                        }))
                      }
                    >
                      <span className="mb-1">+</span>
                      <span>Add Type</span>
                    </button>
                  </div>
                </div>

                {/* product Access & Devices */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">
                    Access & Devices:
                  </h4>

                  <div className="space-y-3">
                    {formData.accessAndDevices.map((item, index) => (
                      <div
                        key={index}
                        className="relative flex flex-col gap-2 p-4 glass-effect !rounded-xl space-y-4 w-full"
                      >
                        {/* Remove button */}
                        <div className="flex justify-between items-center pl-2">
                          <h4 className="!text-white/60">
                            Feature {index < 9 ? `0${index + 1}` : index + 1}
                          </h4>
                          <button
                            type="button"
                            className="glass-btn !text-red-900 flex justify-center items-center text-2xl hover:font-bold !w-fit !h-12 !rounded-xl float-right"
                            onClick={() => {
                              const newAccess =
                                formData.accessAndDevices.filter(
                                  (_, i) => i !== index,
                                );
                              setFormData((prev) => ({
                                ...prev,
                                accessAndDevices: newAccess,
                              }));
                            }}
                          >
                            <span className="mb-2">x</span>
                          </button>
                        </div>

                        <input
                          type="text"
                          placeholder={`Feature ${index + 1}`}
                          className="input-box glass-effect !rounded-xl"
                          value={item.feature}
                          onChange={(e) => {
                            const newAccess = [...formData.accessAndDevices];
                            newAccess[index] = {
                              ...newAccess[index],
                              feature: e.target.value,
                            };
                            setFormData((prev) => ({
                              ...prev,
                              accessAndDevices: newAccess,
                            }));
                          }}
                        />

                        <textarea
                          placeholder="Feature Description"
                          className="input-box glass-effect !rounded-xl"
                          rows={6}
                          value={item.description}
                          onChange={(e) => {
                            const newAccess = [...formData.accessAndDevices];
                            newAccess[index] = {
                              ...newAccess[index],
                              description: e.target.value,
                            };
                            setFormData((prev) => ({
                              ...prev,
                              accessAndDevices: newAccess,
                            }));
                          }}
                        />
                      </div>
                    ))}

                    {/* Add new */}
                    <button
                      type="button"
                      className="input-box glass-btn !rounded-xl text-center cursor-pointer hover:font-bold"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          accessAndDevices: [
                            ...prev.accessAndDevices,
                            { feature: "", description: "" },
                          ],
                        }))
                      }
                    >
                      <span className="mb-1">+</span>
                      <span> Add Access / Device</span>
                    </button>
                  </div>
                </div>

                {/* product Highlight */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-6">
                    Product Highlight:
                  </h4>
                  <div className="p-4 glass-effect !rounded-xl space-y-4 w-full">
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="input-box glass-effect !rounded-xl"
                      value={formData.productHighlight.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          productHighlight: {
                            ...prev.productHighlight,
                            name: e.target.value,
                          },
                        }))
                      }
                    />
                    <input
                      type="text"
                      placeholder="Sub Title"
                      className="input-box glass-effect !rounded-xl"
                      value={formData.productHighlight.subtitle}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          productHighlight: {
                            ...prev.productHighlight,
                            subtitle: e.target.value,
                          },
                        }))
                      }
                    />
                    <input
                      type="text"
                      placeholder="Tag Line"
                      className="input-box glass-effect !rounded-xl"
                      value={formData.productHighlight.tagline}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          productHighlight: {
                            ...prev.productHighlight,
                            tagline: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                </div>

                {/* product details */}
                <div className="mt-8">
                  <h4 className="!text-[var(--navigation-font-color)]/80 mb-6">
                    Product Details:
                  </h4>
                  <div className="p-4 glass-effect !rounded-xl space-y-4 w-full">
                    {/* Tagline */}
                    <input
                      type="text"
                      placeholder="Tag line"
                      className="input-box glass-effect !rounded-xl"
                      value={formData.productDetails.tagline}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          productDetails: {
                            ...prev.productDetails,
                            tagline: e.target.value,
                          },
                        }))
                      }
                    />

                    {/* Subtitle */}
                    <input
                      type="text"
                      placeholder="Sub Title"
                      className="input-box glass-effect !rounded-xl"
                      value={formData.productDetails.subtitle}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          productDetails: {
                            ...prev.productDetails,
                            subtitle: e.target.value,
                          },
                        }))
                      }
                    />

                    {/* Image Upload & Preview */}
                    <label className="cursor-pointer block">
                      <div className="w-full">
                        {formData.productDetails.image.url ? (
                          <img
                            src={formData.productDetails.image.url}
                            alt={
                              formData.productDetails.image.alt ||
                              "Product Image"
                            }
                            className="w-full h-72 object-cover rounded-xl"
                          />
                        ) : (
                          <PlaceholderImage
                            size={"800 x 400"}
                            className="w-full h-72"
                          />
                        )}
                      </div>

                      {/* Hidden Upload Input */}
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) => handleUploadProductDetailImg(e)}
                      />
                    </label>

                    {/* Image Alt Text */}
                    <input
                      type="text"
                      placeholder="Image Alt Text"
                      className="input-box glass-effect !rounded-xl"
                      value={formData.productDetails.image.alt || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          productDetails: {
                            ...prev.productDetails,
                            image: {
                              ...prev.productDetails.image,
                              alt: e.target.value,
                            },
                          },
                        }))
                      }
                    />
                  </div>
                </div>

                {/* Videos */}
                <div className="mt-8 space-y-4">
                  <h4 className="!text-[var(--navigation-font-color)]/80">
                    Add Videos:
                  </h4>

                  {/* Map existing video entries */}
                  {formData.details.map((item, index) => (
                    <div
                      key={item.id || index}
                      className="relative p-4 glass-effect !rounded-xl space-y-4 w-full"
                    >
                      {/* Remove button */}
                      <div className="flex justify-between items-center gap-4 pl-2">
                        <h4 className="!text-white">
                          Product Video{" "}
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </h4>
                        <button
                          type="button"
                          className="glass-btn !text-red-900 flex justify-center items-center text-2xl hover:font-bold !w-fit !h-12 !rounded-xl"
                          onClick={() => {
                            const newDetails = formData.details.filter(
                              (_, i) => i !== index,
                            );
                            setFormData((prev) => ({
                              ...prev,
                              details: newDetails,
                            }));
                          }}
                        >
                          <span className="mb-2">x</span>
                        </button>
                      </div>

                      {/* Tagline */}
                      <input
                        type="text"
                        placeholder="Tagline"
                        className="input-box glass-effect !rounded-xl"
                        value={item.tagline || ""}
                        onChange={(e) => {
                          const newDetails = [...formData.details];
                          newDetails[index] = {
                            ...newDetails[index],
                            tagline: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            details: newDetails,
                          }));
                        }}
                      />

                      {/* Title */}
                      <input
                        type="text"
                        placeholder="Title"
                        className="input-box glass-effect !rounded-xl"
                        value={item.title || ""}
                        onChange={(e) => {
                          const newDetails = [...formData.details];
                          newDetails[index] = {
                            ...newDetails[index],
                            title: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            details: newDetails,
                          }));
                        }}
                      />

                      {/* Description */}
                      <textarea
                        className="input-box glass-effect !rounded-xl"
                        rows={4}
                        placeholder="Description"
                        value={item.description || ""}
                        onChange={(e) => {
                          const newDetails = [...formData.details];
                          newDetails[index] = {
                            ...newDetails[index],
                            description: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            details: newDetails,
                          }));
                        }}
                      />

                      {/* Image Preview + Upload */}
                      <label className="cursor-pointer block">
                        <div className="w-full">
                          {item.image?.url ? (
                            <img
                              src={
                                typeof item.image.url === "string"
                                  ? item.image.url
                                  : URL.createObjectURL(item.image.url) // temp preview
                              }
                              alt={item.image.alt || "Detail Image"}
                              className="w-full h-72 object-cover rounded-xl"
                            />
                          ) : (
                            <PlaceholderImage
                              size="800 x 400"
                              className="w-full h-72"
                            />
                          )}
                        </div>

                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={async (e) => {
                            const file = e.target.files[0];
                            if (!file) return;

                            // Show temporary preview
                            const newDetails = [...formData.details];
                            newDetails[index] = {
                              ...newDetails[index],
                              image: { url: file, alt: item.image?.alt || "" },
                            };
                            setFormData((prev) => ({
                              ...prev,
                              details: newDetails,
                            }));

                            try {
                              // Upload to Cloudinary
                              const data = await uploadImage(file);
                              const updatedDetails = [...formData.details];
                              updatedDetails[index] = {
                                ...updatedDetails[index],
                                image: {
                                  url: data.url,
                                  publicId: data.publicId,
                                  alt: updatedDetails[index].image.alt || "",
                                },
                              };
                              setFormData((prev) => ({
                                ...prev,
                                details: updatedDetails,
                              }));
                            } catch (err) {
                              console.error("Image upload failed", err);
                            }
                          }}
                        />
                      </label>

                      {/* Image Alt Text */}
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={async (e) => {
                          const file = e.target.files[0];
                          if (!file) return;

                          const newDetails = [...formData.details];
                          newDetails[index] = {
                            ...newDetails[index],
                            image: { url: file, alt: item.image?.alt || "" },
                          };
                          setFormData((prev) => ({
                            ...prev,
                            details: newDetails,
                          }));

                          const toastId = toast.loading(
                            `Uploading image for Video ${index + 1}...`,
                          );

                          try {
                            const data = await uploadImage(file);

                            const updatedDetails = [...formData.details];
                            updatedDetails[index] = {
                              ...updatedDetails[index],
                              image: {
                                url: data.url,
                                publicId: data.publicId,
                                alt: updatedDetails[index].image.alt || "",
                              },
                            };
                            setFormData((prev) => ({
                              ...prev,
                              details: updatedDetails,
                            }));

                            toast.success(`Image uploaded successfully!`, {
                              id: toastId,
                            });
                          } catch (err) {
                            console.error("Image upload failed", err);
                            toast.error("Image upload failed!", {
                              id: toastId,
                            });
                          }
                        }}
                      />
                    </div>
                  ))}

                  {/* Add new video button */}
                  <button
                    type="button"
                    className="input-box glass-btn !rounded-xl flex justify-center gap-2 items-center hover:gap-4 text-center cursor-pointer hover:font-bold"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        details: [
                          ...prev.details,
                          {
                            tagline: "",
                            title: "",
                            description: "",
                            image: { url: null, publicId: "", alt: "" },
                          },
                        ],
                      }))
                    }
                  >
                    <span>+</span>
                    <span>Add Video</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="xl:w-1/2 w-full space-y-8 mb-8">
              {/* How it work */}
              <div>
                <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">
                  How it work:
                </h4>

                <div className="space-y-3">
                  {formData.howItWork.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder={`Step ${index + 1}`}
                        className="input-box glass-effect !rounded-xl flex-1"
                        value={step}
                        onChange={(e) => {
                          const updatedSteps = [...formData.howItWork];
                          updatedSteps[index] = e.target.value;

                          setFormData((prev) => ({
                            ...prev,
                            howItWork: updatedSteps,
                          }));
                        }}
                      />

                      {/* Remove step */}
                      <button
                        type="button"
                        className="glass-btn !text-red-900 flex justify-center items-center text-2xl hover:font-bold !w-18 !h-14 !rounded-xl"
                        onClick={() => {
                          const updatedSteps = formData.howItWork.filter(
                            (_, i) => i !== index,
                          );
                          setFormData((prev) => ({
                            ...prev,
                            howItWork: updatedSteps,
                          }));
                        }}
                      >
                        <span className="mb-2">×</span>
                      </button>
                    </div>
                  ))}

                  {/* Add new step */}
                  <button
                    type="button"
                    className="input-box glass-btn !rounded-xl flex justify-center gap-2 items-center hover:gap-4 text-center cursor-pointer hover:font-bold"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        howItWork: [...prev.howItWork, ""],
                      }))
                    }
                  >
                    <span className="mb-1">+</span>
                    <span>Add Step</span>
                  </button>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h4 className="!text-[var(--navigation-font-color)]/80 mb-4">
                  Faq's:
                </h4>

                {/* FAQ List */}
                <div className="space-y-4 mb-4">
                  {formData.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="relative p-4 glass-effect !rounded-xl space-y-4 w-full"
                    >
                      <div className="flex justify-between items-center pl-2 gap-4">
                        <h4 className="!text-white">
                          FAQ {index < 9 ? `0${index + 1}` : index + 1}
                        </h4>
                        {/* Remove FAQ */}
                        <button
                          type="button"
                          className="glass-btn !text-red-900 flex justify-center items-center text-2xl hover:font-bold !w-fit !h-12 !rounded-xl"
                          onClick={() => {
                            const updatedFaqs = formData.faqs.filter(
                              (_, i) => i !== index,
                            );
                            setFormData((prev) => ({
                              ...prev,
                              faqs: updatedFaqs,
                            }));
                          }}
                        >
                          <span className="mb-2">×</span>
                        </button>
                      </div>

                      {/* FAQ Title */}
                      <input
                        type="text"
                        placeholder={`FAQ Title ${index + 1}`}
                        className="input-box glass-effect !rounded-xl"
                        value={faq.title}
                        onChange={(e) => {
                          const updatedFaqs = [...formData.faqs];
                          updatedFaqs[index] = {
                            ...updatedFaqs[index],
                            title: e.target.value,
                          };

                          setFormData((prev) => ({
                            ...prev,
                            faqs: updatedFaqs,
                          }));
                        }}
                      />

                      {/* FAQ Description */}
                      <textarea
                        className="input-box glass-effect !rounded-xl"
                        placeholder="Description"
                        rows={4}
                        value={faq.description}
                        onChange={(e) => {
                          const updatedFaqs = [...formData.faqs];
                          updatedFaqs[index] = {
                            ...updatedFaqs[index],
                            description: e.target.value,
                          };

                          setFormData((prev) => ({
                            ...prev,
                            faqs: updatedFaqs,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* Add FAQ */}
                <button
                  type="button"
                  className="input-box glass-btn !rounded-xl flex justify-center gap-2 items-center hover:gap-4 text-center cursor-pointer hover:font-bold"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      faqs: [...prev.faqs, { title: "", description: "" }],
                    }))
                  }
                >
                  <span className="mb-1">+</span>
                  <span>Add FAQ</span>
                </button>
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
              className={`glass-btn  capitalize flex justify-center items-center text-sm md:text-base ${loading ? "opacity-50 cursor-progress " : "opacity-100 cursor-pointer"}`}
              onClick={() => setPublish(false)}
            >
              <Cross
                className={"w-6 h-6 !fill-[var(--navigation-font-color)]"}
              />
            </button>
          </div>
          <div className="xl:w-1/2 w-full">
            <div className="!rounded-xl w-full">
              <img
                src={
                  formData.basic_info.thumbnail.url
                    ? typeof formData.basic_info.thumbnail.url === "string"
                      ? formData.basic_info.thumbnail.url // URL string
                      : URL.createObjectURL(formData.basic_info.thumbnail.url) // File object
                    : "https://placehold.co/176x176/171717/3D3D3D" // fallback placeholder
                }
                alt={formData.basic_info.thumbnail.alt || "Product Thumbnail"}
                width={176} // w-44
                height={176} // h-44
                className="object-cover rounded-xl"
              />
            </div>
            <h5 className="text-xl mt-4">
              {formData?.basic_info?.name.length > 0 ? (
                formData?.basic_info?.name
              ) : (
                <span className="text-white/60">Write Product Name</span>
              )}
            </h5>
          </div>
          <div className="xl:w-1/2 w-full">
            <h3 className="!text-[var(--navigation-font-color)]/80 mb-4">
              SEO:
            </h3>
            <div className="space-y-3">
              {/* Meta Title */}
              <input
                type="text"
                placeholder="Meta Title"
                className="input-box glass-effect !rounded-xl"
                value={formData.SEO.title}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    SEO: {
                      ...prev.SEO,
                      title: e.target.value,
                    },
                  }))
                }
              />

              {/* Meta Description */}
              <textarea
                className="input-box glass-effect !rounded-xl"
                rows={4}
                placeholder="Meta Description"
                value={formData.SEO.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    SEO: {
                      ...prev.SEO,
                      description: e.target.value,
                    },
                  }))
                }
              />

              {/* Meta Tags */}
              <textarea
                className="input-box glass-effect !rounded-xl"
                rows={4}
                placeholder="Enter Tags (comma separated)"
                value={formData.SEO.tags}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    SEO: {
                      ...prev.SEO,
                      tags: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex gap-4 items-center">
              <button
                className={`glass-btn mt-6 capitalize flex justify-center items-center hover:gap-2 gap-1 text-sm md:text-base !px-6 md:!py-4`}
                onClick={() => setPublish(false)}
              >
                Go Back
              </button>
              <button
                onClick={() => handleUpdateProduct("published")}
                disabled={loading ? true : false}
                className={`glass-btn invert mt-6 capitalize flex justify-center items-center hover:gap-2 gap-1 text-sm md:text-base !px-6 md:!py-4 ${loading ? "opacity-50 cursor-progress " : "opacity-100 cursor-pointer"}`}
              >
                <span>publish</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
