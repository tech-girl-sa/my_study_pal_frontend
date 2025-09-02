
import classes from './Features.module.css'


export default function Features(){
    return <section className={classes.features}>
            <div className={classes.featureItem}>
                <h2>Personalized Study Plans</h2>
                <p>Tailor your learning experience based on your academic level.</p>
            </div>
            <div className={classes.featureItem}>
                <h2>Interactive Course Chats</h2>
                <p>Ask questions and get real-time answers for each course.</p>
            </div>
            <div className={classes.featureItem}>
                <h2>Adaptive Quizzes</h2>
                <p>Test your knowledge with quizzes that adapt to your progress.</p>
            </div>
</section>
}