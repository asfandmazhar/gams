import React from "react";
import Container from "@/components/admin/layout/Container";
import Button from "@/components/ui/site/button/Button";
import BorderButton from "@/components/ui/site/button/BorderButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black/90 to-black flex items-center justify-center p-4">
      <div className="text-center">
        <Container>
          {/* 404 Text */}
          <div className="mb-8">
            <h1 className="!text-7xl md:!text-9xl !pt-20 !h-32 md:!h-42 !font-bold gradient-text mb-4">
              404
            </h1>
            <h2 className="!text-white mb-2">Page Not Found</h2>
            <p className="!text-gray-400 text-lg mb-8 max-w-md mx-auto !mt-4">
              The page you're looking for seems to have wandered off into the
              digital void.
            </p>
          </div>

          {/* Animated SVG Loaders */}
          <div className="flex justify-center items-center mb-12">
            {/* Circle Loader */}
            <div className="svg-loader w-11 h-11 relative inline-block mx-4">
              <svg viewBox="0 0 80 80">
                <circle r="32" cy="40" cx="40" />
              </svg>
            </div>

            {/* Triangle Loader */}
            <div className="svg-loader w-11 h-11 relative inline-block mx-4 triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72" />
              </svg>
            </div>

            {/* Rectangle Loader */}
            <div className="svg-loader w-11 h-11 relative inline-block mx-4">
              <svg viewBox="0 0 80 80">
                <rect height="64" width="64" y="8" x="8" />
              </svg>
            </div>
          </div>

          {/* Footer Text */}
          <p className="!text-gray-400 mt-12 text-sm">
            Don't worry, even the best explorers get lost sometimes.
          </p>

          <div className="flex items-center justify-center space-x-4 mt-6">
            <Button buttonName={"Go Home"} className={"!w-fit"} href={"/"} />
            <BorderButton
              buttonName={"Try Again"}
              className={"border-btn !rounded-full"}
              href={"/"}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
