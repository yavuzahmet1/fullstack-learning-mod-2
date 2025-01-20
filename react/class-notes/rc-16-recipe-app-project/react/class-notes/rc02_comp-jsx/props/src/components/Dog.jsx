import Name from "./Name";

const Dog = ({ name, img, color = "gray", isBlueEyed, age }) => {
  //? destr.
  //   const { name, img, color } = props;
  return (
    <div>
      <Name name={name} />
      {/* //* JSX içinde if/else, for döngüleri kullanılamaz, ternary kullanılabilir */}
      <p>Blue eyed?: {isBlueEyed ? "Yes" : "No"} </p>
      <img src={img} alt="dog" />
      <p style={{ backgroundColor: color, color: "white" }}>Color: {color} </p>
      <p>{age} </p>
    </div>
  );
};
export default Dog;

// const Dog = (props) => {
//     return (
//       <div>
//         <h2>{props.name} </h2>
//         <img src={props.img} alt="dog" />
//         <p>Color: {props.color} </p>
//       </div>
//     );
//   };
//   export default Dog;
