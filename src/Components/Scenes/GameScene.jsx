import Spline from "@splinetool/react-spline";

const GameScene = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <Spline
        scene="https://prod.spline.design/b8z4bC0lVZwzUpaM/scene.splinecode"
        style={{}}
        //controls={false} // Disable controls
      />
    </div>
  );
};

export default GameScene;
