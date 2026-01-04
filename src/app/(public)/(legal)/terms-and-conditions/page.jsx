import Container from "@/components/site/layout/Container";

export const metadata = {
  title: "Terms and Conditions | My Website",
  description: "Learn more about our company and mission.",
};

// Terms & Conditions Data
const termsAndConditionsData = [
  {
    type: "heading",
    text: "Terms and Conditions of Use",
  },
  {
    type: "paragraph",
    text: "Terms and conditions",
  },
  {
    type: "paragraph",
    text: "Before you use the platform, please read the following terms and conditions carefully. By using the platform, you agree to and be bound by these terms and conditions. If you do not agree to any of these terms and conditions, please do not use the platform.",
  },

  // 1. General
  {
    type: "section",
    title: "1. General",
    content: [
      '1.1 This agreement and all attached or mentioned schedules and appendices (if any) ("Agreement") are an agreement between you and GamsGo.com ("GamsGo", "us" or "our").',
      "1.2 This agreement shall govern, among other things:",
    ],
    list: [
      "(a) Provide GamsGo service (see below for definition);",
      "(b) Your use of the platform (see below for definition).",
    ],
  },
  {
    type: "section",
    title: "1.3 Eligibility",
    content: ["The service is intended and can only be used by:"],
    list: [
      "(a) Individuals who are over 18 years of age and can enter into a legally binding contract under applicable law；",
      "(b) Individuals under the age of 18 and under the consent and direct supervision of their parents or legal guardians. Any individual under the age of 18 shall be deemed to have obtained the approval of his legal guardian or parent for all transactions conducted under this agreement, and the legal guardian or parent shall be responsible for any and all activities carried out by the individual under this agreement.",
    ],
  },

  // 2. Definitions and Interpretation
  {
    type: "section",
    title: "2. Definition and Interpretation",
    content: [
      "2.1 In these terms, unless the context requires otherwise, the following words have the following meanings:",
      "• Account refers to the account created and used by you to access or use the platform;",
      "• Buyer refers to the buyer of any goods and/or services;",
      "• Goods and/or services refer to digital items, goods, and/or services that are displayed, listed, and/or provided on the platform；",
      "• GamsGo Service: Pertains to the services and functions provided by GamsGo on or through the platform from time to time;",
      "• Information refers to any information, details, content, size, data, map, location, photos, text, description, specifications, audio or video clips, graphics and/or other materials;",
      "• Intellectual property refers to patents, registered designs, designs, copyrights, names, marks, trade names, trademarks, service marks and logos and all other knowledge, industry and/or ownership;",
      "• A sales contract refers to an agreement reached on the platform for the sale of any goods and/or services;",
      "• Personal data should have the meaning specified in the privacy policy;",
      "• Privacy policy refers to the policies governing the processing of personal data published by GamsGo on the platform;",
      "• Platform refers to the online platform (website, mobile site or mobile application) developed and/or operated by GamsGo;",
      "• The registration process refers to the registration process established by GamsGo for you to register and open an account with GamsGo;",
      "• Representative means employees, employees, officials, agents, contractors, workers, personnel and/or representatives of related parties;",
      "• You/Your: Refers to all users of the platform, primarily but not limited to buyers.",
      "2.2 In this agreement, unless the context requires otherwise:",
    ],
    list: [
      "(a) Indicates that the singular includes the plural, and vice versa;",
      "(b) The term indicating a natural person includes a corporate body and an unincorporated body;",
      "(c) Reference to any law, legislation or any provision of any law or legislation shall include all relevant provisions, statutory requirements and documents promulgated in accordance with that law, legislation or provision, as well as any changes, amendments or changes to any of the foregoing. Re-enactment;",
      "(d) The title of this agreement is inserted for convenience only, and should not affect the interpretation or interpretation of this agreement;",
      "(e) References to any party to this agreement or any other agreement or instrument shall include that party's successor and permitted assignee;",
      "(f) Any interpretation or rules of interpretation shall not apply to the disadvantage or damage of the party that controls or is responsible for the preparation of this agreement;",
      "(g) Any word following the term including, including or any similar phrase shall be interpreted as descriptive and shall not limit the generality of the relevant common words.",
    ],
  },

  // 3. Enter the platform
  {
    type: "section",
    title: "3. Enter the Platform",
    content: [
      "3.1 If you wish to access the platform and GamsGo services, you should create an account in GamsGo according to the registration process. After successful registration, you can access the platform and GamsGo services by logging into your account. GamsGo has the right to conduct background checks on you, and has the right to decide on its own to refuse to grant you access to the platform and GamsGo services or any part of it. During the registration process, you may be asked to provide additional verification or information.",
      "3.2 You shall be solely responsible for the confidentiality and protection of the username and password of your account, and shall immediately notify GamsGo of any unauthorized access to your account. Any instruction, notice or confirmation GamsGo receives from your account shall be deemed to have been issued by you, although such notice or confirmation may have been issued by a third party, whether authorized or not, and you shall be bound by such instruction, notice or confirm. GamsGo is not responsible for actions taken in accordance with instructions, notices or confirmations sent through your account. GamsGo is not obliged to investigate the authenticity or authority of the person sending/executing the instruction, notice or confirmation, or to verify the integrity of such instruction, notice or confirmation",
      "3.3 You should closely monitor all activities and transactions through your account, and you should take all steps and measures to check and verify the transaction history of your account. You should notify GamsGo immediately:",
    ],
    list: [
      "(a) Any unusual activity or transaction related to your account, or any activity or transaction that is not accurately recorded in your account;",
      "(b) When receiving any incomplete, garbled or inaccurate data or information from GamsGo;",
      "(c) After receiving any data or information that is not suitable for you, you may not use or disclose any such data or information without GamsGo's written consent.",
    ],
  },
  {
    type: "section",
    title: "3.4–3.5 Account Limits & Third-Party Login",
    content: [
      "3.4 Unless GamsGo expressly agrees, each person is limited to one account. Do not create any accounts on behalf of or to impersonate others. If GamsGo discovers that such a fraudulent account has been created, GamsGo reserves the right to immediately suspend the account and reserve the right to take any further remedial measures, including but not limited to notifying relevant authorities, GamsGo does not assume any responsibility.",
      "3.5 GamsGo provides a variety of third-party account login functions. Users are aware that this function is provided and managed solely by the third-party service provider. If it is restricted due to policy or technical reasons, GamsGo has the right to reasonably adjust the login method and may require users to bind their email or mobile phone as alternative credentials.",
    ],
  },

  // 4. Use of Platform
  {
    type: "section",
    title: "4. Use of Platform / GamsGo Service",
    content: [
      "4.1 Taking into account that you agree to the terms and conditions of this agreement, GamsGo grants you a non-exclusive and non-transferable right to access and use the platform and GamsGo services only within the scope necessary for this agreement. The platform and/or GamsGo services must not be commercialized in any way.",
      "4.2 The platform, GamsGo service and/or all information contained on the platform and/or GamsGo service or provided through the platform and/or GamsGo service shall be collectively referred to as the “GamsGo platform/service”. Unless otherwise provided in this agreement or with GamsGo’s prior written consent, you may not and may not try, either by yourself or by allowing any third party:",
    ],
    list: [
      "(a) Copy, distribute, recreate, and/or propagate the GamsGo platform/service, unless incidental to normal use or for backup/operational safety;",
      "(b) Rent, lease, sublicense, lend, translate, merge, adapt, change or modify the GamsGo platform/service;",
      "(c) Make changes or modifications to all or any part of the GamsGo platform/service, or combine/include it with any other program;",
      "(d) Disassemble, decompile, reverse engineer or create derivative works based on all or any part of the GamsGo platform/service;",
      "(e) Provide all or part of the basic software (including target and source code) of the platform to anyone;",
      "(f) Use in any illegal/unauthorized way, or for fraud or malicious behavior;",
      "(g) Scrape or decipher transmissions to/from servers running any GamsGo service;",
      "(h) Access any data or information that is not suitable for you;",
      "(i) Interfere with normal operation or transmit/distribute malicious code or harmful data;",
      "(j) Misuse, abuse or invade any aspect of the service, or damage software/system integrity;",
      "(l) Use in a way that (i) damages/overburdens/endangers systems/security; or (ii) interferes with other users’ access/enjoyment.",
    ],
  },
  {
    type: "section",
    title: "4.3–4.6 Additional Use Terms",
    content: [
      "4.3 After registering with GamsGo, you will automatically join the GamsGo virtual family.",
      "4.4 To ensure a quality experience for all users of the account, please ensure that your logged-in devices comply with the following guidelines:",
    ],
    list: [
      "(a) No more than 1 device logged in at any time.",
      "(b) Only one device streaming at a time.",
    ],
  },
  {
    type: "section",
    title: "Subscription Access Changes & Service Continuity",
    content: [
      "4.5 As a result of official policy adjustments by our subscription providers, some subscription types will no longer allow account access by multiple users. We apologize for any inconvenience this may cause. Nevertheless, we will continue to offer independent subscription. Thank you for your understanding and support.",
      "4.6 After the user pays, the service will continue to be effective during the validity period. If there is force majeure or third-party restrictions, GamsGo can reasonably provide alternative solutions for performance, which will not be considered a breach of contract.",
    ],
  },

  // 5. Personal Information
  {
    type: "section",
    title: "5. Personal Information",
    content: [
      "5.1 All personal data collected by GamsGo will be processed by GamsGo in accordance with the privacy policy published on the platform.",
      "5.2 If any data or information provided by GamsGo to you and/or collected or processed by you on behalf of GamsGo contains personal data in accordance with this agreement, you agree to: (i) comply with the required privacy policy, and shall not cause GamsGo to violate its privacy policy (as a “data user”); (ii) comply with GamsGo’s published personal data protection policy from time to time; (iii) at GamsGo’s reasonable request, give GamsGo access to any personal data; and (iv) if you find a violation or possible violation of your obligations in the processing of personal data, immediately notify GamsGo. This clause survives termination.",
    ],
  },

  // 6. Confidentiality
  {
    type: "section",
    title: "6. Confidentiality",
    content: [
      '6.1 "Confidential information" refers to all information of any type provided to the recipient by the disclosing party or on behalf of the disclosing party, whether in machine-readable or visually readable form, oral or other forms, and regardless of whether it is marked as "confidential", whether before or after the beginning of the term of this agreement, used for purposes related to this agreement.',
      '6.2 "Confidential information" shall not include information already possessed without duty of confidence; independently developed; public other than by breach; or rightfully obtained from a third party without duty.',
      "6.3 Unless otherwise provided, the recipient agrees not to disclose confidential information except as required by law/stock exchange/court; as allowed here; to representatives/advisors with a need-to-know; or with prior written approval.",
      "6.4 If disclosure is legally required, promptly notify GamsGo to allow protective measures; disclose only minimum required; and cooperate fully.",
      "6.5 Use confidential information only for the purpose of this agreement.",
      "6.6 This clause survives termination or expiry.",
    ],
  },

  // 7. Consumer Protection
  {
    type: "section",
    title: "7. Consumer Protection",
    content: [
      "7.1 If the Consumer Protection Act of 1999 applies and you are a “consumer”, this agreement limits remedies only to the maximum extent permitted by the Act and does not exclude GamsGo’s liability for negligence or breach without sufficient reason.",
    ],
  },

  // 8. Warranty & Disclaimer
  {
    type: "section",
    title: "8. Warranty, Availability and Disclaimer",
    content: [
      "8.1 GamsGo guarantees that GamsGo services will be provided with reasonable care and skill.",
      "8.2 Information provided may originate from third parties; while GamsGo will use reasonable efforts to relay it faithfully, no warranty is made as to accuracy, completeness, originality, currency, or error-free status.",
      "8.3 GamsGo does not warrant that:",
    ],
    list: [
      "(a) Functions will meet your requirements;",
      "(b) Operation will be uninterrupted or error-free;",
      "(c) Defects will be corrected;",
      "(d) The platform is free of viruses or other harmful threats—implement your own protections.",
    ],
  },
  {
    type: "section",
    title: "8.4 Acknowledgements",
    content: [
      "(a) Opinions/suggestions are subjective; acting on them is at your own risk.",
      "(b) Transactions rely on telecom/data networks; delays may occur.",
      "(c) Maintenance/outages or factors beyond control may make services unavailable; no liability for such unavailability.",
    ],
  },

  // 9. Limitation of Liability
  {
    type: "section",
    title: "9. Limitation of Liability",
    content: [
      "9.1 To the maximum extent permitted by law:",
      "(a) The platform/services/information are provided “as is” and “as available”, and all warranties are disclaimed unless expressly stated here;",
      "(b) GamsGo is not liable for any costs/losses/damages/claims arising from information provided via the platform;",
      "(c) GamsGo will not be liable for indirect, incidental, punitive, consequential, or special losses (including profit, goodwill, production, or income), whether foreseeable or notified;",
      "In all cases, liability shall not exceed SGD 30 or the fees paid by you for the disputed service, whichever is higher.",
    ],
  },

  // 10. Indemnity
  {
    type: "section",
    title: "10. Compensation (Indemnity)",
    content: [
      "10.1 You agree to defend, indemnify and hold harmless GamsGo, its affiliates and officers/employees/agents against all losses, claims, damages, penalties, liabilities, costs and expenses (including legal fees) arising from your negligence, omissions and/or breach. Applies whether or not proceedings are instituted and regardless of settlement mode.",
    ],
  },

  // 11. Force Majeure
  {
    type: "section",
    title: "11. Force Majeure",
    content: [
      "11.1 GamsGo shall not be liable for delay/failure caused by events beyond reasonable control, including:",
    ],
    list: [
      "(a) Natural disasters or accidents;",
      "(b) War, rebellion, civil strife, expropriation;",
      "(c) Governmental actions/restrictions;",
      "(d) Strikes/lockouts or industrial disputes;",
      "(e) Difficulty obtaining materials/labor/fuel/parts/machinery;",
      "(f) Telecom/transport/power/system failures affecting services;",
      "(g) Policy adjustments, restrictions or terminations by third-party providers (e.g., logins/APIs) leading to interruptions.",
    ],
  },

  // 12. Rights & Suspension
  {
    type: "section",
    title: "12. GamsGo Rights and Suspension",
    content: [
      "12.1 Without prejudice to other rights, GamsGo may immediately, without notice:",
    ],
    list: [
      "(a) Suspend/stop your access;",
      "(b) Delete information you submit;",
      "(c) Suspend/restrict activities or transactions on your account;",
      "(d) Withhold/retain/confiscate monies due to you;",
      "In events where: (a) your performance of any sales contract is non-conforming; (b) your use interferes with others; (c) you breach or are suspected to breach this agreement.",
    ],
  },

  // 13. Termination
  {
    type: "section",
    title: "13. Termination",
    content: [
      "13.1 GamsGo may terminate immediately by written notice if you breach and fail to cure within thirty (30) days.",
      "13.2 Upon termination: (a) all rights granted to you end; (b) you must cease all activities; (c) destroy/return all GamsGo confidential information and certify compliance.",
    ],
  },

  // 14. Changes
  {
    type: "section",
    title: "14. Changes",
    content: [
      "14.1 GamsGo may add/delete/amend this agreement or impose new conditions at any time, effective upon notice (via platform, email, mail, or other means). Continued use constitutes acceptance.",
      "14.2 If you do not agree, notify GamsGo; unless agreed otherwise, the agreement is deemed terminated upon your notice.",
      "14.3 GamsGo may change/discontinue any aspect or feature at any time.",
      "14.4 Your modifications are invalid unless agreed in writing by both parties.",
    ],
  },

  // 15. Notification
  {
    type: "section",
    title: "15. Notification",
    content: [
      "15.1 Notices are delivered to the address/email/fax you provide via the platform and are deemed delivered based on stated rules (in-person, registered mail/courier, fax with confirmation, or email timestamps).",
      "15.2 Notices to you may be by platform posting, email, newspaper, SMS to your registered number, or email to support@gamsgo.com.",
      "15.3 Deemed delivery timelines apply similar to clause 15.1 for each medium.",
      "15.4 Email notices do not apply to certain legal processes unless otherwise permitted.",
    ],
  },

  // 16–18
  {
    type: "section",
    title: "16. Entire Agreement",
    content: [
      "16.1 This agreement (with referenced documents) is the entire agreement and supersedes prior understandings, except as expressly provided herein.",
    ],
  },
  {
    type: "section",
    title: "17. Assignment, Replacement, Commission and Subcontracting",
    content: [
      "17.1 You may not assign/transfer/subcontract without prior written consent. GamsGo may assign/transfer/subcontract to any affiliate.",
    ],
  },
  {
    type: "section",
    title: "18. Payment Rules",
    content: ["18.1 One-Off Payment Rules:"],
    list: [
      "(a) Purchase Page: choose subscription duration (3/6/12 months).",
      "(b) Service Validity: service lasts for the paid duration; auto-ceases when period ends.",
      "(c) Checkout Page: see order total and choose one-time payment method.",
      "(d) Payment Methods: credit/debit/online payment methods.",
      "(e) Confirmation Email: includes order details, payment amount, duration, etc.",
      "(f) Renewal Reminder: email 3 days before expiry with options to continue.",
    ],
  },
  {
    type: "section",
    title: "18.2 Recurring Billing Rules",
    content: ["Some services operate on a monthly billing cycle."],
    list: [
      "(a) Billing Cycle: same day each month as initial subscription.",
      "(b) Billing Notification: email 3 days prior with details and unsubscribe link; cancel anytime in account.",
      "(c) Billing Amount: normal subscription price; 30-day notice of changes.",
      "(d) Payment Method: link a valid method; ensure sufficient funds; CVV not stored.",
      "(f) Overdue Payment: 3 retry attempts across 3 days; suspension after failures.",
      "(f) Cancellation: cancel anytime; at least 24 hours before next billing to avoid charge.",
      "(g) Other Terms: fees exclude taxes; rules may change with prior notice.",
    ],
  },

  // 19–24
  {
    type: "section",
    title: "19. No Exemption",
    content: [
      "19.1 Failure or delay to exercise rights is not a waiver; waivers must be in writing.",
    ],
  },
  {
    type: "section",
    title: "20. Successors and Assigns",
    content: [
      "20.1 This agreement binds both parties and their permitted assignees/successors.",
    ],
  },
  {
    type: "section",
    title: "21. Severability",
    content: [
      "21.1 If any provision is illegal/invalid/unenforceable, the remainder stays effective; provisions will be modified to the extent necessary to be legal and enforceable.",
    ],
  },
  {
    type: "section",
    title: "22. No Partnership / Agency",
    content: [
      "22.1 Nothing creates a joint venture/partnership or grants authority to bind the other party.",
    ],
  },
  {
    type: "section",
    title: "23. Applicable Law",
    content: [
      "23.1 These TERMS AND CONDITIONS and any separate agreements for Services shall be governed by and construed in accordance with the laws of UNITED KINGDOM.",
    ],
  },
  {
    type: "section",
    title: "24. Survival",
    content: [
      "24.1 Provisions that by their nature should survive termination or expiration shall do so.",
    ],
  },

  // Appendix A (Pay)
  {
    type: "section",
    title: "Appendix A (Pay) — Buyer Pays",
    content: [
      "The relevant buyer shall pay the amount of any sales contract (“sale contract amount”) through the payment gateway available on the platform in accordance with any terms and conditions that may be imposed by the relevant payment gateway service provider.",
      "General:",
      "1. You have no right to offset any payment due to GamsGo against any claim made by you or payment due to you.",
      "2. If GamsGo has reason to suspect that you are engaged in any fraud or other similar activities, GamsGo has the right to cancel any payment request you have made.",
      "Limitation of Liability/Disclaimer:",
      'This website and affiliate network marketing plan are provided on an "as is" and "available" basis without warranties (express or implied) including satisfactory quality, fitness, non-infringement, compatibility, safety, accuracy or completeness.',
      "To the maximum extent permitted by law, we are not liable for: (1) any economic loss (including income, profit, contract, business or expected savings); (2) any loss of goodwill or reputation; (3) any special/indirect/consequential loss.",
      "Compensate and remain harmless:",
      "You agree to protect GamsGo (and our officers/directors/members/employees/agents/affiliates) from any claims, damages, losses, costs or expenses (including reasonable legal fees) arising from your use of affiliate programs or breach of these terms, and you accept responsibility for violations by anyone using your account/device/network.",
      "Operator:",
      "This website is operated by GAMESGO LIMITED. Registered address: First Floor, 85 Great Portland Street, London, W1W 7LT, United Kingdom.",
    ],
  },
];

export default function Page() {
  return (
    <section className="pt-28 md:pt-32 lg:pt-32 pb-4">
      <Container>
        {termsAndConditionsData.map((item, index) => {
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
