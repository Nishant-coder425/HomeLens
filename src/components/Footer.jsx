import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // <-- Optional if using React Router

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t-4 border-violet-500">
      {/* top section */}
      <div className="max-w-[1200px] mx-auto px-4 py-14 md:py-20 flex flex-wrap md:flex-nowrap gap-10 md:gap-16 justify-between">

        {/* About */}
        <div className="w-full md:w-auto flex-1">
          <div className="mb-4 text-xl md:text-2xl font-semibold text-violet-600 inline-block transition-all duration-200 hover:-translate-y-1 hover:underline">
            About
          </div>
          <div className="text-base text-black/60 leading-relaxed">
          Thank you for visiting our website! We are dedicated to connecting tenants with verified property owners to ensure comfort, safety, and transparency.
          Browse a wide range of rental options designed to fit your lifestyle and budget, and let us help you find the perfect home.
          </div>
        </div>

        {/* Contact */}
        <div className="w-full md:w-auto flex-1">
          <div className="mb-4 text-xl md:text-2xl font-semibold text-violet-600 inline-block transition-all duration-200 hover:-translate-y-1 hover:underline">
            Contact
          </div>

          <div className="flex items-start gap-3 mb-4">
            <FaLocationArrow className="mt-1 text-violet-600" />
            <div className="text-base text-black/60 leading-relaxed">
              Jhunsi, Prayagraj,
              <br />
              Uttar Pradesh-211019
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaMobileAlt className="text-violet-600" />
            <div className="text-base text-black/60">+91XXXXXXXXXX</div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-violet-600" />
            <div className="text-base text-black/60">abc@gmail.com</div>
          </div>
        </div>

        {/* Location */}
        <div className="w-full md:w-auto flex-1">
          <div className="mb-4 text-xl md:text-2xl font-semibold text-violet-600 inline-block transition-all duration-200 hover:-translate-y-1 hover:underline">
            Location
          </div>
          <div className="space-y-1 text-base text-black/60">
            <div>Mumbai</div>
            <div>Delhi</div>
            <div>Prayagraj</div>
            <div>Lucknow</div>
            <div>Pune</div>
          </div>
        </div>

        {/* Pages */}
        <div className="w-full md:w-auto flex-1">
          <div className="mb-4 text-xl md:text-2xl font-semibold text-violet-600 inline-block transition-all duration-200 hover:-translate-y-1 hover:underline">
            Pages
          </div>
          <div className="space-y-2 text-base text-black/60">
            <a href="/" className="block cursor-pointer hover:text-violet-600 hover:underline">
              Home
            </a>
            <a href="/about" className="block cursor-pointer hover:text-violet-600 hover:underline">
              About
            </a>
            <a href="/privacy" className="block cursor-pointer hover:text-violet-600 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="block cursor-pointer hover:text-violet-600 hover:underline">
              Terms & Conditions
            </a>
            <a href="/contact" className="block cursor-pointer hover:text-violet-600 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-gradient-to-r from-violet-500 to-violet-700">
        <div className="max-w-[1200px] mx-auto px-4 py-5 text-center text-white font-semibold text-sm md:text-lg tracking-wide">
          © 2025 YourWebsiteName — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
