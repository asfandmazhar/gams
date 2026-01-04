"use client";

import { useState } from "react";
import Button from "@/components/ui/site/button/Button";
import Input from "@/components/ui/site/Input";
import { Label } from "@/components/ui/site/contact/Label";
import { Textarea } from "@/components/ui/site/contact/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/site/contact/Select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/site/contact/ContactCard";
import Container from "@/components/site/layout/Container";

const supportFlow = [
  {
    value: "registration",
    label: "Registration",
    directForm: false,
    subCategories: [
      {
        value: "registration",
        label: "I can't complete user Registration",
        directForm: false,
        issues: [
          {
            value: "forgot-email",
            label: "I don't receive the registration email",
          },
          {
            value: "account-locked",
            label: "Other issues occured when i process the registration",
          },
        ],
      },
      {
        value: "password",
        label: "Password reset issues",
        directForm: false,
        issues: [
          { value: "reset-email", label: "Password reset email not received" },
          { value: "reset-link", label: "Reset link expired" },
          { value: "new-password", label: "Can't set new password" },
        ],
      },
      {
        value: "email",
        label: "I don't receive the verification code on my email",
        directForm: true,
        issues: [],
      },
    ],
  },
  {
    value: "account",
    label: "Account Issue",
    directForm: false,
    subCategories: [
      {
        value: "userAccount",
        label: "I can't access to my website user account",
        directForm: false,
        issues: [
          { value: "slow-loading", label: "I forget the login Email address" },
          {
            value: "crashes",
            label: "I forget the password, please help me set the new password",
          },
          { value: "timeout", label: "my account has been suspended, why?" },
        ],
      },
      {
        value: "manageAccount",
        label: "I can't manage my account profile",
        directForm: false,
        issues: [
          { value: "new-feature", label: "I can't manage my personal profile" },
          { value: "improve-feature", label: "I can't change my password" },
        ],
      },
      {
        value: "account-stolen",
        label: "My account has been stolen",
        directForm: true,
        issues: [],
      },
      {
        value: "delete-account",
        label: "I want to delete my website user account",
        directForm: true,
        issues: [],
      },
      {
        value: "restore-account",
        label:
          "I mistakenly delete my website user account, please help me restore",
        directForm: true,
        issues: [],
      },
    ],
  },
  {
    value: "billing",
    label: "Buying and Paying issues",
    directForm: false,
    subCategories: [
      {
        value: "payment",
        label: "I have successfully sent payment",
        directForm: false,
        issues: [
          {
            value: "unpaid",
            label: "Paid successfully, but the order shows 'Unpaid'",
          },
          {
            value: "notReceiveProduct",
            label: "Paid successfully, but i haven't receive the product",
          },
          {
            value: "sameOrderTwice",
            label:
              "I paid for the same order twice by mistake, please help me check",
          },
        ],
      },
      {
        value: "failedPayment",
        label: "I failed send payment",
        directForm: false,
        issues: [
          {
            value: "payment",
            label: "I met the website bugs when I trying to send the payment",
          },
          {
            value: "paymentMethod",
            label: "I don't find the payment method I can use",
          },
        ],
      },
      {
        value: "unauthorized",
        label: "I want to report an unauthorized payment",
        directForm: false,
        issues: [
          {
            value: "bugs",
            label: "I meet the website bugs when i trying to send the payment",
          },
          {
            value: "paymentMethod",
            label: "I don't find the payment method I can use",
          },
        ],
      },
      {
        value: "orderIssue",
        label: "Why my order says 'Issues?'",
        directForm: true,
        issues: [],
      },
      {
        value: "purchasedOrder",
        label:
          "Please help me resolve the after-sales problem of my recently purchased order'",
        directForm: true,
        issues: [],
      },
    ],
  },
  {
    value: "general",
    label: "Refund issue",
    directForm: false,
    subCategories: [
      {
        value: "paymentRefunded",
        label: "I don't receive the refunded, but order shows 'Refunded'",
        directForm: true,
        issues: [],
      },
      {
        value: "cancel",
        label: "I have requested refund, but I want to cancel the request",
        directForm: true,
        issues: [],
      },
      {
        value: "takeTime",
        label: "How long does it take to refund?",
        directForm: false,
        issues: [],
      },
    ],
  },
  {
    value: "another",
    label: "I want to report another problem",
    directForm: true,
    subCategories: [],
  },
];

export default function ContactPage() {
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    description: "",
  });

  const selectedStep1 = supportFlow.find((c) => c.value === step1);
  const selectedStep2 = selectedStep1?.subCategories.find(
    (s) => s.value === step2
  );

  const handleStep1Change = (value) => {
    setStep1(value);
    setStep2("");
    setStep3("");
  };

  const handleStep2Change = (value) => {
    setStep2(value);
    setStep3("");
  };

  const handleStep3Change = (value) => {
    setStep3(value);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      category: step1,
      subCategory: step2,
      issue: step3,
      ...formData,
    });

    alert("Form submitted successfully!");
  };

  const isFormComplete =
    (selectedStep1?.directForm && step1) ||
    (selectedStep2?.directForm && step1 && step2) ||
    (step1 && step2 && step3);

  return (
    <div className="min-h-screen md:mx-auto pt-28 md:pt-32 lg:pt-42">
      <Container>
        <div className="max-w-2xl mx-auto mb-20">
          <div className="text-center mb-8">
            <h1>Contact Support</h1>
            <p>
              Please answer some questions to help us send your messages to the
              related department.
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl text-gray-800">
                Support Request
              </CardTitle>
              <CardDescription>
                Fill in the details step by step to get the best assistance
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Category Selection */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium">
                  1. Select Category
                </Label>
                <Select onValueChange={handleStep1Change} value={step1}>
                  <SelectTrigger className="w-full mt-2 bordered">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {supportFlow.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Step 2: Sub-category Selection */}
              {step1 && !selectedStep1?.directForm && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                  <Label htmlFor="subcategory" className="text-sm">
                    2. Select Sub-category
                  </Label>
                  <Select onValueChange={handleStep2Change} value={step2}>
                    <SelectTrigger className="w-full mt-2 bordered">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedStep1?.subCategories.map((sub) => (
                        <SelectItem key={sub.value} value={sub.value}>
                          {sub.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Step 3: Specific Issue Selection */}
              {step2 && !selectedStep2?.directForm && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                  <Label htmlFor="issue" className="text-sm">
                    3. Specific Issue
                  </Label>
                  <Select onValueChange={handleStep3Change} value={step3}>
                    <SelectTrigger className="w-full mt-2 bordered">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedStep2?.issues.map((issue) => (
                        <SelectItem key={issue.value} value={issue.value}>
                          {issue.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Main Form - Appears after all 3 steps are complete */}
              {isFormComplete && (
                <div className="animate-in slide-in-from-top-4 duration-500 border-t pt-8 mt-8">
                  <h3 className="mb-6">Submit your question</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type={"email"}
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        inputClass="w-full placeholder:!text-xs md:placeholder:!text-sm md:!text-xs md:!text-sm -mx-1"
                        className="!py-3 md:!py-4 !px-4 !rounded"
                        iconSize="w-4 h-4"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-base">
                        Title <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="title"
                        type="text"
                        placeholder="Brief description of your issue"
                        value={formData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                        required
                        inputClass="w-full placeholder:!text-xs md:placeholder:!text-sm md:!text-xs md:!text-sm -mx-1"
                        className="!py-3 md:!py-4 !px-4 !rounded"
                        iconSize="w-4 h-4"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-base">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Please provide detailed information about your issue..."
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        rows={4}
                        className="w-full resize-none bordered mt-2 bg-[var(--muted-color)]/30 p-4 placeholder:!text-xs md:placeholder:!text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="screenshot" className="text-base">
                        Upload Screenshot
                      </Label>
                      <input
                        id="screenshot"
                        type="file"
                        accept=".jpg,.jpeg,.png,.gif"
                        onChange={(e) =>
                          handleInputChange("screenshot", e.target.files[0])
                        }
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0 file:text-sm file:font-semibold
                     file:bg-gray-100 hover:file:bg-gray-200 mt-2"
                      />
                      <p className="!text-xs">
                        Support ext: jpg, jpeg, png, gif
                      </p>
                    </div>

                    <Button type="submit" buttonName="Submit" />
                  </form>
                </div>
              )}

              {/* Progress Indicator */}
              <div className="flex items-center justify-center space-x-2 pt-4">
                <div
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    step1 ? "bg-[var(--navigation-color)]" : "bg-gray-300"
                  }`}
                />
                <div
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    step2 ? "bg-[var(--navigation-color)]" : "bg-gray-300"
                  }`}
                />
                <div
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    step3 ? "bg-[var(--navigation-color)]" : "bg-gray-300"
                  }`}
                />
                <div
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    isFormComplete
                      ? "bg-[var(--navigation-color)]"
                      : "bg-gray-300"
                  }`}
                />
              </div>

              <p className="text-center text-sm text-gray-500 mt-2">
                {!step1 && "Step 1 of 4: Select category"}
                {step1 && !step2 && "Step 2 of 4: Select sub-category"}
                {step2 && !step3 && "Step 3 of 4: Select specific issue"}
                {step3 && "Step 4 of 4: Fill in your details"}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
