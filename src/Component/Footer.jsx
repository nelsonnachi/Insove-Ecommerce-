import React from "react";
import cards from "../assets/cards.png"


const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-[1440px] px-6  flex items-start justify-between flex-wrap gap-12 mt-12">
        {/* logo - Left side */}
        <div className="flex flex-col max-w-sm gap-y-5">
          <div className="text-[28px] font-[700] leading-[120%]">
            Shopanza
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            earum reprehenderit possimus!
          </p>
          <img src={cards} alt="" height={33} width={144} className="mt-5"/>
        </div>
        <div className="flex items-center justify-start gap-7 xl:gap-x-36 flex-wrap">
          <ul className="">
            <h4 className="text-[16px] md:text-[17px] font-bold mb-3">Customer Service</h4>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] text-[16px] font-[400] hover:text-[#141414]">
                Help center
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Payment methods
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Contact
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Shipping status
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Complaints
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Legal</h4>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Privacy Policy
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Cookie settings
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Terms & conditions
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Cancelation
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Imprint
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Others</h4>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Our teams
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Sustainability
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Press
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Jobs
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-[#7B7B7B] hover:text-[#141414] text-[16px] font-[400]">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* copyrights */}
      <p className="mx-auto max-w-[1440px] px-6 bg-[#f4f4f7]  text-[14px] font-[500] py-2  rounded flex items-center justify-between mt-6">
        <span className="text-[#141414]">2025 Shopanza</span>
        <span className="text-[#141414]">All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
