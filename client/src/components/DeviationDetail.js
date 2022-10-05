import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DeviationDetail = ({ current }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get("/notification")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.slice(current, current + 1).map((data, index) => {
    return (
      <div>
        <div>
          <h3 className="font-semibold text-[22px] pt-2 pb-2 border-b-2 border-gray-100">
            Terdeteksi {data.object}
          </h3>
        </div>
        <div>
          <h5 className="pt-2 pb-2">
            CCTV &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; : &emsp; {data.cctv}
          </h5>
          <h5 className="pt-2 pb-2">
            Waktu &emsp; &emsp; &emsp; &emsp; &emsp; &ensp; : &emsp; {data.date}
          </h5>
          <h5 className="pt-2 pb-2">
            Deskripsi &emsp; &emsp; &emsp; &nbsp; &ensp; &ensp; : &emsp;{" "}
          </h5>
        </div>
        <div className="mt-4 mb-2 grid grid-cols-2 gap-6">
          <div className="pt-1 pb-1 flex justify-center bg-blue-600 rounded-[2px]">
            <button className="text-white w-full">Yes</button>
          </div>
          <div className="pt-1 pb-1 flex justify-center bg-red-600 rounded-[2px]">
            <button className="text-white w-full">No</button>
          </div>
        </div>
        <div className="mb-2">
          <img
            className="w-full"
            src={require("../assets/ex_site.jpg")}
            alt=""
          />
        </div>
        <div className="mb-2">
          <textarea className="w-full p-2" name="" id="">
          </textarea>
        </div>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-[4px]">
            Add Comment
          </button>
        </div>
      </div>
    );
  });

  return <div>
    {arr}
  </div>;
};

export default DeviationDetail;
