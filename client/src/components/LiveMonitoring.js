import "../App.css";
import Dropdown from "./Dropdown";
import ListCctv from "./ListCctv";
import Coordinate from "./Coordinate";

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
            <ListCctv />
          </div>
          <div className="border col-start-4 col-end-9">
            <div>
              <div>
                <img src={require("../assets/ex_site.jpg")} alt="" />
              </div>
              <div className="flex justify-end pt-2 pb-2">ldsckdn</div>
              <Coordinate />
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
                href="/details"
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
