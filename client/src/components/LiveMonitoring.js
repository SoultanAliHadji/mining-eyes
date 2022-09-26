import "../App.css";
import Dropdown from "./Dropdown";

const LiveMonitoring = () => {
  return (
    <div className="bg-white-400 h-screen">
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
              <h3 className="flex justify-center font-semibold p-2">
                List CCTV
              </h3>
              <button className="text-start p-2 text-black focus:bg-blue-600 focus:text-white">
                CCTV BMO2 - E Camera 3
              </button>
              <button className="text-start p-2 text-black focus:bg-blue-600 focus:text-white">
                CCTV BMO2 - Blok [X]
              </button>
              <button className="text-start p-2 text-black focus:bg-blue-600 focus:text-white">
                CCTV BMO2 - 7West Camera 1
              </button>
              <button className="text-start p-2 text-black focus:bg-blue-600 focus:text-white">
                CCTV BMO2 - PIT E1
              </button>
              <button className="text-start p-2 text-black focus:bg-blue-600 focus:text-white">
                CCTV BMO2 - Low Wall Pit E
              </button>
            </div>
          </div>
          <div className="border col-start-4 col-end-9">
            <div>
              <div>
                <img src={require("../assets/ex_site.jpg")} alt="" />
              </div>
              <div className="flex justify-end pt-2 pb-2">ldsckdn</div>
              <div className="grid grid-cols-7">
                <div className="col-start-1 col-end-2">
                  <h5 className="font-semibold border-b-2 border-black pb-2">
                    No
                  </h5>
                  <p className="pt-2">1</p>
                </div>
                <div className="col-start-2 col-end-4">
                  <h5 className="font-semibold border-b-2 border-black pb-2">
                    IP
                  </h5>
                  <p className="pt-2">10.1.73.20</p>
                </div>
                <div className="col-start-4 col-end-8 h-max">
                  <h5 className="font-semibold border-b-2 border-black pb-2">
                    Coordinate
                  </h5>
                  <p className="pt-2">X = 0.407222221</p>
                  <p>Y = 0.546181858</p>
                  <p>Z = 0.386315793</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border col-start-9 col-end-12 h-max">
            <h3 className="flex justify-center font-semibold p-2">
              List Notifikasi
            </h3>
            <div className="overflow-auto h-[400px] w-full">
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
              <button className="text-start pt-2 pb-2 active:bg-gray-100 px-4 w-full">
                <label className="text-[14px]" htmlFor="">
                  Wed, 21 Sep 2022 04:50:27 GMT
                </label>
                <label class="float-right mt-2" htmlFor="">
                  HD
                </label>
                <br />
                <label htmlFor="">CCTV BMO2-7West Camera 1</label>
              </button>
            </div>
            <div className="p-2 flex justify-end">
              <a
                className="text-[18px] text-blue-600 hover:text-blue-800 underline"
                href=""
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
