import Image from "../Image";

export default function Right() {
  return (
    <div className="lg:w-1/2 flex flex-col gap-3 h-full">
      <div className="flex flex-col md:flex-row gap-3 h-2/3 w-full">
        <div className="flex gap-3 md:w-2/3 h-full">
          <div className="bg-[#F0EFEA] h-full w-1/2 rounded-lg"></div>
          <div className="flex md:flex-col-reverse bg-[#F0EFEA] h-full w-1/2 rounded-lg">
          <div className="ml-5 mb-5 space-y-2">
         <div className="w-5 h-5 rounded-full bg-[#313131]"></div>
         <div className="w-5 h-5 rounded-full bg-[#AAAAAA]"></div>
         <div className="w-5 h-5 rounded-full bg-white"></div>
         </div>
          </div>
        </div>
        <div className="flex md:flex-col gap-3 md:w-1/3 h-full">
        <div className="flex justify-center items-center border border-[#964144] md:h-1/2 w-full rounded-lg">
        <h1 className="text-5xl text-[#964144]  font-bold">99</h1>
        </div>
        <div className="flex justify-center items-center border border-[#964144] md:h-1/2 w-full rounded-lg">
        <h1 className="text-5xl text-[#964144]  font-bold">Aa</h1>
        </div>
        </div>
      </div>
      <div className="flex gap-3 h-1/3 w-full">
       <Image imgSrc="https://i.pinimg.com/originals/35/3b/a1/353ba190f62817b96386f5c0a67f848f.gif" />
        <div className="flex flex-col-reverse bg-[#F0EFEA] w-2/3 rounded-lg">
         <div className="ml-5 mb-5 space-y-2">
         <div className="w-[80%] h-1 rounded-full bg-[#2F2F2F]"></div>
         <div className="w-[60%] h-1 rounded-full bg-[#2F2F2F]"></div>
         <div className="w-[60%] h-1 rounded-full bg-[#2F2F2F]"></div>
         </div>
        </div>
      </div>
    </div>
  )
}
