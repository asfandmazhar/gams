import React from "react";
import Container from "@/components/site/layout/Container";

export const metadata = {
  title: "Copyright Policy | My Website",
  description: "Learn more about our company and mission.",
};

const copyrightPolicyData = [
  {
    type: "heading",
    text: "GamsGo Copyright Policy",
  },
  {
    type: "paragraph",
    text: "We respect the intellectual property of others and we expect the users of our services do the same. If you believe that your copyrighted work has been copied in a way that constitutes copyright or other intellectual property rights infringement and is accessible through a website or other online service operated by us, you may notify us in accordance with the European Union’s E-Commerce Directive 2000/31/EC (including appropriate EU Member State implementing legislation) in relation to applicable intellectual property rights, or the United States’ Digital Millennium Copyright Act 1998 (DMCA).",
  },
  {
    type: "section",
    title: "Notice of Claimed Infringement",
    content: [
      "If you believe that your work has been copied in a way that constitutes copyright infringement, you will need to send a written communication that includes the following:",
    ],
    list: [
      "A physical or electronic signature of a person authorised to act on behalf of the copyright owner.",
      "Identification of the material that is claimed to be infringing or to be the subject of infringing activity and which is requested to be removed or disabled, along with information reasonably sufficient to enable us to locate the material.",
      "Information reasonably sufficient to enable us to contact you, for example an email address, telephone number or other contact details.",
      "A statement that you have a good faith belief that use of the material in the manner complained of is not authorised by the owner, its agent, or the law.",
      "A statement that the information in the notification is accurate, and under penalty of perjury under the DMCA, that you are authorised to act on behalf of the owner of an exclusive right which allegedly is infringed.",
    ],
  },
  {
    type: "paragraph",
    text: "Please send this notification by email to legal@GamsGo.com",
  },
  {
    type: "paragraph",
    text: "If you are unsure whether you hold rights to a particular work, or whether the content you are reporting is infringing your legal rights, please consult an attorney before filing a DMCA Notice. Please be aware that under Title 17 of the United States Code, Section 512, Subsection (f), you may be liable for any damages, including costs and attorneys' fees incurred by us or our users, if you knowingly materially misrepresent that material or activity is infringing.",
  },
  {
    type: "section",
    title: "Take Down Procedure",
    content: [
      "Upon receipt of written notification provided in the manner required by Title 17 of the United States Code, Section 512 or relevant local applicable laws, we will:",
    ],
    list: [
      "Remove or disable access to the material that is alleged to be infringing;",
      "Forward the written notification to the responsible person who posted the allegedly infringing material;",
      "Take reasonable steps to promptly notify that we have removed or disabled access to the material.",
    ],
  },
  {
    type: "paragraph",
    text: "If your notification does not comply with Section 512 of the United States Code, but does identify the allegedly infringing work, we will contact you promptly to assist you in complying with the notice requirements.",
  },
  {
    type: "section",
    title: "DMCA Counter Notification",
    content: [
      "If you receive a notification stating that material you submitted to GamsGo is disabled or removed as a result of a DMCA Notice, and you believe that the material was disabled or removed as a result of mistake or misidentification, then you may send us a DMCA Counter-Notification to the addresses above.",
      "You need to send us a notification that includes the following:",
    ],
    list: [
      "Your physical or electronic signature;",
      "Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled;",
      "A statement, under penalty of perjury, that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification;",
      "Your name, address, telephone number, and e-mail address;",
      "A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which you are located, or if your address is outside of the United States, of any judicial district in which we do business, and that you will accept service of process from the complaining party or his agent.",
    ],
  },
  {
    type: "paragraph",
    text: "Upon receipt of written counter notification provided in the manner required by Title 17 of the United States Code, Section 512 or relevant local applicable laws, we will:",
  },
  {
    type: "list-only",
    list: [
      "Promptly provide the complaining party with a copy of the counter notification;",
      "Inform the complaining party that we will replace the removed material or cease disabling access to it within ten (10) business days;",
      "Replace the removed material or cease disabling access to the material within ten (10) to fourteen (14) business days following receipt of the counter notification, provided our designated agent has not received notice from the complaining party that an action has been filed seeking a court order to restrain User from engaging in infringing activity relating to the material on our network or system.",
    ],
  },
  {
    type: "paragraph",
    text: "GamsGo may elect not to respond to intellectual property infringement notifications that do not substantially comply with all of the foregoing requirements, and GamsGo may elect to remove allegedly infringing material that comes to its attention via notices that do not substantially comply with such requirements.",
  },
  {
    type: "section",
    title: "Repeat Infringers",
    content: [
      "It is the firm policy of the Site to terminate the accounts of repeat infringers, and/or to block such Users from posting additional content, to the extent technically feasible.",
    ],
  },
  {
    type: "section",
    title: "GamsGo Statement",
    content: [
      "GamsGo has long been committed to providing convenient and legal shar services. Meanwhile, we respect and protect the intellectual copyright rights of related parties.",
      "We always resolutely put an end to infringements that harm the legitimate interests of others, and implement this principle in our daily services and operations. A friendly, legal and fair trading environment is guaranteed for global users.",
      "All copyrights, trade marks, service marks belong to the corresponding owners.",
    ],
  },
];

export default function Page() {
  return (
    <section className="pt-28 md:pt-32 lg:pt-32 pb-4">
      <Container>
        {copyrightPolicyData.map((item, index) => {
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
          if (item.type === "list-only") {
            return (
              <ul
                key={index}
                className="list-disc ml-6 mt-3 shadow-lg bordered custom-rounded p-4 md:p-6 bg-white"
              >
                {item.list.map((l, j) => (
                  <li
                    key={j}
                    className="mt-2 !text-[13px] md:!text-sm text-[var(--font-color)]/80"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </Container>
    </section>
  );
}
