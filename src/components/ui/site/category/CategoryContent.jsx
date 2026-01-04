import Image from "next/image";
import CategoryDetails from "./CategoryContentDetails";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CategoryContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("category") || "all";

  const data = {
    music: [
      {
        id: 3,
        logo: "/images/card/spotify.jpg",
        title: "Spotify Premium",
        price: "$2.57",
        description: "Minimum per month",
        rating: 4.6,
        users: "150+",
        slug: "spotify",
        details: [
          "Advanced Individual Plan, Stable Subscription",
          "Ad-free listening experience: download songs offline for listening",
          "Create your own exclusive playlists and remixes to forge your own musical territory",
          "Enjoy audio quality up to 320kbps, much higher than the 160kbps of the free version, so you can hear more detail in your music",
        ],
      },
    ],
    ai: [
      {
        id: 4,
        logo: "/images/card/chatgpt.jpg",
        title: "ChatGPT Plus",
        price: "$5.54",
        description: "Minimum per month",
        rating: 4.7,
        users: "200+",
        slug: "ChatGPT",
        details: [
          "Recharge Plus for your own ChatGPT account",
          "Enjoy Plus membership on your personal account — at a price lower than the official rate",
          "No shared access — your chat history stays private and visible to you only",
          "Activate in minutes",
          "Official ChatGPT Plus access, supporting the latest models: GPT-5, and more",
          "Enjoy exclusive features like DALL·E 3 image generation, file analysis, code assistance, and more",
        ],
      },
      {
        id: 5,
        logo: "/images/card/envato.jpg",
        title: "Envato Elements",
        price: "$10.00",
        description: "Minimum per month",
        rating: 4.9,
        users: "75+",
        slug: "Envato",
        details: [
          "110M+ tracks in lossless, HiRes FLAC",
          "Full music library, ad-free, offline mode",
          "Supports synchronising music & playlists",
        ],
      },
    ],
    software: [
      {
        id: 6,
        logo: "/images/card/netflix.jpg",
        title: "Netflix",
        price: "$12.00",
        description: "Minimum per month",
        rating: 4.5,
        users: "300+",
        slug: "Netflix",
        details: [
          "Renew the same subscription for life-time",
          "Keep all your favorites and lists",
          "Real-time delivery",
          "Compatible with Mac, smartphones, tablets, and TV devices such as smart TVs, Xbox, and PSN.",
          "Warranty, refunds guarantee",
        ],
      },
      {
        id: 7,
        logo: "/images/card/canva.jpg",
        title: "Canva",
        price: "$12.00",
        description: "Minimum per month",
        rating: 4.5,
        users: "300+",
        slug: "Canva",
        details: [
          "110M+ tracks in lossless, HiRes FLAC",
          "Full music library, ad-free, offline mode",
          "Supports synchronising music & playlists",
        ],
      },
    ],
  };

  const allItems = Object.values(data).flat();
  const items = slug === "all" ? allItems : data[slug] || [];

  const brandColors = {
    spotify: "bg-green-50",
    chatgpt: "bg-emerald-50",
    envato: "bg-green-50",
    netflix: "bg-red-50",
    canva: "bg-blue-50",
  };

  const getBrandColor = (title) => {
    const key = title.toLowerCase();
    if (key.includes("spotify")) return brandColors.spotify;
    if (key.includes("chatgpt")) return brandColors.chatgpt;
    if (key.includes("envato")) return brandColors.envato;
    if (key.includes("netflix")) return brandColors.netflix;
    if (key.includes("canva")) return brandColors.canva;
    return "bg-gray-50";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-10 lg:py-16">
      {items.map((item) => (
        <div key={item.id}>
          <Link href={`/details/${item.slug}`}>
            <div
              className={`relative custom-rounded p-6 bordered hover:shadow-lg mt-8 ${getBrandColor(
                item.title
              )}`}
            >
              <div className="absolute top-6 right-4">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white">👤</span>
                  </div>
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">C</span>
                  </div>
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">R</span>
                  </div>
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-orange-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {item.users}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 w-20 h-20 md:w-24 md:h-24">
                <Image
                  fill
                  src={item.logo}
                  alt="netflix"
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         25vw"
                />
              </div>

              <div className="flex justify-between items-center mt-16 md:mt-24">
                <div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="text-right">
                  <h2>{item.price}</h2>
                </div>
              </div>
            </div>
          </Link>
          <CategoryDetails
            details={item.details}
            brandColor={getBrandColor(item.title)}
            slug={item.slug}
          />
        </div>
      ))}
    </div>
  );
}
