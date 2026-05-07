import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Background from "./components/Background/Background";
import Skills from "./sections/Skills/Skills";
import Cursor from "./components/Cursor/Cursor";


function App() {
  return (
    <>
      <Cursor />
      <Background />
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
}

export default App;
