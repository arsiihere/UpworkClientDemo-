import React from "react";
import Button from "./Button";
import HeaderLink from "./HeaderLink";
import { ChevronRight } from "tabler-icons-react";

const array = [
  "Testimonials",
  "AI Tools",
  "Learn",
  "Pricing",
  "Contact Sales",
  "Features",
];

function Header(props) {
  return (
    <div className="h-20 w-full  flex justify-around items-center">
      <p className="text-xl font-medium text-gray-800 -translate-x-12 ">
        Snikpic
      </p>
      <span className="flex gap-8">
        {array.map((link) => (
          <HeaderLink text={link} />
        ))}
      </span>
      <span className="flex gap-4 items-center">
        <Button
          text="Sign Up"
          buttonClass="text-[#FD7461] font-medium bg-[#FFF0EC] px-6 py-3 rounded-full"
        />
        <Button
          text="EN"
          buttonClass="text-gray-700 font-bold text-base flex"
          icon={<ChevronRight className="rotate-90" />}
        />
      </span>
    </div>
  );
}

export default Header;
