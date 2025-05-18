import React from "react";
export default function AboutPage() {
  return (
    <div className="w-screen h-screen bg-black py-15  items-center px-50 ">
      <div className="flex ">
        <div className="w-1/2 flex justify-center ">
          <img src="Me.png"></img>
        </div>
        <div className="w-1/2 ">
          <h2 className="text-3xl text-white">About me</h2>
          <p className="text-white">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
        </div>
      </div>
    </div>
  );
}
