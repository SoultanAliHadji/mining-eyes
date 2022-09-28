import "../App.css";
import Dropdown from "./Dropdown";

const Landing = () => {
  return (
    <div className="bg-[#F7F7F7] h-screen">
      <div className="bg-white drop-shadow-md">
        <div className="container mx-auto pl-24 pr-24">
          <div>
            <nav>
              <div className="pt-6 pb-6 grid grid-cols-2">
                <div>
                  <a href="/landing">
                    <img
                      className="flex justify-start w-24"
                      src={require("../assets/beraucoal-logo.png")}
                      alt="logo beraucoal"
                    />
                  </a>
                </div>
                <div className="flex justify-end ">
                  <Dropdown />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <h1 className="text-center text-[68px] font-thin mb-6">
            Mining Eyes Analytics
          </h1>
          <h2 className="text-center text-[46px] font-semibold mb-2">
            Detection
          </h2>
          <div className="flex justify-center">
            <div className="bg-white w-[400px] h-[380px] rounded-[4px] flex items-center justify-center shadow-md">
              <div>
                <div className="flex justify-center mb-6">
                  <img
                    className="w-36"
                    src={require("../assets/cctv.png")}
                    alt="cctv"
                  />
                </div>
                <h3 className="text-center text-[28px] font-semibold text-green-700 mb-4">
                  Live Monitoring
                </h3>
                <h4 className="text-center mb-4">
                  Live monitoring object detection
                </h4>
                <div className="flex justify-center">
                  <a href="/livemonitoring">
                    <button className="bg-blue-600 px-4 py-1 rounded-[4px] text-white font-semibold hover:bg-blue-700">
                      Start
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
