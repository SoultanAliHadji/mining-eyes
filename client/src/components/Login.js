import "../App.css";

const Login = () => {
  return (
    <div className="bg-[#565656] h-screen flex items-center justify-center font-Monospace">
      <div>
        <div className="flex justify-center">
          <h1 className="text-white text-[32px] mb-10">LOGIN</h1>
        </div>
        <div className="bg-white rounded-[10px] w-[430px] h-[370px] flex items-center justify-center">
          <div className="text-[24px]">
            <div className="flex justify-center mt-4 mb-10">
              <img className="mr-4 w-10 h-10" src={require("../assets/acc.png")} alt="logo" />
              <input
                className="w-[270px] outline-none focus:w-[330px] duration-300"
                type="text"
                placeholder="Username"
              />
            </div>
            <hr className="w-[430px] mb-10" />
            <div className="flex justify-center mb-10">
              <img className="mr-4 w-10 h-10" src={require("../assets/key.png")} alt="logo" />
              <input
                className="w-[270px] outline-none focus:w-[330px] duration-300"
                type="text"
                placeholder="Password"
              />
            </div>
            <hr className="w-[430px] mb-10" />
            <div className="flex justify-center">
              <a href="/landing">
                <button className="bg-gradient-to-r from-[#A940AB] via-[#D61A74] to-[#F73F96] hover:bg-gradient-to-r hover:from-[#555555] hover:to-[#555555] hover:duration-300 w-44 h-12 rounded-[100px] text-white">
                  LOGIN
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
