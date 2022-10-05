import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ListNotification = () => {
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

  const arr = data.map((data, index) => {
    return (
      <a href="/details">
        <button
          className="text-start pt-2 pb-2 active:bg-gray-200 px-4 w-full"
          key={data.id}
        >
          <p class="float-right mt-2" htmlFor="">
            {data.object}
          </p>
          <p className="text-[14px]" htmlFor="">
            {data.date}
          </p>
          <p htmlFor="">{data.cctv}</p>
        </button>
      </a>
    );
  });

  return (
    <div>
      <h3 className="flex justify-center font-semibold p-2 border-b-2 border-gray-200">List Notifikasi</h3>
      <div className="overflow-auto h-[400px] w-full">{arr}</div>
      <div className="p-2 flex justify-end">
        <a
          className="text-[18px] text-blue-600 hover:text-blue-800 underline"
          href="/details"
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default ListNotification;
