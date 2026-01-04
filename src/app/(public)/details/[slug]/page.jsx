import ProductDetail from "@/components/ui/site/details-page/ProductDetails";

export default function DetailSlugPage({ params }) {
  const { slug } = params;

  // Dummy data (backend/API se bhi fetch kar sakte ho)
  const detailsData = {
    netflix: {
      title: "Netflix",
      description: "Netflix offers streaming of movies, TV shows, and more.",
      price: "$15 / month",
    },
    chatgpt: {
      title: "ChatGPT",
      description: "ChatGPT helps you with AI-powered conversations.",
      price: "$20 / month",
    },
    spotify: {
      title: "Spotify",
      description: "Spotify lets you stream millions of songs and podcasts.",
      price: "$10 / month",
    },
  };

  const detail = detailsData[slug];

  if (!detail) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">404 - Detail Not Found</h1>
      </div>
    );
  }

  return (
    <ProductDetail detail={detail}/>
  );
}
