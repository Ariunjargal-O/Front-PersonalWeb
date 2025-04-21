import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-amber-100 h-50 py-5 px-15 flex flex-col justify-between">
      <div className="flex justify-between">
        <div>
          {" "}
         <div>
         <p>Logo</p>
         <p>Arii</p>
         </div>
         <p> contact me </p>
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
        <hr className="my-3 text-gray-300" />
        <p className="text-gray-300">@2025 Ari All Rights Reserved.</p>
      </div>
    </div>
  );
};
