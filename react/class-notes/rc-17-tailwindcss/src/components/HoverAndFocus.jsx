import React from "react";

const HoverAndFocus = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">Hover And Focus</h1>
      <div>
        <button className="w-40 bg-sky-400 text-slate-50 rounded-full py-2 mx-2 hover:bg-sky-600 hover:shadow-slate-400 ">
          Save
        </button>
        <button className="w-40 bg-yellow-400 text-white rounded-full py-2 mx-2 hover:bg-yellow-600 hover:shadow-slate-400 focus:ring-4 focus:ring-yellow-200">
          Edit
        </button>
      </div>
      <div className="mt-2">
        <input
          type="email"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 focus:outline-red-600 peer"
        />
        <p className="mt-2 text-red-600 hidden peer-invalid:block">
          Please provide a valid email
        </p>
      </div>
    </div>
  );
};

export default HoverAndFocus;
