import Image from "../Image";
import Text from "../Text";

export default function Right() {
  const imgSrc =
    "https://i.pinimg.com/736x/78/8f/b9/788fb91080f878bb5606127aac7637c4.jpg";
  return (
    <div className="lg:w-1/2 flex flex-col gap-3 h-full">
      <div className="flex flex-col md:flex-row gap-3 h-2/3 w-full">
        <div className="grid grid-cols-2 gap-3 md:w-2/3 h-full">
          <Text text="I’m not broken, just beautifully twisted." />
          <div
            className="flex flex-col-reverse bg-[#F0EFEA] h-full rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <div className="flex flex-row gap-1 md:flex-col ml-5 mb-5">
              <div className="w-5 h-5 rounded-full bg-[#313131]"></div>
              <div className="w-5 h-5 rounded-full bg-[#964144]"></div>
              <div className="w-5 h-5 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col gap-3 md:w-1/3 h-full">
          <div className="flex justify-center items-center border border-[#964144] md:h-1/2 w-full rounded-lg">
            <h1 className="text-5xl text-[#964144]  font-bold">666</h1>
          </div>
          <div className="flex justify-center items-center border border-[#964144] md:h-1/2 w-full rounded-lg">
            <h1 className="text-5xl text-[#964144]  font-bold">Havoc</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-3 h-1/3 w-full">
        <Image imgSrc="https://i.pinimg.com/originals/5d/31/2b/5d312bed12dfd21bf4d3e8ff92d0560f.gif" />
        <Text text="The mind is a labyrinth, and I’m lost in its twists." />
      </div>
    </div>
  );
}
