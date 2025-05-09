import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-black h-50 py-5 px-15 flex flex-col justify-between">
      <div className="flex justify-between">
        <div>
          <div>
            <p className="text-white">Logo</p>
            <p className="text-white">Arii</p>
          </div>
          <p className="text-white"> contact me </p>
        </div>

        <div className="flex gap-4 flex-col">
          <p className="text-2xl">Follow me</p>
          <div className="flex gap-5 pl-3">
            <Instagram />
            <Facebook />
            <Github />
            <Linkedin />
            <Mail />
          </div>
        </div>
      </div>
      <div>
        <hr className="my-4 text-gray-300" />
        <p className="text-gray-300">@2025 Ari All Rights Reserved.</p>
      </div>
    </div>
  );
};
