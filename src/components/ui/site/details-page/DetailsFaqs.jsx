import React from "react";
import CustomFaqs from "@/components/ui/site/GlobalFaqs";

const customFaqs = [
  {
    title: "What is Games",
    description:
      "Games is a website where you can share the cost of multi-account digital subscriptions.",
  },
  {
    title: "How to Share a Subscription?",
    points: [
      "Click on the '+' Share a subscription' next to the profile picture in the top right corner of the home page.",
      "Select the subscription you want to share.",
      "Select the plan that matches your subscription.",
      "Indicate how many slots you wish to share.",
      "Select if you are going to public your subscription",
      "Submit information of this subscription",
      "Now you can earn money once co-subscribers join in !",
    ],
  },
  {
    title: "Which costs are applied when using GoSplit?",
    description:
      "We provide a secure transaction environment for subscription owners and co-subscribers. We charge each co-subscriber €0.5/$0.5/700KRW + 5% monthly, and subscription owners a connection fee of 25% (up to €1/$1/1400KRW), which is only charged in the first month that each co-subscriber joins the group.",
  },
  {
    title: "Is it safe to share my subscription on GoSplit?",
    points: [
      "Certain subscriptions operate by sharing login credentials.",
      "These subscriptions offer various security features to facilitate secure sharing of login credentials.",
      "Modifications to the account email address or password are only possible upon entering a code sent via email.",
      "It is highly recommended that unique passwords are used for each service utilized.",
    ],
  },
  {
    title: "How to Join In a Subscription ?",
    points: [
      "Go to the marketplace.",
      "Search for the service you want.",
      "Once you have found the service and the offer, click on the Join button.",
      "Choose how many slots you want",
      "After reading the T&C of the service, choose your payment method.",
      "As soon as the payment is validated, please make sure the type of this subscription(username and password or share links,and go to see the CREDENTIAL or join in the group talk at SUBSCRIPTION page to ask the owners for the share links",
    ],
  },
  {
    title: "How can I cancel my membership?",
    points: [
      "Go to the Subscriptions page.",
      "Choose the subscription you want to cancel membership",
      "Click the button “Request cancellation”",
      "You will continue to enjoy the subscription for the current month and no longer be charged for future months.",
    ],
  },
];

export default function DetailsFaqs() {
  return (
    <div className="space-y-4">
      <h3>Faqs</h3>
      <CustomFaqs data={customFaqs} />
    </div>
  );
}
