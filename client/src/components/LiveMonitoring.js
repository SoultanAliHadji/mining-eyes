import "../App.css";
import Dropdown from "./Dropdown";
import ListNotification from "./ListNotification";
import Coordinate from "./Coordinate";
import axios from "axios";
import { useState, useEffect } from "react";

const LiveMonitoring = () => {
  const [data, setData] = useState([{}]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get("/cam")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    return (
      <button
        className="text-start p-2 text-black focus:bg-blue-600 focus:text-white"
        key={data.id}
        onClick={() => setCurrent(data.id)}
      >
        {data.cctv}
      </button>
    );
  });

  return (
    <div className="bg-white-400 h-screen">
      <div className="bg-white drop-shadow-md">
        <div className="container mx-auto">
          <div>
            <nav>
              <div className="pt-6 pb-6 grid grid-cols-2">
                <div className="flex justify-start grid grid-cols-5">
                  <div>
                    <a href="/landing">
                      <img
                        className="w-24"
                        src={require("../assets/beraucoal-logo.png")}
                        alt="logo beraucoal"
                      />
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a href="livemonitoring">Live Monitoring</a>
                  </div>
                </div>
                <div className="flex justify-end ">
                  <Dropdown />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="mt-6 mb-6">
            <a
              className="text-[18px] text-blue-600 hover:text-blue-800 underline"
              href=""
            >
              Real Time Monitor
            </a>
          </div>
        </div>
        <div className="md:grid grid-cols-11 gap-6">
          <div className="border col-start-1 col-end-4 h-max">
            <div className="grid grid-rows-6">
              <h3 className="flex justify-center font-semibold p-2 border-b-2 border-gray-200">
                List CCTV
              </h3>
              {arr}
            </div>
          </div>
          <div className="border col-start-4 col-end-9">
            <div>
              <div>
                <img src={require("../assets/ex_site.jpg")} alt="" />
              </div>
              <div className="pr-2 grid grid-cols-2 border-y-2 border-gray-200 text-[12px]">
                <div></div>
                <div className="flex justify-end py-2 grid grid-cols-11">
                  <div className="col-start-4 flex justify-end">
                    <button className="bg-blue-500 px-2 py-[2px] rounded-[100px] text-white">
                      <img src="" alt="" />
                    </button>
                  </div>
                  <div className="col-start-5 flex justify-end">
                    <button className="bg-blue-500 px-2 py-[2px] rounded-[100px] text-white">
                      <img src="" alt="" />
                    </button>
                  </div>
                  <div className="col-start-6 flex justify-end">
                    <button className="bg-blue-500 px-2 py-[2px] rounded-[100px] text-white">
                      <img src="" alt="" />
                    </button>
                  </div>
                  <div className="col-start-7 flex justify-end">
                    <button className="bg-blue-500 px-2 py-[2px] rounded-[100px] text-white">
                      <img src="" alt="" />
                    </button>
                  </div>
                  <div className="col-start-8 flex justify-end">
                    <button className="bg-blue-500 px-2 py-[2px] rounded-[100px] text-white">
                      <img src="" alt="" />
                    </button>
                  </div>
                  <div className="col-start-9 flex justify-end">
                    <button className="bg-blue-500 px-2 py-[2px] rounded-[100px] text-white">
                      <img src="" alt="" />
                    </button>
                  </div>
                  <div className="col-start-10 flex justify-end">
                    <button className="bg-blue-500 px-2 py-[2px] rounded-[100px] text-white">
                      <img src="" alt="" />
                    </button>
                  </div>
                  <div className="col-start-11 flex justify-end">
                    <button className="bg-blue-500 px-2 py-[2px] rounded-[100px] text-white">
                      <img src="" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <Coordinate current={current} />
            </div>
          </div>
          <div className="border col-start-9 col-end-12 h-max">
            <ListNotification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
