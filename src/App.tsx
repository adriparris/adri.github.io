import OfficeScene from "./components/OfficeScene";
import BrushTexture from "./components/Textures/Texture";
import BrushTexture2 from "./components/Textures/Texture2";
import { ArrowRight } from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex w-full h-screen min-h-[794px]">
        <div className="absolute w-full h-screen flex flex-col z-0 min-h-[794px]">
          <div className="absolute top-0 h-5/8 w-full bg-stone-50 dark:bg-stone-300 opacity-60 -z-50">
            <BrushTexture2 color="grey" blendMode="difference" opacity={0.1} />
          </div>
          <div className="absolute bottom-0 h-3/8 w-full bg-stone-400 dark:bg-stone-600 opacity-70 -z-50">
            <BrushTexture color="grey" blendMode="multiply" opacity={0.2} />
          </div>
        </div>
        <div className="absolute justify-center  w-full h-screen flex min-h-[794px] z-20">
          {" "}
          <OfficeScene />
        </div>
      </div>
      <div className="flex p-5 h-15 absolute top-0 left-0 text-sm w-full justify-between z-10">       
         <div className="flex-col">
          <h1>Adri Parris </h1>
          <h2 className="text-xs ">Designer |
             Engineer</h2>
        </div>
        <div className="flex">
          <a
            className="flex cursor-pointer"
            href="https://adri-parris.notion.site/resume"
          >
            Resume <ArrowRight size={16} className="ml-1 mt-0.5" />
          </a>
          <a className="ml-2 cursor-pointer" href="mailto:adriparris.work@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
