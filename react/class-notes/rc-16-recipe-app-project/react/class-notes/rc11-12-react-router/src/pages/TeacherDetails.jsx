import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/Loading_icon.gif";
const TeacherDetails = () => {

  const navigate=useNavigate()
  //!kısayol
  // const{state:{kisi}}=useLocation()
  //!uzun yol

  const { id } = useParams();
  const [kisi, setKisi] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((veri) => setKisi(veri))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (error) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div>
        <img src={spinner} alt="" />
      </div>
    );
  }

  return (
    <div className="container text-center mt-4">
      <div>
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${kisi.id}`}
          alt=""
          width="300px"
        />
        <h4>{kisi.username} </h4>
        <h5>{kisi.name} </h5>
        <h5>{kisi.phone} </h5>
        <h5>{kisi.website} </h5>
        <h5>{kisi.email} </h5>
      </div>
      <div>
        <button className="btn btn-warning" onClick={()=>navigate(-1)}>GO BACK</button>

        <button className="btn btn-primary"  onClick={()=>navigate("/")}>GO HOME</button>
      </div>
    </div>
  );
};

export default TeacherDetails;
