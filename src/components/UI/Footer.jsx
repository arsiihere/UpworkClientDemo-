import React from "react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandLinkedin,
} from "tabler-icons-react";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-40  ">
        <div className="flex-1 flex flex-col gap-20">
          <p className="text-2xl">Snikpic</p>
          <span className="flex gap-8">
            <BrandFacebook size={48} />
            <BrandInstagram size={48} />
            <BrandLinkedin size={48} />
          </span>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="font-medium text-lg">About Us</p>
          <p className="font-medium text-lg">Blog</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-lg">Legal</p>
          <p className="font-medium text-lg">Privacy and Policy</p>
          <p className="font-medium text-lg">Terms and Conditions</p>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="font-medium text-lg">Help</p>
          <p className="font-medium text-lg">Contact Us</p>
        </div>
      </div>
      <p className="font-normal text-lg self-center pt-20">
        Snikpic SRL - VAT BE0729.842.450 - contact@snikpic.io - Avenue Armand
        Huysmans 157,1050 Bruxelies
      </p>
    </div>
  );
}

export default Footer;
