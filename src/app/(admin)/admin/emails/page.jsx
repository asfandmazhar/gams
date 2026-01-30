"use client";

import React, { useEffect, useState } from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Container from "@/components/admin/layout/Container";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function page() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmails = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/user/get/get-all-emails");
      if (!res?.data?.success) {
        return toast.error(res.message || "Failed to fetch emails");
      }

      setEmails(res?.data?.usersEmail);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const copyAllEmails = async () => {
    if (!emails.length) {
      toast.error("No emails to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(emails.join(", "));
      toast.success("All emails copied");
    } catch {
      toast.error("Copy failed");
    }
  };

  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <div className="flex justify-between items-center">
            <h4 className="!text-[var(--navigation-font-color)] my-8">
              all user email
            </h4>

            <button
              onClick={copyAllEmails}
              className="glass-btn capitalize text-sm md:text-base !px-6 !py-4"
            >
              Copy all emails
            </button>
          </div>

          <div className="bg-[var(--admin-bg-gray)] w-full rounded-xl my-6 h-96">
            <textarea
              className="bg-transparent p-4 w-full h-full"
              placeholder={loading ? "Loading emails..." : "Email not found!"}
              value={emails.join(", ")}
              readOnly
            />
          </div>
        </section>
      </Container>
    </AnimationWrapper>
  );
}
