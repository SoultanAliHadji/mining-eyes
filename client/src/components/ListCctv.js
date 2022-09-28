import React, { useState, useEffect } from "react";
import "../App.css";

const ListCctv = () => {
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
    <div className="grid grid-rows-6">
      <h3 className="flex justify-center font-semibold p-2">List CCTV</h3>
      {data.map((post) => (
        <button
          className="text-start p-2 text-black focus:bg-blue-600 focus:text-white"
          key={post.id}
        >
          {post.cctv}
        </button>
      ))}
    </div>
  );
};

export default ListCctv;
