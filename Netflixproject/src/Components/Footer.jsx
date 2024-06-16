import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    // Main container
    <div className="w-full min-h-60 bg-neutral-900 px-2 md:px-52 py-12 mt-12 sticky">
      {/* links */}
      <div className="w-full h-auto flex flex-col md:flex-row  justify-start items-start">
        <ul className="flex flex-col md:flex-row gap-x-3 flex-wrap cursor-pointer font-nsans-light">
          <li href="#">Terms and conditions</li>
          <li href="#">Privacy Policy</li>
          <li href="#">Cookie Preference</li>
          <li href="#">POPIA</li>
          <li href="#">License Agreement</li>
          <li href="#">Website Terms</li>
          <li href="#">Privacy Portal</li>
          <li href="#">Help</li>
        </ul>
        <div className="flex flex-row justify-center items-center  gap-x-4 md:mx-2 pb-6 pt-2 md:pb-0">
          <FaFacebookF
            className="bg-gray-600 rounded-full p-1 cursor-pointer"
            size={30}
          />
          <FaInstagram
            className="bg-gray-600 rounded-full p-1 cursor-pointer"
            size={30}
          />
          <FaTiktok
            className="bg-gray-600 rounded-full p-1 cursor-pointer"
            size={30}
          />
          <FaTwitter
            className="bg-gray-600 rounded-full p-1 cursor-pointer"
            size={30}
          />
          <FaYoutube
            className="bg-gray-600 rounded-full p-1 cursor-pointer"
            size={30}
          />
        </div>
      </div>
      <p className="py-12 font-nsans-light">
        This website is copyright protected by the laws of South Africa and the
        rest of the African Countries represented on this website and by
        International Treaties. No part of this website may be saved or stored,
        reproduced, used or transmitted in any form or by any electronic or
        mechanical means, including, but not limited to storage thereof by
        e-mail or any other means, and the use thereof on any other website
        and/or any other media form, without the written and express permission
        of EgoStream.
      </p>
    </div>
  );
};

export default Footer;
