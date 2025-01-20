import Dog from "./components/Dog";

function App() {
  return (
    <div className="App">
      <Dog
        name="Husky"
        img="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg"
        color="brown"
        // isBlueEyed={false}
        age={5}
      />
      <Dog
        name="Karabaş"
        img="https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_640.jpg"
        color="black"
        // isBlueEyed={false}
        age={3}
      />
      <Dog
        name="Kangal"
        img="https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_640.jpg"
        // color="gray"
        // isBlueEyed={true}
        isBlueEyed
        age={7}
      />
    </div>
  );
}

export default App;
