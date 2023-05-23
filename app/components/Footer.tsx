import React from "react";
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex flex-col items-center border-t-[1px] border-zinc-500 pt-4 pb-2 layout mx-auto gap-2 text-zinc-500">
      <p className="font-bold">Reach me out</p>
      <div className="flex gap-3">
        <a href="">
          <AiOutlineInstagram className="text-2xl" />
        </a>
        <a href="">
          <AiFillGithub className="text-2xl" />
        </a>
        <a href="">
          <AiFillLinkedin className="text-2xl" />
        </a>
        <a href="">
          <AiOutlineTwitter className="text-2xl" />
        </a>
      </div>
      <p className="font-bold mt-5">Galuh Satria 2023</p>
    </div>
  );
};

export default Footer;
