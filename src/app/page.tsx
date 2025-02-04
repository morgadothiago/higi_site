import Header from "./components/header";
import Main from "./components/main";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="bg-[#2582A4] min-h-screen overflow-x-hidden">
      <Header />
      <Main />
      <Services />
    </div>
  );
}
