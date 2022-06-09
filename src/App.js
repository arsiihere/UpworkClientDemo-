import Header from "./components/UI/Header";
import Hero from "./components/UI/Hero";
import { Card } from "./components/UI/Card";
import Button from "./components/UI/Button";
import Footer from "./components/UI/Footer";
function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
      </div>
      <div className="px-36 pb-36">
        <Hero>
          <Card class="pt-52 ">
            <h1 className="text-6xl font-bold flex flex-col gap-1 mb-7">
              need some help
              <span className="text-[#F0998D]">creating content ?</span>
            </h1>
            <p className="text-base text-gray-400 w-[566px] pb-14">
              Let us show you what we can do - Provide a brief description of
              your brand and the month for which you want help on content and we
              will provide you with a few ideas for publication, free of charge.
            </p>
            <Button
              text="Generate Content Ideas"
              buttonClass="font-bold px-11 py-4 text-white bg-[#F0998D] rounded-xl shadow-lg shadow-red-300/60 "
            />
          </Card>
        </Hero>
      </div>
      <div className="px-36 py-28 bg-[#3B434F] text-white ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
