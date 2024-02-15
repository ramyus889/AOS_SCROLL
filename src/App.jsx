import HeaderAOS from "./components/HeaderAOS";
import Fade from "./components/Fade";
import Flip from "./components/Flip";
import Zoom from "./components/Zoom";
import DifferentExamples from "./components/DifferentExamples";
import AnchorPlacement from "./components/AnchorPlacement";

const App = () => {
  return (
    <div className="">
      <div className="overflow-x-auto ">
        <div className="fixed w-full h-full -z-10 opacity-75">
          <div className="bg-[url('public/img/bg.jpg')]  h-screen bg-no-repeat bg-cover"></div>
        </div>
        <HeaderAOS />
        <Fade />
        <Flip />
        <Zoom />
        <DifferentExamples />
        <AnchorPlacement />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default App;
