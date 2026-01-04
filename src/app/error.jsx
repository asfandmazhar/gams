"use client";

import React from "react";
import { ErrorIcon } from "@/components/icons/icons";
import Container from "@/components/admin/layout/Container";
import Button from "@/components/ui/site/button/Button";
import BorderButton from "@/components/ui/site/button/BorderButton";

export default function ErrorPage({
  title = "Oops! Something went wrong",
  message = "We encountered an unexpected error. Our team has been notified and is working to fix this issue.",
  errorCode = "ERROR_500",
}) {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="text-center">
        <Container>
          {/* Error Icon with Animation */}
          <div className="mb-8 relative">
            <div className="error-pulse-container">
              <div className="error-pulse-ring"></div>
              <div className="error-pulse-ring delay-1"></div>
              <div className="error-pulse-ring delay-2"></div>
              <ErrorIcon className="w-24 h-24 fill-[var(--error-color)] mx-auto relative z-10" />
            </div>
          </div>

          {/* Error Content */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-red-100 text-[var(--error-color)] text-sm font-medium rounded-full mb-4">
                {errorCode}
              </span>
            </div>
            <h1 className="mb-4 error-title">
              {title}
            </h1>
            <p className="mb-8 max-w-2xl mx-auto leading-relaxed">
              {message}
            </p>
          </div>

          {/* Animated Error Illustration */}
          <div className="mb-12">
            <div className="error-illustration">
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
                <div className="floating-element element-4"></div>
              </div>
              <div className="error-wave">
                <svg viewBox="0 0 400 100" className="w-full h-20">
                  <path
                    d="M0,50 Q100,20 200,50 T400,50 V100 H0 Z"
                    fill="url(#errorGradient)"
                    className="error-wave-path"
                  />
                  <defs>
                    <linearGradient
                      id="errorGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                      <stop
                        offset="50%"
                        stopColor="#f97316"
                        stopOpacity="0.2"
                      />
                      <stop
                        offset="100%"
                        stopColor="#eab308"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              buttonName="Try Again"
              className="flex items-center gap-2 !w-fit"
              onClick={handleRefresh}
            />
            <BorderButton
              buttonName="Go Back"
              className="flex items-center gap-2 border-btn whitespace-nowrap !rounded-full"
              onClick={handleGoBack}
            />
            <BorderButton
              buttonName="Home"
              className="flex items-center gap-2 border-btn whitespace-nowrap !rounded-full"
              href="/"
            />
          </div>

          {/* Help Text */}
          <div className="text-center">
            <p className="mb-2">
              If this problem persists, please contact our support team.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
