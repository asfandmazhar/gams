"use client";

import Link from "next/link";
import {
  Subscription,
  Support,
  World,
  Order,
  Cross,
  Logout,
} from "@/components/icons/icons";
import Button from "../button/Button";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function MobileMenu({ onLanguageClick, onClose }) {
  const { isLoggedIn, setIsLoggedIn, loading } = useAuth();
  if (loading || isLoggedIn === null) return null;
  const router = useRouter();

  const logOut = async () => {
    onClose();
    try {
      const res = await axios.get("/api/auth/logout");
      if (res?.data?.success) {
        setIsLoggedIn(false);
        toast.success(res.data.message);
        router.push("/");
      } else {
        toast.error(res?.data?.message || "Logout failed");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex md:hidden items-center justify-between p-4">
        <div className="w-full max-w-[200px]">
          <Link href={"/"}>
            <h2 className="font-bold text-xl !text-[var(--font-color)]">
              Games
            </h2>
          </Link>
        </div>
        <div onClick={onClose}>
          <Cross className={"w-8 h-8 cursor-pointer"} />
        </div>
      </div>
      <div className="text-center space-y-4 p-4 border-bottom">
        <h4 className="text-[var(--font-color)]">Welcome to GamsGo!</h4>
        {isLoggedIn ? (
          <>
            <Button buttonName="Profile" href={"/profile"} />
            <ul className="flex flex-col py-2 border-bottom">
              <Link href={"/subscription"} onClick={onClose}>
                <li className="Profile-li-link">
                  <Subscription className={"w-5 h-5"} />
                  My Subscription
                </li>
              </Link>
              <Link href={"/contact"} onClick={onClose}>
                <li className="Profile-li-link">
                  <Support className={"w-5 h-5"} />
                  Contact Support
                </li>
              </Link>
              <Link href={"/subscription"} onClick={onClose}>
                <li className="Profile-li-link">
                  <Order className={"w-5 h-5"} />
                  Order History
                </li>
              </Link>
              <Link href={"/"} onClick={onClose}>
                <li className="Profile-li-link" onClick={onLanguageClick}>
                  <World className={"w-5 h-5"} />
                  Choose Language
                </li>
              </Link>
            </ul>
            <div>
              <button onClick={logOut} className="w-full cursor-pointer">
                <li className="flex gap-3 px-4 rounded-md py-3 hover:bg-red-400 bg-red-500 text-white">
                  <Logout className={"w-5 h-5"} />
                  Log out
                </li>
              </button>
            </div>
          </>
        ) : (
          <>
            <Button buttonName="Login" href={"/auth/login"} />
            <p className="!text-sm">
              Don’t have an account?
              <span className="text-[var(--error-color)] cursor-pointer ml-1">
                <Link href={"/auth/login"}>Sign up</Link>
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
