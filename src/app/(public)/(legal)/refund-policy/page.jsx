import React from "react";
import Container from "@/components/site/layout/Container";

export const metadata = {
  title: "Refund Policy | My Website",
  description: "Learn more about our company and mission.",
};

const refundPolicyData = [
  {
    type: "heading",
    text: "GamsGo Refund Policy",
  },
  {
    type: "paragraph",
    text: "We are always pleased to see that the subscriptions we provide bring joy to our users. However, if you believe a refund is necessary, please carefully read the following section.",
  },
  {
    type: "paragraph",
    text: "GamsGo allows you to request a refund under reasonable conditions.",
  },
  {
    type: "section",
    title: "Situations That Refunds May Be Granted",
    list: [
      "Refund within 24 hours of purchase: If you request a refund within 24 hours after purchase, we will process your refund. However, as we pay bank fees for processing your payment and refund, there will be a refund fee incurred.",
      "Duplicate payments: If you have made a duplicate payment for the same order, we will refund the duplicate part.",
      "Subscription not received: If you have successfully paid for a subscription but have not received it within the agreed time, you may request a refund.",
      "Refund for technical issues: If the subscription has unresolved technical issues that significantly affect its normal use, you can apply for a refund. However, you must provide a detailed description of the issue and evidence to enable us to verify it.",
      "Specific subscription type refund: For specific types of subscriptions, if you feel the subscription does not meet expectations or you are dissatisfied with the product, you can request a refund provided you supply sufficient evidence. The refund amount will be the value corresponding to the remaining subscription period, minus any applicable refund processing and service fees.",
    ],
  },
  {
    type: "section",
    title: "Situations That Refunds Cannot Be Processed",
    list: [
      "Unpaid orders: Refunds cannot be processed for unpaid orders.",
      "Special subscriptions: For some subscriptions, once the subscription service begins, payment is considered final and non-refundable. However, you can cancel your subscription at the end of the current billing cycle to avoid future charges.",
      "Device Restrictions: Our subscription service is only supported on non-TV devices such as PCs, Macs, smartphones, and tablets, with each account limited to one device login. If the account becomes unusable due to multiple device logins or the use of unsupported devices, we are not responsible for such situations and cannot provide refunds. Please refer to the product details page for specific device usage restrictions.",
      "Improper User Operations: If the service experience is affected or the account is restricted due to the user not following our usage guidelines, we will be unable to provide a refund.",
      "Other reasons not meeting refund terms: Any reason not described in the 'Situations That Refunds May Be Granted' section.",
      "Recharge Service: The recharge service is a one-time operation, where we use the information you provide to pay for your account's membership fees. Since we cannot perform further actions on your account after the Recharge, refunds are not possible. Once the Recharge service is completed, the payment is considered final and non-refundable. However, if any issues with your account or membership arise due to our operational errors or technical problems, please contact us promptly. We will investigate the matter and provide a solution. If the issue is caused by us, we will offer the necessary support and compensation. If changes in official operational policies result in modifications or cancellations of your membership, such situations fall outside the scope of our after-sales support, and we will not be able to provide a refund. We kindly ask for your understanding.",
      "Add-on Package Service: All add-on packages (including but not limited to Midjourney) are services that provide additional usage. After purchase, the system will automatically allocate resource quotas and activate the permissions in real-time. Resource allocation involves cloud server deployment and cannot be reclaimed. Therefore, once purchased, it is considered as service delivery, and no refunds or cancellations are supported.",
      "Credit/Points-Based Subscriptions: For subscriptions that include credits or points, once the credits/points are partially or fully used, the service is considered consumed and non-refundable.",
      "Clearly Disclosed Feature Limitations: For features explicitly labeled as 'dynamic performance', 'based on availability', or 'non-guaranteed', the purchase indicates that the customer has acknowledged and accepted the nature of these features. As such, refunds are not provided for issues related to the performance or availability of these features.",
      "Guaranteed Service: This service is provided under a policy of reasonable use and is intended to support legitimate user needs. Actions considered to be in violation include, but are not limited to: 1) Frequent or abnormal triggering of service limits; 2) Malicious access through scripts, bots, or other technical means; or 3) Any form of service abuse that wastes platform resources or degrades the experience for other users. We reserve the right to suspend or terminate the service for such violations, without providing any refund.",
      "Mixed Payment: To provide the fastest possible refund and streamline your next purchase, all Mixed Payment orders are refunded to Credits by default, which are immediately available for use. If you would prefer the refund to be returned to your original payment method, please contact our customer support team, and we will assist you with the process.",
    ],
  },
  {
    type: "section",
    title: "Principles of Refund Amounts",
    content: [
      "Each refund request is subject to a refund processing fee and a service fee. For subscription services that have been in use for more than 30 days, a service fee amounting to 15% of the total subscription value will be deducted to cover the platform’s operational costs incurred during the provision of services (including but not limited to technical resources, customer support, and system maintenance).",
      "Refund amount calculation: Refund Amount = Order Amount − Refund Processing Fee − Service Fee (The refund processing fee is determined by the applicable charges and refund policies of the respective payment provider. The service fee is applied to cover the platform’s operational, personnel, and technical costs associated with delivering the service.)",
      "For partially used subscriptions that are eligible for a refund due to service inaccessibility, the refund amount will be calculated based on the remaining paid portion of the subscription period.",
      "Complimentary access, promotional bonuses, or any usage time granted without charge are excluded from the refundable amount and hold no monetary refund value.",
      "GamsGo supports refunding the amount as credits to your GamsGo wallet. Especially for refunds under $5, considering the transaction fees from various channels, we recommend refunding the amount to your wallet, which is free of any fees. These credits can be used to redeem other products on our website and are valid permanently.",
      "For subscription services such as GamsGo Midjourney, the refund amount will be calculated based on the following logic: Actual usage days / Total days in the subscription period × Payment amount, or Number of times used / Total subscription quota (excluding extra quota) × Payment amount. The final refund amount will be determined as the lower of the two calculated values, after deducting applicable refund processing and service fees.",
    ],
  },
  {
    type: "section",
    title: "Possible Additional Consequences of Refunds",
    list: [
      "Impact on personal account: For example, for some subscriptions, once a refund is processed, your account will be removed from the Premium Family Group, and you will not be able to join any other premium family plans for the next 12 months.",
      "Consequences of violating the refund policy: If your refund application violates GamsGo's refund policy, we reserve the right to take action against your GamsGo account. Please proceed cautiously when applying for a refund.",
    ],
  },
  {
    type: "section",
    title: "Disclaimer",
    content: [
      "In cases where force majeure events such as operational area adjustments, policy changes, or official incidents involving subscription providers or OTT platforms prevent GamsGo from fulfilling ongoing orders, GamsGo is obligated to provide solutions to users who have purchased services. These solutions may include replacing the subscription within a specified time frame, issuing refunds (including refunds to GamsGo credits or back to the original payment method), or converting the order to a different subscription.",
      "All refunds are at the sole discretion of GamsGo.",
      "Please ensure that you fully understand and accept these conditions before making a purchase. We encourage you to contact our customer service team first if you encounter any issues, to seek a possible solution.",
    ],
  },
];

export default function Page() {
  return (
    <section className="pt-28 md:pt-32 lg:pt-32 pb-4">
      <Container>
        {refundPolicyData.map((item, index) => {
          if (item.type === "heading") {
            return (
              <h1 key={index} className="!text-xl md:!text-3xl">
                {item.text}
              </h1>
            );
          }
          if (item.type === "paragraph") {
            return (
              <p key={index} className="mt-3 !text-[13px] md:!text-sm">
                {item.text}
              </p>
            );
          }
          if (item.type === "section") {
            return (
              <div key={index} className="mt-6">
                <h2 className="!text-base md:!text-xl mb-3">{item.title}</h2>
                <div className="shadow-lg bordered custom-rounded p-4 md:p-6 bg-white">
                  {item.content?.map((c, i) => (
                    <p key={i} className="mt-3 !text-[13px] md:!text-sm">
                      {c}
                    </p>
                  ))}
                  {item.list && item.list.length > 0 && (
                    <ul className="list-disc ml-6">
                      {item.list.map((l, j) => (
                        <li
                          key={j}
                          className="mt-2 !text-[13px] md:!text-sm text-[var(--font-color)]/80"
                        >
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}
      </Container>
    </section>
  );
}
