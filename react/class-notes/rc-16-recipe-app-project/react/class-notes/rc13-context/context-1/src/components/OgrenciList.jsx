import React from 'react'
import OgrenciItem from './OgrenciItem';

const OgrenciList = () => {
  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2014/11/23/18/12/school-543041_1280.jpg"
        alt=""
      />
      <h2 style={{ textAlign: "center", background: "pink" }}>
        ÖĞRENCİ LİSTESİ
      </h2>

      <OgrenciItem />
    </div>
  );
}

export default OgrenciList