import robotHead from "../../assets/robot_head.png";
import classes from './HeroSection.module.css'


export default function HeroSection(){
    return  <section className={classes.hero}>
                <div className={classes.heroContainer}>
                    <div className={classes.heroText}>
                        <h1>Learn Smarter, Not Harder</h1>
                        <p>Your personalized study companion</p>
                        <a href="#get-started" className={classes.ctaButton}>Get Started</a>
                    </div>
                    <div className={classes.heroImage}>
                        <img src={robotHead} alt="Study Pal illustration"/>
                    </div>
                </div>
            </section>
}