import Panels from "@/components/Panels";
import React from "react";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Bmi from "@/components/Bmi";
import Health from "@/components/Health";
import ScientificCalc from "@/components/ScientificCalc";
import Usher from "@/components/Usher";
import Zakat from "@/components/Zakat";
import Conversion from "@/components/Conversion";

const LandingPage = () => {
  const [health,setHealth]=useState(false);
  const [usher ,setUsher]=useState(false);
  const [zakat,setZakat]=useState(false);
  const [conversion,setConversion]=useState(false);
  const [BMI,setBMI]=useState(false);
  const [scientific,setScientific]=useState(false);
  return (
    <div className="w-full">
      <Navbar />
      <div className="mt-10">
        <Panels setHealth={setHealth} setUsher={setUsher} setZakat={setZakat} setConversion={setConversion} setBMI={setBMI} setScientific={setScientific}/>

        <div className="container px-16  mt-2 mx-auto">
        {health&& <Health/>}
        {usher && <Usher/>}
        {zakat&& <Zakat/>}
        {conversion&& <Conversion/>}
        {BMI&&<Bmi/>}
        {scientific&&<ScientificCalc/>}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
