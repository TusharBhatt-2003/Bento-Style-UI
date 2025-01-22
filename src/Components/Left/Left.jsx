import Image from "../Image";

export default function Left() {
  return (
    <div className="lg:w-1/2 flex flex-col gap-3 h-full">
      <div className="flex gap-3 h-1/3 w-full">
        <div className="bg-[#F0EFEA] w-2/3 rounded-lg">
         <div className="ml-5 mt-5 space-y-2">
         <div className="w-[80%] h-1 rounded-full bg-[#2F2F2F]"></div>
         <div className="w-[60%] h-1 rounded-full bg-[#2F2F2F]"></div>
         <div className="w-[60%] h-1 rounded-full bg-[#2F2F2F]"></div>
         </div>
        </div>
      <Image imgSrc="https://i.pinimg.com/originals/13/64/f3/1364f301d7181e2acc516f702c4ce274.gif" />
      </div>
      <div className="border border-[#964144] h-2/3 w-full flex justify-center items-center rounded-lg">
        <h1 className="text-5xl text-[#964144] font-bold">Bento</h1>
      </div>
    </div>
  )
}
