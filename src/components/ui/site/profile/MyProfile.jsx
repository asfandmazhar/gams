"use client";

import { useState } from "react";
import Container from "@/components/site/layout/Container";
import Button from "@/components/ui/site/button/Button";
import BorderButton from "@/components/ui/site/button/BorderButton";
import NameInput from "@/components/ui/site/Input";
import { useAuth } from "@/context/AuthContext";
import { ProfileImage } from "@/components/icons/icons";

export default function Profile() {
  const { user, setUser } = useAuth();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.fullName,
    email: user?.email,
    username: user?.username,
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    suspicious: true,
    rewards: true,
    discounts: true,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationChange = (type) => {
    setNotifications({
      ...notifications,
      [type]: !notifications[type],
    });
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8 && password.length <= 20,
      hasLettersNumbers: /^(?=.*[a-zA-Z])(?=.*\d)/.test(password),
      identical: password === formData.newPassword,
    };
  };

  const passwordValidation = validatePassword(formData.newPassword);
  const confirmPasswordValidation = validatePassword(formData.confirmPassword);

  return (
    <section className="pt-28 md:pt-32 lg:pt-42 pb-4">
      <Container>
        <h2 className="mb-6 md:mb-8">Profile</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4 md:mb-8">
              <div className="relative group cursor-pointer">
                <ProfileImage className="w-30 h-30 fill-[var(--navigation-font-color)] invert hover:opacity-75" />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-gray-600 text-base">{formData?.fullName}</p>
              </div>
            </div>

            {/* Nickname Section */}
            <div className="custom-rounded p-6 shadow-lg">
              <h4>Username</h4>

              {isEditingName ? (
                <div className="space-y-4 mt-4">
                  <div className="relative">
                    <NameInput
                      value={formData.username}
                      onChange={handleInputChange}
                      maxLength={30}
                      placeholder="nickname"
                      inputClass="!text-sm placeholder:!text-sm"
                      className="!py-4 !rounded !px-5"
                      iconSize="w-4 h-4"
                    />
                    <span className="!text-sm text-gray-400 absolute right-4 bottom-4">
                      {formData.nickname.length} / 30
                    </span>
                  </div>
                  <div className="flex justify-end gap-4">
                    <BorderButton
                      onClick={() => setIsEditingName(false)}
                      buttonName="Cancel"
                      className={"border-btn !rounded-full"}
                    />
                    <Button className={"!w-fit"} buttonName="Save" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between mt-2">
                  <span className="!text-sm md:!text-base text-gray-800 font-medium">
                    {formData.nickname}
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
                  {/* Current Password */}
                  <div className="relative">
                    <NameInput
                      type="password"
                      onChange={handleInputChange}
                      maxLength={30}
                      placeholder="Current Password"
                      inputClass="!text-sm placeholder:!text-sm"
                      className="!py-4 !rounded !px-5"
                      iconSize="w-4 h-4"
                    />
                    <span className="absolute right-4 bottom-4 text-sm text-gray-400">
                      {formData.currentPassword.length} / 20
                    </span>
                  </div>

                  {/* New Password */}
                  <div className="relative">
                    <NameInput
                      type="password"
                      onChange={handleInputChange}
                      maxLength={30}
                      placeholder="New Password"
                      inputClass="!text-sm placeholder:!text-sm"
                      className="!py-4 !rounded !px-5"
                      iconSize="w-4 h-4"
                    />
                    <span className="absolute right-4 bottom-4 text-sm text-gray-400">
                      {formData.currentPassword.length} / 20
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
                          className={`text-lg ${
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
                          className={`text-lg ${
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
                          className={`text-lg ${
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
                      onChange={handleInputChange}
                      maxLength={30}
                      placeholder="Confirm Password"
                      inputClass="!text-sm placeholder:!text-sm"
                      className="!py-4 !rounded !px-5"
                      iconSize="w-4 h-4"
                    />
                    <span className="absolute right-4 bottom-4 text-sm text-gray-400">
                      {formData.currentPassword.length} / 20
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button buttonName="Update password" className="!w-fit" />
                    <BorderButton
                      onClick={() => setIsEditingPassword(false)}
                      className="border-btn !rounded-full"
                      buttonName="Cancel"
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

          <div className="space-y-8">
            {/* Email Section */}
            <div className="custom-rounded p-6 shadow-lg">
              <div className="space-y-4">
                <h4>GamsGo Login E-mail</h4>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p>mhamzamughal60@gmail.com</p>
                  <div className="flex gap-4">
                    <button className="text-[var(--navigation-color)] hover:[var(--hover-color)] underline cursor-pointer !text-sm md:!text-base">
                      Change records
                    </button>
                    <button className="text-[var(--navigation-color)] hover:[var(--hover-color)] underline cursor-pointer !text-sm md:!text-base">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Notifications Section */}
            <div className="custom-rounded p-6 shadow-lg">
              <h4 className="mb-6">Email notification</h4>

              <div className="space-y-8">
                {/* Suspicious Login */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h5 className="font-semibold text-[var(--font-color)] mb-2">
                        Suspicious Login Notification (Suggested to Enable)
                      </h5>
                      <p className="!text-sm leading-relaxed">
                        When your account is logged in from an unfamiliar
                        location, you will receive an email notification to help
                        ensure the security of your account.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.suspicious}
                        onChange={() => handleNotificationChange("suspicious")}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center text-white font-bold ${
                          notifications.suspicious
                            ? "bg-[var(--navigation-color)] border-[var(--navigation-color)]"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {notifications.suspicious && "✓"}
                      </div>
                    </label>
                  </div>
                </div>

                {/* Reward Activities */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h5 className="font-semibold text-[var(--font-color)] mb-2">
                        Reward Activities
                      </h5>
                      <p className="!text-sm leading-relaxed">
                        Participate in activities to earn credits, which can be
                        used to purchase subscriptions.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.rewards}
                        onChange={() => handleNotificationChange("rewards")}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center text-white font-bold ${
                          notifications.rewards
                            ? "bg-[var(--navigation-color)] border-[var(--navigation-color)]"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {notifications.rewards && "✓"}
                      </div>
                    </label>
                  </div>
                </div>

                {/* Discounts and Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h5 className="font-semibold text-[var(--font-color)] mb-2">
                        Discounts and Benefits
                      </h5>
                      <p className="!text-sm leading-relaxed">
                        Holiday promotions, exclusive discounts, and benefit
                        notifications.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.discounts}
                        onChange={() => handleNotificationChange("discounts")}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center text-white font-bold ${
                          notifications.discounts
                            ? "bg-[var(--navigation-color)] border-[var(--navigation-color)]"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {notifications.discounts && "✓"}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
