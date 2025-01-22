const BoldHeading = ({ text }) => {
  return (
    <div className="border border-[#964144] h-2/3 w-full flex justify-center items-center rounded-lg">
      <h1 className="text-5xl text-[#964144] font-bold uppercase">{text}</h1>
    </div>
  );
};

export default BoldHeading;
