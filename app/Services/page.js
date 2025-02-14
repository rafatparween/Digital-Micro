

import Head from "next/head";
import PrinterGuide from "./content/PrinterGuide";
import PrinterSetup from "./content/PrinterSetup";
import Solutions from "./content/Solutions";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Support from "./content/Support";
import Chatlink from "./content/Chatlink";
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Avoid from "../components/Avoid";




// import ChatSection from "../components/ChatSection";



import Assistance from "../Components/Assistance";
import CustomNavbar from "../Components/CustomNavbar";
import Digonode from "../Components/Digonode";
import FooterSection from "../Components/FooterSection";
import Header from "../Components/Header";
import Helppage from "../Components/Helppage";
import Technicians from "../Components/Technicians";


// import './globals.css'
function Home() {
  return (
    <>
    <CustomNavbar/>
    <Header/>
    
      <PrinterSetup />
      <Digonode/>
      {/* <ChatSection/> */}
      <Technicians/>
      <Assistance/>
      {/* <Avoid/> */}
      <Helppage/>
      <Support />
      <Solutions />
      <PrinterGuide />
     <FooterSection/>
     
    </>
  );
}

export default Home;