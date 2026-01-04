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
} from "@/components/icons/icons";
import EmailInput from "@/components/ui/site/Input";
import Button from "@/components/ui/site/button/Button";
import LanguageModal from "@/components/ui/site/language/LanguageModal";
export default function page() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <section>
      <Container>
        <div className="max-w-screen-xl mx-auto xl:px-10 py-10 hidden md:flex">
          <Link href={"/"}>
            <h2 className="!text-[var(--navigation-color)]">Games</h2>
          </Link>
        </div>
        <div className="max-w-screen-xl mx-auto xl:px-10">
          <div className="mt-6 justify-end items-end flex md:hidden">
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsLangOpen(true)}
              >
                <World className="w-4 h-4 fill-[var(--font-color)]" />
                <span className="!text-sm">{selectedLang}</span>
                <Arrow className={"w-4 h-4"} />
              </div>
            </div>
            <LanguageModal
              isOpen={isLangOpen}
              onClose={() => setIsLangOpen(false)}
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
          </div>
          <div className="flex flex-col md:flex-row lg:justify-between items-center gap-8 xl:gap-16 py-8 md:py-32 pb-4">
            <div className="text-center flex md:hidden">
              <Link href={"/"}>
                <h2 className="!text-4xl !text-[var(--navigation-color)]">
                  Games
                </h2>
              </Link>
            </div>
            <div className="flex flex-col justify-center w-full md:w-1/2">
              <h1 className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-7xl text-center md:text-start">
                Hi!
              </h1>
              <h2 className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl text-center md:text-start">
                Share the Cost, Double the Joy!
              </h2>
            </div>
            <div className="custom-rounded md:shadow-lg md:bg-[var(--navigation-font-color)] md:p-6 space-y-6 md:w-3/6 lg:w-3/8">
              <h3 className="text-center">Log in / Sign up</h3>
              <div className="flex items-center justify-center gap-6">
                <button className="bordered p-4 rounded hover:scale-115 transform-transition duration-300 cursor-pointer">
                  <Google className={"w-6 h-6"} />
                </button>
                <button className="bordered p-4 rounded hover:scale-115 transform-transition duration-300 cursor-pointer">
                  <Facebook className={"w-6 h-6"} />
                </button>
              </div>
              <p className="text-center">Or with your email</p>
              <EmailInput
                placeholder="Email address"
                inputClass="!text-sm placeholder:!text-sm"
                className="!py-4 !rounded !px-5"
                iconSize="w-4 h-4"
                icon={<Email className="fill-gray-400 w-4 h-4" />}
              />
              <Button className="!rounded" buttonName="Continue" />
              <p className="text-center">
                By continuing, you agree to our
                <b>
                  <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
                </b>
                and confirm that you have read our
                <b>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-wrap items-center justify-center gap-6 lg:gap-8 max-w-screen-xl mx-auto xl:px-10 hidden md:flex">
          <div>
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsLangOpen(true)}
              >
                <World className="w-6 h-6 fill-[var(--font-color)]" />
                <span>{selectedLang}</span>
                <Arrow className={"w-5 h-5"} />
              </div>
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
