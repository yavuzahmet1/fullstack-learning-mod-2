import React from "react";

//? aplikasyonun herhangi bir yerinde gecikme oluştuğunda otomatik loading.js dosyası render edilir
const Loading = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
