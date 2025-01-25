import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const OgrenciItem = () => {
  // 3-(contex consumer) globale de taımladığım context alanında değerleri buraya çağırmak

  const { students, changeColor } = useContext(StudentContext)
  console.log(students)

  return (
    <div  >
      {
        students.map((i) => (
          <div style={{ background: i.color }} key={i.id}>
            <h3>Name :{i.name}</h3>
            <h4>Email :{i.email}</h4>
            <h4>Age :{i.age}</h4>
            Color : <input type="text" value={i.color} onChange={(e) => changeColor(i.id, e.target.value)} />
          </div>
        ))
      }

    </div>
  );
}

export default OgrenciItem