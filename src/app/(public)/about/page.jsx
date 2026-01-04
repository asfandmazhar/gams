import Container from "@/components/site/layout/Container";

export const metadata = {
  title: "About Us | My Website",
  description: "Learn more about our company and mission.",
};

export default function AboutPage() {
  return (
    <section className="pt-28 md:pt-32 lg:pt-32 pb-4">
      <Container>
        <h1 className="!text-xl md:!text-3xl">About Us</h1>
        <p className="mt-1 !text-[13px] md:!text-sm">
          We’re a global team united by a single goal: to make digital
          subscriptions effortless for people everywhere.
        </p>
        <p className="mt-3 !text-[13px] md:!text-sm">
          Since its launch in 2020, GamsGo has revolutionized low-cost access to
          streaming accounts. We entered the streaming space to deliver the most
          affordable, stable, and secure products. By 2025, we will keep
          broadening our horizons—bringing more value in streaming, AI, music,
          security, and beyond.
        </p>
        <p className="mt-3 !text-[13px] md:!text-sm">
          Over the past six years, our premium service and attentive support
          have won the trust of millions. Nowadays, more and more users are
          starting to try subscription services on GamsGo, covering all areas
          from life to work. We are the world's most popular subscription
          platform, with millions of users, helping users save over $16 million,
          and these numbers continue to grow.
        </p>
        <h2 className="!text-base md:!text-xl mt-6 md:mt-8 mb-3">Our Vision</h2>
        <p className="mt-3 !text-[13px] md:!text-sm shadow-lg bordered custom-rounded p-4 md:p-6 bg-white">
          GamsGo’s vision is to benefit everyone through an innovative
          carpooling concept and attentive customer service. Our core philosophy
          is to deliver the best possible user experience. Through cutting-edge
          technology and around-the-clock customer support, GamsGo is committed
          to meeting the diverse needs of our users.
        </p>
        <h2 className="!text-base md:!text-xl mt-6 md:mt-8 mb-3">
          At the Core of Everything We Do
        </h2>
        <div className="shadow-lg bordered custom-rounded p-4 md:p-6 bg-white ">
          <p className="!text-[13px] md:!text-sm mb-2">
            Our values reflect what's most important to us and guide our
            decisions:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="!text-[13px] md:!text-sm text-[var(--font-color)]/80">
              User First: We begin every feature and release by listening to
              you—your needs shape all we do.
            </li>
            <li className="!text-[13px] md:!text-sm text-[var(--font-color)]/80">
              Integrity: Trust is the cornerstone of our growth, guiding every
              choice we make.
            </li>
            <li className="!text-[13px] md:!text-sm text-[var(--font-color)]/80">
              Security: We follow strict platform standards and spare no effort
              to protect your funds and privacy.
            </li>
            <li className="!text-[13px] md:!text-sm text-[var(--font-color)]/80">
              Innovation: Continuous innovation is the engine of our growth and
              success, and the reason customers choose us.
            </li>
          </ul>
          <p className="!text-[13px] md:!text-sm mt-2">
            At GamsGo, every tap on “Join a Group” puts these values to work.
            Thank you for each act of trust—your confidence is what makes our
            mission matter.
          </p>
        </div>
        <h2 className="!text-base md:!text-xl mt-6 md:mt-8 mb-3">
          Trust Matters
        </h2>
        <p className="mt-3 !text-[13px] md:!text-sm shadow-lg bordered custom-rounded p-4 md:p-6 bg-white">
          As GamsGo represents a solid adversary against scammers and hackers,
          we promise that all products sold on GamsGo are safe and legitimate.
          This means the products were obtained legally, there is no involvement
          in cheating software, and no illegal transactions. After the user
          pays, products will be delivered in real time, and the whole process
          will be smooth and fast without waiting. GamsGo makes safe and legal
          joint subscriptions possible.
        </p>
        <h2 className="!text-base md:!text-xl mt-6 md:mt-8 mb-3">
          How We Excel—Instant Responsiveness
        </h2>
        <p className="mt-3 !text-[13px] md:!text-sm shadow-lg bordered custom-rounded p-4 md:p-6 bg-white">
          GamsGo is committed to providing attentive service, driven by our
          enduring passion and deep expertise in streaming platforms and AI
          tools. Our GamsGo customer service team consists of well-trained
          streaming fans who are working in shifts to offer you 24/7 online
          service. What makes them stand out is the fact that they take pleasure
          in helping others. The internal system in GamsGo will distribute
          workload effectively to make sure every customer gets timely and
          empathetic service.
        </p>
        <h2 className="!text-base md:!text-xl mt-6 md:mt-8 mb-3">
          Safe and Easy Payment
        </h2>
        <p className="mt-3 !text-[13px] md:!text-sm shadow-lg bordered custom-rounded p-4 md:p-6 bg-white">
          GamsGo supports multiple payment methods and has started firm
          partnerships with mainstream payment service providers such as Visa,
          MasterCard, AMEX, iDeal, Skrill, etc. The payment process will be
          certified by these third-party payment companies just to make sure you
          will always have an option for a refund. The whole process of purchase
          is very simple and easy to comprehend; you are able to trace your
          order as well. Please feel free to contact our 24/7 live support team
          if you have any concerns.
        </p>
      </Container>
    </section>
  );
}
