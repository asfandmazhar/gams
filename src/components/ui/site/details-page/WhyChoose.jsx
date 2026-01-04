"use client";
import React from "react";
import Image from "next/image";

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

export default function WhyChoose() {
  return (
    <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-32 lg:mb-42 bg-[var(--muted-background-color)] custom-rounded p-6 lg:p-10 px-4 lg:px-14">
      <p className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
        No ads, offline downloads, high-quality audio, and on-demand
        listening—every moment made for you
      </p>
      <h2>
        Enjoy limitless listening with premium high-quality music experience
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
            <p className="!text-xs bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">{feature.descriptionOne}</p>
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
  );
}
