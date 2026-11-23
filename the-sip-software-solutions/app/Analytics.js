"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Set this in the build environment when a GA4 property exists.
// Leave it unset until then: no analytics script is requested.
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const ENABLED = /^G-[A-Za-z0-9]+$/.test(MEASUREMENT_ID);

let configured = false;
let libraryScheduled = false;
let libraryLoaded = false;

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

function loadLibrary() {
  if (!ENABLED || libraryLoaded || typeof document === "undefined") return;
  libraryLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.body.appendChild(script);
}

function scheduleLibrary() {
  if (!ENABLED || libraryScheduled || typeof window === "undefined") return;
  libraryScheduled = true;
  const onInteract = () => loadLibrary();
  window.addEventListener("pointerdown", onInteract, { once: true, passive: true });
  window.addEventListener("keydown", onInteract, { once: true });
  window.setTimeout(loadLibrary, 6000);
}

function ensureConfigured() {
  if (!ENABLED || typeof window === "undefined") return false;
  ensureGtag();
  if (!configured) {
    configured = true;
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
    scheduleLibrary();
  }
  return true;
}

export function trackLead(eventName, params = {}) {
  if (!ensureConfigured()) return;
  window.gtag("event", eventName, { ...params, transport_type: "beacon" });
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!ensureConfigured()) return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    if (!ENABLED) return;
    function onClick(event) {
      const link = event.target.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackLead("phone_click", { method: "tel", link_url: href });
      } else if (href.startsWith("mailto:")) {
        trackLead("email_click", { method: "mailto", link_url: href.split("?")[0] });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
