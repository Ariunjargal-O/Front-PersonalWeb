import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";
import { CardContent } from "@mui/material";

export const Footer = () => {
  return (
    <div className="bg-black h-fit py-5 px-15 flex flex-col justify-between">
      <Card className="py-10">
        <CardContent>

        </CardContent>
      </Card>

      <div className="flex justify-between mt-20">
        <div>
          <p className="text-white">Logo</p>
          <p className="text-white">Arii</p>
        </div>

        <div className="flex gap-4 flex-col">
          <p className="text-2xl text-white">Follow me</p>
          <div className="flex gap-5 pl-3">
            <Link
              href="https://www.instagram.com/opti.ari/"
              className="flex gap-3 items-center"
            >
              <Instagram className="text-white" />
              <span className="text-white">Instagram</span>
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100010655025939&locale=ja_JP"
              className="flex gap-3 items-center"
            >
              <Facebook className="text-white" />
              <span className="text-white">Facebook</span>
            </Link>

            <Link
              href="https://github.com/Ariunjargal-O"
              className="flex gap-3 items-center"
            >
              <Github className="text-white" />
              <span className="text-white">GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ariunjargal-ochirpurev-28ba30300/"
              className="flex gap-3 items-center"
            >
              <Linkedin className="text-white" />
              <span className="text-white">LinkedIn</span>
            </Link>
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
