import { LocateIcon, LocationEditIcon, MapPin } from "lucide-react";
import { Button } from "./ui/button";


// Declare the 'model-viewer' element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export const MainPage = () => {
  return (
    <div className="w-screen h-screen flex gap-10 bg-black pb-15 pt-30 px-50 items-center">
      <div className="w-1/2 justify-between items-center h-auto">
        <Button className="text-2xl border-2 mb-5">WELCOME TO MY PORTFOLIA</Button>
        <p className="text-2xl text-white ">Hi👋 , I’m </p>
        <h1 className="text-6xl pl-10 text-white">Ariunjargal Ochirpurev</h1>
        <p className="py-5 text-white">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>

        <p className="flex text-white mt-5">
          <MapPin />
          Mongolia, Ulaanbaatar
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src="Me.png"></img>
      
      </div>
    </div>
  );
};
