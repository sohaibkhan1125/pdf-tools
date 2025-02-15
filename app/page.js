import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="overflow-hidden">
    <Navbar/>
    <div className="mb-5">
    <Main/>
    </div>
    <Footer/>
   </div>
  );
}
