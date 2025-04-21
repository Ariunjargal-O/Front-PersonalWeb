import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <nav className="flex justify-between w-full h-15 px-10 items-center bg-amber-300 fixed backdrop-blur-sm">
        <div className="flex">
          <p>Logo</p>
          <p>Arii developer</p>
        </div>
        <div className="flex gap-5">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>

          <Link href="#">Portfilio</Link>
          <Link href="#">Service</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Lesson</Link>
          <Link href="#">Lan</Link>
        </div>
      </nav>
    </div>
  );
};
