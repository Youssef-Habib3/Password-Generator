"use client";

import { FaRegCopy } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const copyButton = useRef(null);

  let upperCase = "ABCDEFGHIJKLMNOPJRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "~!@#$%^&*(){}[]+=-_/\\<>";

  const handlePasswordGenerate = () => {
    let password = "";

    const allChars = upperCase + lowerCase + numbers + symbols;

    while (12 > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    setInputValue(password);
  };

  const handleCopyButton = () => {
    copyButton.current.select();
    document.execCommand("copy");
  };

  return (
    <>
      <main className="my-4 w-96 md:w-[500px] relative">
        <input
          type="text"
          placeholder="Password"
          ref={copyButton}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full rounded-md text-2xl px-4 py-2 pr-11 outline-none font-bold"
        />
        <div
          onClick={handleCopyButton}
          className="absolute top-2/4 right-1 -translate-y-2/4 text-3xl cursor-pointer text-green-700"
        >
          <FaRegCopy />
        </div>
      </main>

      <footer className="mr-auto">
        <Button variant="default" onClick={handlePasswordGenerate}>
          <BsFillLightningChargeFill /> Generate a password
        </Button>

        <div className="border-t-4 border-green-700 mt-5 pt-3 flex justify-center items-center">
          <HoverCard>
            <HoverCardTrigger>
              <Link
                target="_blank"
                href="https://portfolio-youssef-habib3.vercel.app/"
                className="text-4xl text-white"
              >
                <BsGithub />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent>This is my web site, Visit it?</HoverCardContent>
          </HoverCard>
        </div>
      </footer>
    </>
  );
};

export default Main;
