import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios"

const Ayam = () => {
  const [data, setData] = useState([{}]);
  const [current, setCurrent] = useState();

  useEffect(() => {
    axios.get("cam")
    .then(res => {
      console.log("Getting from ::::", res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  }, []);

  const arr = data.map((data) => {
    return (
        <button
          className="text-start p-2 text-black focus:bg-blue-600 focus:text-white"
          key={data.id}
          onClick={() => setCurrent(data.id)}
        >
          {data.cctv}
        </button>
    )
  })

  return (
    <div className="grid grid-rows-6">
      <h3 className="flex justify-center font-semibold p-2">List CCTV</h3>
      {arr}
      <h1>{current}</h1>
    </div>
  );
};

export default Ayam;
