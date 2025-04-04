import rug from "../assets/SVG/Rug.svg";
import Luna from "../components/Luna";
import PotPlant from "./PotPlant/PotPlant";
import lamp from "../assets/SVG/Lamp-H.svg";
import table from "../assets/SVG/Table.svg";
import Window from "./Window";
import WindowSill from "../assets/SVG/Window.svg";
import littlePlant from "../assets/SVG/LittlePlant.svg";
import Screen from "./Screen/ScreenContent";
import Clock from "./Clock";
import "../App.css";
// import BrushTexture4 from "./Textures/Texture4";
import ShadowLuna from "../assets/SVG/Shadows/ShadowDog.svg";
import ShadowLittlePot from "../assets/SVG/Shadows/ShadowLilPot.svg";
import ShadowSill from "../assets/SVG/Shadows/ShadowSill.svg";
import PotShadow from "../assets/SVG/Shadows/ShadowPot.svg";

const OfficeScene = () => {
  return (
    <>
      <div className="relative w-4xl z-0">
        {/* RUG */}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 opacity-70">
          <div
            className="absolute top-5 w-[100%] h-[100%]"
            style={{
              WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1637.46 455.1"><polygon fill="white" points="0 455.1 310.2 6.31 1397.29 0 1637.46 455.1 0 455.1"/></svg>')`,
              maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1637.46 455.1"><polygon fill="white" points="0 455.1 310.2 6.31 1397.29 0 1637.46 455.1 0 455.1"/></svg>')`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          >
            {" "}
            {/* <BrushTexture4 blendMode="soft-light" color="white" opacity={0.1} /> */}
          </div>
          <img
            src={rug}
            alt="An illustration of a persian-style rug in warm tones of rust and chocolate"
          />
        </div>
        {/* POTPLANT */}
        <div className="absolute  h-80 w-35 bottom-50 left-40 z-20">
          <PotPlant />
        </div>
        {/* LAMP */}
        <div className="absolute right-25 bottom-[260px] w-30 z-20">
          <div className="bottom-0 right-0 absolute opacity-10 w-28 -z-10"> <img src={PotShadow} alt="A shadow of a lamp" /></div>
          <img src={lamp} alt="A standing floor lamp" />
        </div>
        {/* TABLE */}

        <div className="absolute h-100 w-50 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-[250px] z-30">
          <div className="w-100 absolute bottom-0 z-0 left-1/2 -translate-x-1/2">
            <img src={table} alt="A white table" />
          </div>
        </div>

        {/* LUNA */}
        <div className="absolute bottom-25 right-1/5 translate-x-1/2 w-80 z-40">
          <div className="absolute -bottom-8 left-1/2 -translate-1/2 w-70 opacity-10 -z-40">
            <img src={ShadowLuna} />
          </div>
          <Luna />
        </div>
        {/* CLOCK */}
        <div className="absolute top-35 left-30 translate-x-[10%] w-30">
          <Clock />
        </div>
        {/* WINDOW */}
        <div className="absolute top-1/7 left-1/2 -translate-x-[56%] -z-50">
          <div className="absolute w-12 top-50 right-5 z-20">
            <img src={littlePlant} />
            <div className="absolute w-10 -bottom-0.5 right-0 opacity-20 -z-10">
              <img src={ShadowLittlePot} />
            </div>
          </div>

          <div className="absolute w-80 ml-5 z-10">
            <img src={WindowSill} alt="Window showing an ocean view" />
          </div>
          <div className="absolute w-80 -bottom-10 left-5 opacity-5">
            <img src={ShadowSill} />
          </div>

          <div
            className="w-80 mt-2 overflow-hidden z-0"
            style={{
              clipPath: "polygon(35px 0, 100% 0, 100% 100%, 35px 100%)",
            }}
          >
            <Window />
          </div>
        </div>
        {/* SCREEN */}
        <div className="absolute top-1/2 left-1/2 z-50">
          <Screen />
        </div>
      </div>
    </>
  );
};

export default OfficeScene;
