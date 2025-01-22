const Text = ({ text }) => {
  return (
    <div className="bg-[#F0EFEA] w-full flex justify-center items-center rounded-lg">
      <div className="p-2">
        <p className="text-[#2F2F2F] capitalize font-semibold text-sm">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Text;
