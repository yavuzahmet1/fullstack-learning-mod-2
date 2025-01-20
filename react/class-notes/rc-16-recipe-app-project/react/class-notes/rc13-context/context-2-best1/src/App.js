
import KullaniciProvider from "./context/KullaniciProvider";
import GosterUsers from "./pages/GosterUsers"

const App = () => {





  return (
    <KullaniciProvider>
      <GosterUsers />
    </KullaniciProvider>
  );
}

export default App
