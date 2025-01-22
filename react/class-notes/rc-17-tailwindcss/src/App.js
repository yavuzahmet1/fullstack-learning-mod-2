import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverAndFocus from "./components/HoverAndFocus";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typography from "./components/Typography";

function App() {
  return (
    <div className="dark:bg-gray-600 min-h-screen">
      <Navbar />
      <h1 className="text-center">Tailwind CSS</h1>
      {/* <Typography /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverAndFocus /> */}
      {/* <FlexAndResponsive /> */}
      <ProfileCard />
    </div>
  );
}

export default App;
