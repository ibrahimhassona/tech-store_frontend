"use client";

import { useEffect, useState } from "react";
// This is custom component to make url header
const UrlDirection = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let curentUrl = window.location.pathname;
      setUrl(curentUrl.split("/").join(" > "));
    }
  }, []);
  return (
    <span className="container w-fit capitalize underline font-semibold text-sm ml-10 mt-5 block">
      {url !== " > " ? `Home${url}` : " "}
    </span>
  );
};

export default UrlDirection;
