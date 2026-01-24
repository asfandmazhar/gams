"use client";

import React, { useState } from "react";
import Container from "@/components/site/layout/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  Google,
  Facebook,
  Email,
  World,
  Arrow,
  Lock,
} from "@/components/icons/icons";
import Input from "@/components/ui/site/Input";
import Button from "@/components/ui/site/button/Button";
import LanguageModal from "@/components/ui/site/language/LanguageModal";

export default function LoginPage() {
  const router = useRouter();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Invalid email or password.");
        return;
      }

      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      toast.error("Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Container>
        {/* Desktop Logo */}
        <div className="max-w-screen-xl mx-auto xl:px-10 py-10 hidden md:flex">
          <Link href="/">
            <h2 className="!text-[var(--navigation-color)]">Games</h2>
          </Link>
        </div>

        <div className="max-w-screen-xl mx-auto xl:px-10">
          {/* Mobile Language */}
          <div className="mt-6 flex justify-end md:hidden">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsLangOpen(true)}
            >
              <World className="w-4 h-4 fill-[var(--font-color)]" />
              <span className="text-sm">{selectedLang}</span>
              <Arrow className="w-4 h-4" />
            </div>

            <LanguageModal
              isOpen={isLangOpen}
              onClose={() => setIsLangOpen(false)}
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 xl:gap-16 py-8 md:py-32">
            {/* Left */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="!text-4xl md:!text-6xl">Hi!</h1>
              <h2 className="!text-3xl md:!text-5xl">
                Share the Cost, Double the Joy!
              </h2>
            </div>

            {/* Form */}
            <form
              className="custom-rounded md:shadow-lg md:bg-[var(--navigation-font-color)] md:p-6 space-y-6 md:w-3/6 lg:w-3/8"
              noValidate
            >
              <h3 className="text-center">Welcome Back</h3>

              <div className="flex justify-center gap-6">
                <button type="button" className="bordered p-4 rounded">
                  <Google className="w-6 h-6" />
                </button>
                <button type="button" className="bordered p-4 rounded">
                  <Facebook className="w-6 h-6" />
                </button>
              </div>

              <p className="text-center">Or sign in with email</p>

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email address"
                inputClass="!text-sm placeholder:!text-sm"
                className="!py-4 !rounded !px-5"
                icon={<Email className="w-4 h-4 fill-gray-400" />}
              />

              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Password"
                inputClass="!text-sm placeholder:!text-sm"
                className="!py-4 !rounded !px-5"
                icon={<Lock className="w-4 h-4 fill-gray-400" />}
              />

              <Button
                type="submit"
                className="w-full !rounded"
                buttonName={loading ? "Signing in..." : "Continue"}
                disabled={loading}
                onClick={handleSubmit}
              />

              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <Link href="/auth/register" className="font-semibold">
                  Sign up
                </Link>
              </p>

              <p className="text-center text-xs">
                By continuing, you agree to our{" "}
                <Link href="/terms-and-conditions" className="font-semibold">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="font-semibold">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
