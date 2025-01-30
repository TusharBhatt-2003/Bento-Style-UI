import Spline from "@splinetool/react-spline";

const Scene = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <Spline
        scene="https://prod.spline.design/T1DDf8IpWGY2c8Ty/scene.splinecode"
        style={{}}
        //controls={false} // Disable controls
      />
    </div>
  );
};

export default Scene;
