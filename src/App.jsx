import { useState } from "react";
import avatar from "./assets/images/avatar-michelle.jpg";
import share from "./assets/images/icon-share.svg"
import drawers from "./assets/images/drawers.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center">
        <div className="w-[45.625rem] h-[17.5rem] flex md:flex-row-reverse bg-white rounded-md overflow-hidden">
          <div className="px-[2.5rem] py-[2rem]">
            <div className="">
              <h2 className="text-[1.25rem] font-bold text-dark-grayish-blue tracking-[0.0156rem]">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h2>
              <p className="text-[.8125rem] text-desaturated-dark-blue mt-[.75rem] tracking-[.0076rem]">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
            </div>
            <div className="flex justify-between mt-[1.25rem]">
              <div className="flex gap-4 items-center">
                <img src={avatar} alt="avatar"  className="w-[2.5rem] h-[2.5rem] rounded-full"/>
                <div className="text-[.8125rem]">
                  <h3 className="font-bold">Michelle Appleton</h3>
                  <p className="text-grayish-blue">28 Jun 2020</p>
                </div>
              </div>
              <button type="button" className="flex items-center justify-center bg-light-grayish-blue hover:bg-desaturated-dark-blue hover:text-red-200 rounded-full w-[32px] h-[32px]">
                <img src={share} alt="share-icon" className=""/>
              </button>
            </div>
          </div>
          <img
            src={drawers}
            alt="picture"
            width={540}
            height={446}
            className="w-[39%] object-cover object-left"
          />
        </div>
      </main>
    </>
  );
}

export default App;
