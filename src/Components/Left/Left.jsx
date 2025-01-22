import BoldHeading from "../BoldHeading";
import Image from "../Image";
import Text from "../Text";

export default function Left() {
  return (
    <div className="lg:w-1/2 flex flex-col gap-3 h-full">
      <div className="flex gap-3 h-1/3 w-full">
        <Text text="I see the world differently—because I built it myself." />
        <Image
          pinLink="https://in.pinterest.com/pin/596093700701600988/"
          imgSrc="https://i.pinimg.com/originals/bb/dd/16/bbdd1661c0f5bcbb82d8ead3074b4fab.gif"
        />
      </div>
      <BoldHeading text="Paranoia" />
    </div>
  );
}
