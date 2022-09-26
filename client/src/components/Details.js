import "../App.css";
import Dropdown from "./Dropdown";

const Details = () => {
  return (
    <div>
      <div className="bg-white drop-shadow-md">
        <div className="container mx-auto">
          <div>
            <nav>
              <div className="pt-6 pb-6 grid grid-cols-2">
                <div className="flex justify-start grid grid-cols-5">
                  <div>
                    <a href="">
                      <img
                        className="w-24"
                        src={require("../assets/beraucoal-logo.png")}
                        alt="logo beraucoal"
                      />
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a href="">Live Monitoring</a>
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
            <div>
              <h3 className="font-semibold text-[22px] pt-2 pb-2 border-b-2 border-gray-100">
                Terdeteksi HD
              </h3>
            </div>
            <div>
              <h5 className="pt-2 pb-2">
                CCTV &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; : &emsp; CCTV
                BMO2
              </h5>
              <h5 className="pt-2 pb-2">
                Waktu &emsp; &emsp; &emsp; &emsp; &emsp; &ensp; : &emsp; Wed, 21
                Sep 2022 04:50:27 GMT
              </h5>
              <h5 className="pt-2 pb-2">
                Deskripsi &emsp; &emsp; &emsp; &nbsp; &ensp; &ensp; : &emsp;{" "}
              </h5>
            </div>
            <div className="mt-4 mb-2 grid grid-cols-2 gap-6">
              <div className="pt-1 pb-1 flex justify-center bg-blue-600 rounded-[2px]">
                <button className="text-white">Yes</button>
              </div>
              <div className="pt-1 pb-1 flex justify-center bg-red-600 rounded-[2px]">
                <button className="text-white">No</button>
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
              <textarea className="w-full p-2" name="" id=""></textarea>
            </div>
            <div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-[4px]">
                Add Comment
              </button>
            </div>
          </div>
          <div className="col-start-7 col-end-10 border">
            <h3 className="flex justify-center font-semibold p-2">
              List Notifikasi
            </h3>
            <div className="overflow-auto h-[540px]">
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 w-full  border-b-2 border-gray-200 px-4">
                <label htmlFor="">21-09-2022 10:51:36</label>
                <label className="float-right mt-2" htmlFor="">
                  Person
                </label>
                <br />
                <label htmlFor="">HD CCTV BMO2-7West Camera 1</label>
                <br />
                <label
                  className="bg-sky-400 px-2 text-white font-semibold rounded-[4px]"
                  htmlFor=""
                >
                  Butuh Validasi
                </label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
