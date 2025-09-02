import Footer from "../common/Footer";
import HeroSection from "../home/HeroSection";
import HomeNavBar from "../home/HomeNavBar";
import { useEffect } from "react";
import classes from './Home.module.css'
import Features from "../home/Features";


export default function Home(){
    useEffect(() => {
          document.body.classList.add(classes.homePage);
      
          return () => {
            document.body.classList.remove(classes.homePage);
          };
        }, []);
    
        return (
        <>
    <HomeNavBar></HomeNavBar>
    <HeroSection></HeroSection>

    <Features></Features>
        <Footer></Footer>
   
    </>
    )
}