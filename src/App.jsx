import { useState } from "react";
import avatar from "./assets/images/avatar-michelle.jpg";
import share from "./assets/images/icon-share.svg"
import drawers from "./assets/images/drawers.jpg";
import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";

import "./App.css";

function App() {
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center">
        <div className="w-[45.625rem] h-[17.5rem] flex md:flex-row-reverse bg-white rounded-md shadow-container">
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
            <div className="relative flex justify-between mt-[1.25rem]">
              <div className="flex gap-4 items-center">
                <img src={avatar} alt="avatar"  className="w-[2.5rem] h-[2.5rem] rounded-full"/>
                <div className="text-[.8125rem]">
                  <h3 className="font-bold">Michelle Appleton</h3>
                  <p className="text-grayish-blue">28 Jun 2020</p>
                </div>
              </div>
              <button type="button" onClick={handleOpen} className="flex items-center justify-center bg-light-grayish-blue hover:bg-desaturated-dark-blue hover:text-red-200 rounded-full w-[32px] h-[32px]">
                <img src={share} alt="share-icon" className=""/>
              </button>
              <div className={`dialog absolute w-fit left-auto bottom-[125%] bg-dark-grayish-blue flex items-center gap-4 rounded-b-lg py-[1.4rem] px-9 text-white md:rounded-lg md:py-4 transition-visibility opacity-0  ${open ? 'visible opacity-100':''}`}>
                <h2 className="text-grayish-blue uppercase tracking-[0.3125rem] text-[.8125rem]">Share</h2>
                <ul className="flex items-center gap-4">
                  <li>
                    <a href="#">
                      <img src={facebook} alt="facebook" width={20} height={20} className="hover:filter-gray transition-all"/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={twitter} alt="twitter" width={20} height={20} className="hover:filter-gray transition-all"/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={pinterest} alt="pinterest" width={20} height={20} className="hover:filter-gray transition-all"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img
            src={drawers}
            alt="picture"
            width={540}
            height={446}
            className="w-[39%] object-cover object-left rounded-l-md"
          />
        </div>
      </main>
    </>
  );
}

export default App;
