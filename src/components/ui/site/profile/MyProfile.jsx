"use client";

import { useState, useEffect } from "react";
import Container from "@/components/site/layout/Container";
import Button from "@/components/ui/site/button/Button";
import BorderButton from "@/components/ui/site/button/BorderButton";
import NameInput from "@/components/ui/site/Input";
import { useAuth } from "@/context/AuthContext";
import { ProfileImage } from "@/components/icons/icons";
import axios from "axios";
import toast from "react-hot-toast";

// Simple Loading Spinner Component
const Loader = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-[var(--navigation-color)] rounded-full animate-spin"></div>
  </div>
);

export default function Profile() {
  const { user, loading: authLoading } = useAuth();

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingFullName, setIsEditingFullName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading for Save/Update actions

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    suspicious: true,
    rewards: true,
    discounts: true,
  });

  // Initialize formData when user loads
  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        username: user.username || "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const validatePassword = (password) => ({
    length: password.length >= 8 && password.length <= 20,
    hasLettersNumbers: /^(?=.*[a-zA-Z])(?=.*\d)/.test(password),
    identical: password === formData.newPassword,
  });

  const passwordValidation = validatePassword(formData.newPassword);
  const confirmPasswordValidation = validatePassword(formData.confirmPassword);

  const handleSaveFullName = async () => {
    if (!formData.fullName.trim()) {
      toast.error("Full name cannot be empty");
      return;
    }

    if (formData.fullName.trim().length < 3) {
      toast.error("Invalid Full Name");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.put("/api/user/update-fullname", {
        fullName: formData.fullName,
      });

      if (res.data.success) {
        toast.success("Full name updated successfully!");
        setIsEditingFullName(false);
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveUsername = async () => {
    if (!formData.username.trim()) {
      toast.error("Username cannot be empty");
      return;
    }

    if (formData.username.trim().length < 3) {
      toast.error("Invalid Username!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.put("/api/user/update-username", {
        username: formData.username,
      });

      if (res.data.success) {
        toast.success("Username updated successfully!");
        setIsEditingName(false);
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (!formData.newPassword.trim()) {
      toast.error("Password cannot be empty");
      return;
    }

    if (formData.newPassword.trim().length < 8) {
      toast.error("Password is too weak!");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Password and conform Password Must be Same!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.put("/api/user/update-password", {
        password: formData.newPassword,
      });

      if (res.data.success) {
        toast.success("Password updated successfully!");
        setIsEditingPassword(false);
        setFormData((prev) => ({
          ...prev,
          newPassword: "",
          confirmPassword: "",
        }));
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || !user) return <Loader />; // Show loading while auth loads

  return (
    <section className="pt-28 md:pt-32 lg:pt-42 pb-4">
      <Container>
        <h2 className="mb-6 md:mb-8">Profile</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Profile Image */}
            <div className="flex items-center gap-4 mb-4 md:mb-8">
              <div className="relative group cursor-pointer">
                <ProfileImage className="w-30 h-30 fill-[var(--navigation-font-color)] invert hover:opacity-75" />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-gray-600 text-base">{formData.fullName}</p>
              </div>
            </div>

            {/* Full Name Section */}
            <div className="custom-rounded p-6 shadow-lg">
              <h4>Full Name</h4>
              {isEditingFullName ? (
                <div className="space-y-4 mt-4">
                  <div className="relative">
                    <NameInput
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fullName: e?.target?.value,
                        }))
                      }
                      maxLength={50}
                      placeholder="Full Name"
                      inputClass="!text-sm placeholder:!text-sm"
                      className="!py-4 !rounded !px-5"
                      iconSize="w-4 h-4"
                    />
                    <span className="!text-sm text-gray-400 absolute right-4 bottom-4">
                      {formData.fullName.length} / 50
                    </span>
                  </div>
                  <div className="flex justify-end gap-4">
                    <BorderButton
                      onClick={() => setIsEditingFullName(false)}
                      buttonName="Cancel"
                      className="border-btn !rounded-full"
                      disabled={loading}
                    />
                    <Button
                      className="!w-fit"
                      buttonName={loading ? "Saving..." : "Save"}
                      onClick={handleSaveFullName}
                      disabled={loading}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between mt-2">
                  <span className="!text-sm md:!text-base text-gray-800 font-medium">
                    {formData.fullName}
                  </span>
                  <button
                    onClick={() => setIsEditingFullName(true)}
                    className="text-[var(--navigation-color)] hover:text-[var(--hover-color)] underline cursor-pointer !text-sm md:!text-base"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>

            {/* Username Section */}
            <div className="custom-rounded p-6 shadow-lg">
              <h4>Username</h4>
              {isEditingName ? (
                <div className="space-y-4 mt-4">
                  <div className="relative">
                    <NameInput
                      name="username"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          username: e?.target?.value,
                        }))
                      }
                      maxLength={30}
                      placeholder="Username"
                      inputClass="!text-sm placeholder:!text-sm"
                      className="!py-4 !rounded !px-5"
                      iconSize="w-4 h-4"
                    />
                    <span className="!text-sm text-gray-400 absolute right-4 bottom-4">
                      {formData.username.length} / 30
                    </span>
                  </div>
                  <div className="flex justify-end gap-4">
                    <BorderButton
                      onClick={() => setIsEditingName(false)}
                      buttonName="Cancel"
                      className="border-btn !rounded-full"
                      disabled={loading}
                    />
                    <Button
                      className="!w-fit"
                      buttonName={loading ? "Saving..." : "Save"}
                      onClick={handleSaveUsername}
                      disabled={loading}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between mt-2">
                  <span className="!text-sm md:!text-base text-gray-800 font-medium">
                    {formData.username}
                  </span>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-[var(--navigation-color)] hover:text-[var(--hover-color)] underline cursor-pointer !text-sm md:!text-base"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>

            {/* Password Section */}
            <div className="custom-rounded p-6 shadow-lg">
              <h4>Reset Password</h4>
              {isEditingPassword ? (
                <div className="space-y-6 mt-4">
                  {/* New Password */}
                  <div className="relative">
                    <NameInput
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          newPassword: e?.target?.value,
                        }))
                      }
                      maxLength={20}
                      placeholder="New Password"
                      inputClass="!text-sm placeholder:!text-sm"
                      className="!py-4 !rounded !px-5"
                      iconSize="w-4 h-4"
                    />
                    <span className="absolute right-4 bottom-4 text-sm text-gray-400">
                      {formData.newPassword.length} / 20
                    </span>
                  </div>

                  {/* Password Requirements */}
                  <div className="text-sm text-gray-400 space-y-2">
                    <p className="font-medium !text-gray-400">
                      Your password must have
                    </p>
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-lg font-black ${
                            passwordValidation.length
                              ? "text-green-500"
                              : "text-gray-400"
                          }`}
                        >
                          ✓
                        </span>
                        <span>8 to 20 characters</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-lg font-black ${
                            passwordValidation.hasLettersNumbers
                              ? "text-green-500"
                              : "text-gray-400"
                          }`}
                        >
                          ✓
                        </span>
                        <span>Letters and numbers</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-lg font-black ${
                            confirmPasswordValidation.identical &&
                            formData.confirmPassword
                              ? "text-green-500"
                              : "text-gray-400"
                          }`}
                        >
                          ✓
                        </span>
                        <span>The two passwords you entered are identical</span>
                      </div>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative">
                    <NameInput
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          confirmPassword: e?.target?.value,
                        }))
                      }
                      maxLength={20}
                      placeholder="Confirm Password"
                      inputClass="!text-sm placeholder:!text-sm"
                      className="!py-4 !rounded !px-5"
                      iconSize="w-4 h-4"
                    />
                    <span className="absolute right-4 bottom-4 text-sm text-gray-400">
                      {formData.confirmPassword.length} / 20
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      buttonName={loading ? "Updating..." : "Update password"}
                      className="!w-fit"
                      onClick={handleUpdatePassword}
                      disabled={loading}
                    />
                    <BorderButton
                      onClick={() => setIsEditingPassword(false)}
                      className="border-btn !rounded-full"
                      buttonName="Cancel"
                      disabled={loading}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between mt-2">
                  <span className="!text-sm md:!text-base text-gray-600">
                    Edit your password
                  </span>
                  <button
                    onClick={() => setIsEditingPassword(true)}
                    className="text-[var(--navigation-color)] hover:text-[var(--hover-color)] underline cursor-pointer !text-sm md:!text-base"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Email Section */}
            <div className="custom-rounded p-6 shadow-lg">
              <div className="space-y-4">
                <h4>GamsGo Login E-mail</h4>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p>{formData.email}</p>
                </div>
              </div>
            </div>

            {/* Email Notifications Section */}
            <div className="custom-rounded p-6 shadow-lg">
              <h4 className="mb-6">Email notification</h4>
              <div className="space-y-8">
                <NotificationRow
                  title="Suspicious Login Notification (Suggested to Enable)"
                  description="When your account is logged in from an unfamiliar location, you will receive an email notification to help ensure the security of your account."
                  checked={notifications.suspicious}
                  onChange={() => handleNotificationChange("suspicious")}
                />
                <NotificationRow
                  title="Reward Activities"
                  description="Participate in activities to earn credits, which can be used to purchase subscriptions."
                  checked={notifications.rewards}
                  onChange={() => handleNotificationChange("rewards")}
                />
                <NotificationRow
                  title="Discounts and Benefits"
                  description="Holiday promotions, exclusive discounts, and benefit notifications."
                  checked={notifications.discounts}
                  onChange={() => handleNotificationChange("discounts")}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// NotificationRow Component
const NotificationRow = ({ title, description, checked, onChange }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="flex-1 pr-4">
        <h5 className="font-semibold text-[var(--font-color)] mb-2">{title}</h5>
        <p className="!text-sm leading-relaxed">{description}</p>
      </div>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-6 h-6 rounded border-2 flex items-center justify-center text-white font-bold ${
            checked
              ? "bg-[var(--navigation-color)] border-[var(--navigation-color)]"
              : "border-gray-300 bg-white"
          }`}
        >
          {checked && "✓"}
        </div>
      </label>
    </div>
  </div>
);
