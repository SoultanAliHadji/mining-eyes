import "../App.css";
import Dropdown from "./Dropdown";
import DeviationDetail from "./DeviationDetail";
import { useState, useEffect } from "react";
import axios from "axios";

const Details = () => {
  const [data, setData] = useState([{}]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get("/notification")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    return (
      <button
        className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4"
        key={data.id} onClick={() => setCurrent(data.id)}
      >
        <p>{data.date}</p>
        <p className="float-right">{data.object}</p>
        <p>{data.cctv}</p>
        <p className="bg-sky-400 px-2 text-white font-semibold rounded-[4px] w-max">
          {data.stats}
        </p>
      </button>
    );
  });

  return (
    <div>
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
                    <a href="/livemonitoring">Live Monitoring</a>
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
        <div className="md:grid grid-cols-9 gap-6 mt-6">
          <div className="col-start-1 col-end-7 border">
            <DeviationDetail current={current}/>
          </div>
          <div className="col-start-7 col-end-10 border">
            <h3 className="flex justify-center font-semibold p-2">
              List Notifikasi
            </h3>
            <div className="overflow-auto h-[540px]">{arr}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
