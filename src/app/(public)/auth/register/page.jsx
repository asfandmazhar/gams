"use client";

import React, { useState } from "react";
import Container from "@/components/site/layout/Container";
import Link from "next/link";
import {
  Google,
  Facebook,
  Email,
  World,
  Arrow,
  Lock,
  User,
} from "@/components/icons/icons";
import Input from "@/components/ui/site/Input";
import Button from "@/components/ui/site/button/Button";
import LanguageModal from "@/components/ui/site/language/LanguageModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/auth/signup", formData);
      if (response.data.success) {
        router.push("/auth/login");
        toast.success(response.data.message);
        const subject = "Email Subject";
        const email = response?.data?.user?.email;
        const html = `Welcome to our site!`;
        await axios.post("/api/sendMail", {
          subject,
          email,
          html,
        });
      }
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Container>
        {/* Desktop Logo */}
        <div className="max-w-screen-xl mx-auto xl:px-10 py-10 hidden md:flex">
          <Link href={"/"}>
            <h2 className="!text-[var(--navigation-color)]">Games</h2>
          </Link>
        </div>

        <div className="max-w-screen-xl mx-auto xl:px-10">
          {/* Mobile Language */}
          <div className="mt-6 justify-end items-end flex md:hidden">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsLangOpen(true)}
            >
              <World className="w-4 h-4 fill-[var(--font-color)]" />
              <span className="!text-sm">{selectedLang}</span>
              <Arrow className={"w-4 h-4"} />
            </div>
            <LanguageModal
              isOpen={isLangOpen}
              onClose={() => setIsLangOpen(false)}
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
          </div>

          <div className="flex flex-col md:flex-row lg:justify-between items-center gap-8 xl:gap-16 py-8 md:py-32 pb-4">
            {/* Mobile Logo */}
            <div className="text-center flex md:hidden">
              <Link href={"/"}>
                <h2 className="!text-4xl !text-[var(--navigation-color)]">
                  Games
                </h2>
              </Link>
            </div>

            {/* Left Text */}
            <div className="flex flex-col justify-center w-full md:w-1/2">
              <h1 className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-7xl text-center md:text-start">
                Welcome!
              </h1>
              <h2 className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl text-center md:text-start">
                Create your account & start sharing
              </h2>
            </div>

            {/* Register Card */}
            <div className="custom-rounded md:shadow-lg md:bg-[var(--navigation-font-color)] md:p-6 space-y-6 md:w-3/6 lg:w-3/8">
              <h3 className="text-center">Create Account</h3>

              {/* Social Signup */}
              <div className="flex items-center justify-center gap-6">
                <button className="bordered p-4 rounded hover:scale-115 transform-transition duration-300 cursor-pointer">
                  <Google className={"w-6 h-6"} />
                </button>
                <button className="bordered p-4 rounded hover:scale-115 transform-transition duration-300 cursor-pointer">
                  <Facebook className={"w-6 h-6"} />
                </button>
              </div>

              <p className="text-center">Or register with your email</p>

              <Input
                name="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="Full name"
                inputClass="!text-sm placeholder:!text-sm"
                className="!py-4 !rounded !px-5"
                icon={<User className="fill-gray-400 w-4 h-4" />}
              />
              <Input
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email address"
                inputClass="!text-sm placeholder:!text-sm"
                className="!py-4 !rounded !px-5"
                icon={<Email className="fill-gray-400 w-4 h-4" />}
              />
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Password"
                inputClass="!text-sm placeholder:!text-sm"
                className="!py-4 !rounded !px-5"
                icon={<Lock className="fill-gray-400 w-4 h-4" />}
              />

              <Button
                className={`!rounded ${loading ? "opacity-60 pointer-events-none" : ""}`}
                buttonName={loading ? "Creating..." : "Create Account"}
                onClick={handleRegister}
                disabled={loading}
              />

              <p className="text-center">Or</p>

              <p className="text-center">
                Already have an account? <Link href={"/auth/login"}>Login</Link>
              </p>

              <p className="text-center">
                By creating an account, you agree to our{" "}
                <b>
                  <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
                </b>{" "}
                and confirm that you have read our{" "}
                <b>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </b>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-wrap items-center justify-center gap-6 lg:gap-8 max-w-screen-xl mx-auto xl:px-10 hidden md:flex">
          <div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsLangOpen(true)}
            >
              <World className="w-6 h-6 fill-[var(--font-color)]" />
              <span>{selectedLang}</span>
              <Arrow className={"w-5 h-5"} />
            </div>
            <LanguageModal
              isOpen={isLangOpen}
              onClose={() => setIsLangOpen(false)}
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
          </div>

          <b className="text-sm whitespace-nowrap">
            <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
          </b>
          <b className="text-sm whitespace-nowrap">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </b>
          <p className="!text-sm">
            Copyright © 2025 GamsGo. All Rights Reserved.
          </p>
        </div>
      </Container>
    </section>
  );
}
