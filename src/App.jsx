import "./App.css";

import Left from "./Components/Left/Left";
//import NotificationButton from "./Components/notification/NotificationButton";
import Right from "./Components/Right/Right";

function App() {
  return (
    <>
      <div className="flex p-5 md:p-10 flex-col justify-center items-center latinCode bg-[#FCFBF9] h-screen w-screen">
        <main className="flex flex-col lg:flex-row gap-3 w-full h-full lg:w-[80%] lg:h-[80%]">
          <Left />
          <Right />
        </main>
        {/* <NotificationButton /> */}
      </div>
    </>
  );
}

export default App;
