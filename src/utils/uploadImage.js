import axios from "axios";

export const uploadImage = async (file) => {
  if (!file) throw new Error("No file provided");

  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  );

  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
      {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      },
    );

    return {
      url: res.data.secure_url,
      publicId: res.data.public_id,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error.response?.data || error);
    throw error;
  }
};
