import React from "react";
import Sidebar from "./Sidebar";
import { BsLinkedin } from "react-icons/bs";
import { FaArtstation, FaFacebookF } from "react-icons/fa";

function Home() {
  return (
    <div className="flex ">
      <div className="w-5/6 h-screen bg-gray-400 p-6 2xl:ml-80 md:ml-32 sm:ml-28  ">
        <div className="bg-blue-50 rounded-lg shadow-xl pb-11">
          <div className=" h-[250px]">
            <img
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
              src="Pigeon.jpg"
              alt="ProfileBG"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              className="w-40 border-4 border-white rounded-full"
              src="neila.jpeg"
              alt="Profile"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">Nelia Butsko</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="text-gray-700">3D Environment Artist</p>
            <p className="text-sm text-gray-500">
              Ukraine, Zakarpattia oblast, Volovec district
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <div>
                <BsLinkedin
                  onClick={() => window.open("https://www.linkedin.com")}
                />
              </div>
              <div>
                <FaArtstation
                  onClick={() =>
                    window.open("https://www.artstation.com/neos37")
                  }
                />
              </div>
              <div>
                <FaFacebookF
                  onClick={() =>
                    window.open("https://www.facebook.com/mahbub.morshed.1004/")
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-blue-50 rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-700 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24 text-gray-700">
                    Full name:
                  </span>
                  <span className="text-gray-500">Nelia Butsko</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24 text-gray-700">
                    Birthday:
                  </span>
                  <span className="text-gray-500">September 25</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24 text-gray-700">Mobile:</span>
                  <span className="text-gray-500">+380951960151</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24 text-gray-700">Email:</span>
                  <span className="text-gray-500">neliabbutsko@gmail.com</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24 text-gray-700">
                    Location:
                  </span>
                  <span className="text-gray-500">
                    Ukraine, Zakarpattia oblast, Volovec district
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col 2xl:w-2/3">
            <div className="flex-1 bg-blue-50 rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-700 font-bold text-center">
                Skill and Experience
              </h4>
              <div className="flex-1 flex flex-col items-center lg:items-center justify-end px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">
                  <button className="flex items-center bg-gray-600 hover:bg-gray-900 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <span>Blender</span>
                  </button>
                  <button className="flex items-center bg-gray-600 hover:bg-gray-900 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <span>ZBrush</span>
                  </button>
                  <button className="flex items-center bg-gray-600 hover:bg-gray-900 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <span>Autodesk Maya</span>
                  </button>
                </div>
              </div>

              <p className="text-lg text-gray-500 pt-5 text-start tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem enim aliquam laborum explicabo. Pariatur est vero
                aliquid, sit velit optio a error qui dolores maxime nemo hic
                aliquam ratione nisi? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem enim aliquam laborum explicabo.
                Pariatur est vero aliquid, sit velit optio a error qui dolores
                maxime nemo hic aliquam ratione nisi?
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-3/3">
            <div className="flex-1 bg-blue-50 rounded-lg shadow-xl p-6">
              <p className="text-xs text-center text-gray-700 ">
                copyright&copy;Nelia Butsko 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
