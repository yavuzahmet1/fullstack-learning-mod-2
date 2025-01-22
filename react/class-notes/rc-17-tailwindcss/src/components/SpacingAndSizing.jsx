import React from "react";

const SpacingAndSizing = () => {
  return (
    <div>
      <h3 className="text-2xl">Spacing And Sizing</h3>
      <div>
        <button className="bg-blue-500 text-white p-4 m-1 ">Tıkla</button>
        <button className="bg-blue-500 text-white px-4 ">Tıkla</button>
        <button className="bg-blue-500 text-white ml-4 ">Tıkla</button>
        <button className="bg-blue-500 text-white ms-4 ">Tıkla</button>
      </div>
      <div>
        <button className="bg-green-500 mx-4 px-4 py-2 border-green-700 rounded-md ">
          Gönder
        </button>
        <button className="bg-green-500 mx-4 px-4 py-2 border-green-700 border-[3px] rounded-[10px] ">
          Gönder
        </button>
        <button className="bg-green-500 mx-4 px-4 py-2 border-green-700 border-[3px] rounded-full ">
          Gönder
        </button>
        <button className="bg-green-500 mx-4 px-4 py-4 border-green-700 border-[3px] rounded-[50%] "></button>
      </div>
      <div>
        <button className="bg-amber-500 w-20 rounded-full py-2 mx-2 ">
          Kaydet
        </button>
        <button className="bg-amber-500 w-1/2 rounded-full py-2 mx-2 ">
          Kaydet
        </button>
        <button className="bg-amber-500 w-[300px] rounded-full py-2 mx-2 ">
          Kaydet
        </button>
        <button className="bg-amber-500 w-1/2 max-w-[500px] rounded-full py-2 mx-2 ">
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default SpacingAndSizing;
