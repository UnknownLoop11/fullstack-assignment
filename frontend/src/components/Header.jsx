/* eslint-disable react/prop-types */
import homeIcon from "../assets/home.svg";
import arrowIcon from "../assets/arrow.svg";
import { useState } from "react";

const Header = ({ handleSearchCallback }) => {
  const [search, setSearch] = useState("");

  // Callback to parent component to handle search queries
  const handleSearch = () => {
    handleSearchCallback(search);
    setSearch("");
  };

  return (
    <header>
      <div className="bg-black flex flex-row justify-between rounded-t-xl py-5 px-20">
        <div className="text-white flex items-center gap-x-2">
          <img src={homeIcon} alt="" width={32} height={32} />
          <a className="text-2xl font-sans font-semibold" href="/">
            Abstract{" "}
          </a>
          <span className="align-top text-xl font-light"> | Help Center</span>
        </div>

        <div className="mr-32">
          <button className="text-white border-2 border-white font-normal py-2 px-4 rounded-lg hover:bg-white hover:text-black">
            Submit a request
          </button>
        </div>
      </div>

      <div className=" bg-accent1 flex flex-col gap-y-8 w-screen h-96 items-center justify-center">
        <div className="font-semibold text-5xl tracking-wide">
          How can we help?
        </div>
        <div className="border border-black p-2 flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Search "
            className=" py-2 px-3 ml-4"
            style={{ width: "600px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDownCapture={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="hover:scale-105 hover:bg-gray-400 p-2"
            onClick={handleSearch}
          >
            <img src={arrowIcon} alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
