import "../App.css";

function Dropdown() {
  return (
    <button className="relative flex justify-center items-center bg-white focus:outline-none text-gray-600 rounded group">
      <img className="w-8" src={require("../assets/account.png")} alt="" />
      <div className="border-l p-2">
        <svg
          className="w-3 h-3"
          stroke="Blue"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-width="2"
            d="
            M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      <div className="absolute hidden group-focus:block top-full w-[100px] w-max bg-white shadow-md mt-6 rounded">
        <ul className="text-left border rounded">
          <li className="px-4 py-1 border-b flex justify-center">Admin</li>
          <li className="px-4 py-1 hover:bg-gray-100 border-b flex justify-center">
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </button>
  );
}

export default Dropdown;
