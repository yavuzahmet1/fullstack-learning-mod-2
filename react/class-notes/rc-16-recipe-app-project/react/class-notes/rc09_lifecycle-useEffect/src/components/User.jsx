import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dob: "",
    picture: "",
    location: "",
    cell: "",
  });
  //   const getUser = () => {
  //     axios
  //       .get("https://randomuser.me/api/")
  //       .then((result) => console.log(result.data.results[0]))
  //       .catch((error) => console.log(error));
  //   };
  const getUser = async () => {
    try {
      const result = await axios.get("https://randomuser.me/api/");
      setUserData(result.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  //? componentDidMount
  useEffect(() => {
    //* bu kısım ilk render sonrasi bir kere calisir.
    const timerId = setInterval(getUser, 5000);
    getUser();

    //? componentWillUnmount
    return () => {
      //?* bu kısım da component DOM'Dan kaldırıldıgında bir kere calirsir.
      console.log("timer iptal edildi");
      clearInterval(timerId);
    };
  }, []); //? depedency array

  console.log(userData);

  //   getUser();
  return (
    <div>
      <img className="rounded-circle m-4" src={userData.picture.large} alt="" />
      <p>Hi, My name is</p>
      {/* //* ilk renderda state değeri initial değer olacağı için hata almamak adına ya state'e initial değerler vermeliyiz ya da optional chaining "?" kontrolü yapmalıyız */}
      <h2>{userData?.name.first + " " + userData?.name.last} </h2>
      <h4>{userData.email} </h4>
      <h5>{userData.dob.date}</h5>
      <h5>{userData.location.city}</h5>
      <h5>{userData.cell}</h5>
      <button onClick={getUser} className="btn btn-warning">
        New User
      </button>
    </div>
  );
};

export default User;
