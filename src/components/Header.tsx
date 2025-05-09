import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Button } from "./ui/button";
export const Header = () => {
  return (
    <div>
      <nav className="flex justify-between w-full h-fit py-4 px-25 items-center bg-transparent fixed backdrop-blur-sm">
        <div className="flex text-white">
          <p>Logo</p>
          <p>Arii developer</p>
        </div>
       <div className="flex gap-5 items-center">
       <div className="flex gap-5 text-white items-center border-2 px-5 py-3 rounded-4xl">
          <Link href="/" className="hover:bg-gray-800 px-2 py-2 hover:rounded-l-3xl hover:rounded-r-lg text-gray-500 hover:text-white">Home</Link>
          <Link href="/aboutme" className="hover:bg-gray-800 px-2 py-1  text-gray-500 hover:rounded-r-lg hover:rounded-l-lg hover:text-white">About</Link>
          <Link href="/work" className="hover:bg-gray-800 px-2 py-1  text-gray-500 hover:rounded-r-lg hover:rounded-l-lg hover:text-white">Work </Link>
          <Link href="/contact" className="hover:bg-gray-800 px-2 py-1  text-gray-500 hover:rounded-r-lg hover:rounded-l-lg hover:text-white">Contact</Link>
          <Link href="/lesson" className="hover:bg-gray-800 px-2 py-1 hover:rounded-r-3xl hover:rounded-l-lg text-gray-500 hover:text-white">Lesson</Link>
          
        </div>
        <Button className="cursor-pointer">CV Download</Button>
       </div>
      </nav>
    </div>
  );
};
