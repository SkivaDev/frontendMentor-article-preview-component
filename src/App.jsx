import { useState } from "react";
import avatar from "./assets/images/avatar-michelle.jpg";
import drawers from "./assets/images/drawers.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center">
        <div className="w-[700px] h-[400px] flex md:flex-row-reverse">
          <div className="">
            <div>
              <h2>
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h2>
              <p>
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
            </div>
            <div>
              <div>
                <img src={avatar} alt="avatar" />
                <div>
                  <h3>Michelle Appleton</h3>
                  <p>28 Jun 2020</p>
                </div>
              </div>
              <div>row</div>
            </div>
          </div>
          <img src={drawers} alt="picture"  className="w-[30%]"/>
        </div>
      </main>
    </>
  );
}

export default App;
