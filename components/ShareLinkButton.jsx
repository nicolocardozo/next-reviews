"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [clicked, setCliked] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setCliked(true);
    setTimeout(() => setCliked(false), 3000);
  }

  return (
    <button
      className="border px-2 py-1 text-slate-500 rounded-lg text-sm hover:bg-orange-200 hover:text-slate-700 flex gap-1 items-center"
      onClick={handleClick}
    >
      <LinkIcon className="w-4" />
      {clicked ? "Link copied!" : "Share Link"}
    </button>
  );
}
