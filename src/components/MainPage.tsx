import { LocateIcon, LocationEditIcon, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const MainPage = () => {
  return (
    <div className="w-full flex gap-10 bg-indigo-300 pb-15 pt-30 px-10">
     
      <div className="w-1/2 justify-between items-center h-auto">
        <Button className="text-2xl my-10 border-2">WELCOME TO MY PORTFOLIA</Button>
        <p className="text-2xl">Hi👋 , I’m </p>
        <h1 className="text-6xl pl-10">Ariunjargal Ochirpurev</h1>
        <p className="py-5">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>

        <p className="flex">
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
