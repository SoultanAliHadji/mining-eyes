import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Coordinate = ({ current }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get("/cam")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-7">
      {data.slice(current, current + 1).map((data) => (
        <div className="col-start-1 col-end-2" key={data.id}>
          <h5 className="font-semibold border-b-2 border-black pb-2 pl-2">
            No
          </h5>
          <p className="pt-2 pl-2">{data.no}</p>
        </div>
      ))}
      {data.slice(current, current + 1).map((data) => (
        <div className="col-start-2 col-end-4" key={data.id}>
          <h5 className="font-semibold border-b-2 border-black pb-2">IP</h5>
          <p className="pt-2">{data.ip}</p>
        </div>
      ))}
      {data.slice(current, current + 1).map((data) => (
        <div className="col-start-4 col-end-8 h-max" key={data.id}>
          <h5 className="font-semibold border-b-2 border-black pb-2">
            Coordinate
          </h5>
          <p className="pt-2">X = {data.xcoordinate}</p>
          <p>Y = {data.ycoordinate}</p>
          <p>Z = {data.zcoordinate}</p>
        </div>
      ))}
    </div>
  );
};

export default Coordinate;
