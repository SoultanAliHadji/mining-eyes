import React, { useState, useEffect } from "react";
import "../App.css";

const Coordinate = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/cam")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-7">
        {data.slice(0, 1).map((post) => (
        <div className="col-start-1 col-end-2" key={post.id}>
            <h5 className="font-semibold border-b-2 border-black pb-2 pl-2">
                No
            </h5>
            <p className="pt-2 pl-2">{post.id+1}</p>
        </div>
        ))}
        {data.slice(0, 1).map((post) => (
        <div className="col-start-2 col-end-4" key={post.id}>
            <h5 className="font-semibold border-b-2 border-black pb-2">
                IP
            </h5>
            <p className="pt-2">{post.ip}</p>
        </div>
        ))}
        {data.slice(0, 1).map((post) => (
        <div className="col-start-4 col-end-8 h-max" key={post.id}>
            <h5 className="font-semibold border-b-2 border-black pb-2">
                Coordinate
            </h5>
            <p className="pt-2">X = {post.xcoordinate}</p>
            <p>Y = {post.ycoordinate}</p>
            <p>Z = {post.zcoordinate}</p>
        </div>
        ))}
    </div>
  );
};

export default Coordinate;
