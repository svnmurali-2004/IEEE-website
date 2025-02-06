import React from "react";
import "../styles/Sponsors.css";
import googleLogo from "/google.jpg";
import microsoftLogo from "/Microsoft.svg";
import ibmLogo from "/ibm.webp";
import amazonLogo from "/Amazon.webp";

const sponsors = [
  { name: "Google", logo: googleLogo, link: "https://google.com" },
  { name: "Microsoft", logo: microsoftLogo, link: "https://microsoft.com" },
  { name: "IBM", logo: ibmLogo, link: "https://ibm.com" },
  { name: "Amazon", logo: amazonLogo, link: "https://amazon.com" },
];

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h3>Sponsored by</h3>
      <div className="sponsor-wrapper">
        <div className="sponsor-list">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
