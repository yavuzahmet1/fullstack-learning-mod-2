import Card from "./components/card/Card";
import data from "./data";

function App() {
  console.log(data);

  return (
    <div className="App">
      <h1>LANGUAGES</h1>
      {/* //? Rendering Lists */}
      {/* //* Each child in a list should have a unique "key" prop. React liste içindeki her bir elemanın uniqe bir key'e sahip olmasını ister */}
      {data.map(({ id, language, img }) => (
        <Card key={id} language={language} img={img} />
      ))}

      {/* //! Birden fazla statemet kullanicaksa o zaman fonksiyonun suslu  ve return keywordu kullanamsi gerekir. */}
      {/* {data.map((item) => {
        const { language, img, id } = item;
        return <Card key={id} language={language} img={img} />;
      })} */}
      {/* {data.map((item) => (
        <Card key={item.id} language={item.language} img={item.img} />
      ))} */}
      {/* <Card language={data[0].language} img={data[0].img} />
      <Card language={data[1].language} img={data[1].img} />
      <Card language={data[2].language} img={data[2].img} /> */}
    </div>
  );
}

export default App;
