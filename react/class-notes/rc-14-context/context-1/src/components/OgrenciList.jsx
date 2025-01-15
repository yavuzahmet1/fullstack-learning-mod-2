import React from 'react'
import OgrenciItem from './OgrenciItem';

const OgrenciList = () => {
  return (
    <div>
      <img
        src="https://gelecekegitimde.com/wp-content/uploads/2015/01/fft99_mf3019637.jpeg"
        alt=""
      />
      <h2 style={{textAlign:"center", background:"pink"}}>ÖĞRENCİ LİSTESİ</h2>

      <OgrenciItem/>
    </div>
  );
}

export default OgrenciList