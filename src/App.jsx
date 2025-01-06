import "./App.css";
import FakeHorizontal from "./examples/FakeHorizontal";
import ParallaxBackground from "./examples/parallaxBackGround";
import PinnedGalery from "./examples/PinnedGalery";
import PinnedSideBar from "./examples/PinnedSideBar";
function App() {
  return (
    <div style={{overscrollBehavior: "none"}} className="overscroll-none">
      {
        // <ParallaxBackground />
      }
      {/* <PinnedSideBar /> */}
      {/* <PinnedGalery /> */}
      <FakeHorizontal />
    </div>
  );
}

export default App;
