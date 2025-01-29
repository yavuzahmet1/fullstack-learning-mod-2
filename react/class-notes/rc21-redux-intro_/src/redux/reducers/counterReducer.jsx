import React from 'react'
//mutfak

const counterReducer = (state = { sayac: 0, text1: "starting..." }, { type, payload1 }) => {

  switch (type) {
    case "INCREASE":
      return { sayac: state.sayac + 1, text1: payload1 }
    case "RESET":
      return { sayac: 0, text1: payload1 }
    case "DECREASE":
      return { sayac: state.sayac - 1, text1: payload1 }


    default:
      return state;
  }

}

export default counterReducer