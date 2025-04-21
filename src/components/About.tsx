import { Button } from "./ui/button";

export const AboutPage = () => {
  return (
    <div className="w-full h-auto py-15 px-10  ">
      {/* <div className="mx-auto"> <Button className="">About me</Button></div> */}
      <div className="flex ">
        <div className="w-1/2 flex justify-center ">
        <img src="Me.png"></img>
        </div>
        <div className="w-1/2 ">
          <h2 className="text-3xl">About me</h2>
          <p>
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
};
