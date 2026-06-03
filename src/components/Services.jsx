import React from "react";

import roofingWorkersImg from "../assets/about-workers.png";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" stroke="#2196F3" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  "Repair and Installation",
  "Plumbing",
  "Maintenance",
  "Budget-friendly",
  "Home Security Services",
  "Eco-friendly solutions",
];

export default function ProfessionalServices() {
  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "80px", paddingBottom: "80px", paddingLeft: "96px", paddingRight: "96px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "5fr 7fr", gap: "64px", alignItems: "center" }}>

        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ margin: 0, fontSize: "44px", fontWeight: 800, lineHeight: "52px", letterSpacing: "-0.5px", color: "#1C2036" }}>
            Professional for your<br />home services
          </h2>

          <p style={{ marginTop: "20px", marginBottom: 0, color: "#64748B", fontSize: "14px", lineHeight: "1.75", maxWidth: "400px", fontWeight: 400 }}>
            You need help for home care? We are home care professionals
            focused in the US region. We provide several services that
            support home services.
          </p>

          <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "16px", rowGap: "16px", maxWidth: "460px" }}>
            {features.map((label) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckIcon />
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#142257" }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "36px", backgroundColor: "#15B2F5", padding: "14px 20px", borderRadius: "14px", display: "inline-block", width: "fit-content" }}>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.88)", fontSize: "14px", lineHeight: "1.6", fontWeight: 400 }}>
              We already 24 hours fast services to help you.
            </p>
            <p style={{ margin: "2px 0 0", color: "rgba(255,255,255,0.88)", fontSize: "14px", lineHeight: "1.6", fontWeight: 400 }}>
              You can contact us at{" "}
              <a href="tel:8886175894" style={{ color: "#ffffff", fontWeight: 700, textDecoration: "underline" }}>
                (888) 617–5894
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN — House polygon image */}
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {/* Clip path */}
  <svg
    style={{ position: "absolute", width: 0, height: 0 }}
    aria-hidden="true"
  >
    <defs>
      <clipPath id="housePoly" clipPathUnits="objectBoundingBox">
  <path d="
    M 0.50,0.00
    L 1.00,0.24
    L 1.00,0.94
    Q 1.00,1.00 0.94,1.00
    L 0.06,1.00
    Q 0.00,1.00 0.00,0.94
    L 0.00,0.24
    Z
  " />
</clipPath>
    </defs>
  </svg>

  {/* IMAGE FRAME */}
  <div
  style={{
    width: "560px",
    height: "560px",
    position: "relative",
    clipPath: "url(#housePoly)",
    overflow: "hidden",
    backgroundColor: "#bfe8ff",
    margin: "0 auto",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(188,231,255,0.45), transparent 55%)",
      zIndex: 2,
      pointerEvents: "none",
    }}
  />

  <img
    src={roofingWorkersImg}
    alt="Roofing workers"
    style={{
      width: "115%",
      height: "112%",
      objectFit: "cover",

      /* move image left a bit */
      objectPosition: "87% 30%",

      display: "block",
      userSelect: "none",
    }}
  />
</div>
</div>
      </div>
    </section>
  );
}