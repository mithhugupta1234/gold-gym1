import React from "react";
import "./OurPrograms.css";
import corporate from "../assets/Corporate-Membership.png";
import personal from "../assets/Group-Program-1.png";
import group from "../assets/Personal-training-1.png";


export default function Programs() {
    return (
        <section className="programs">
            <div className="container">
                <h2>Our Programs</h2>
                <p className="program-intro">
                    The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense of community among members, providing social support and encouragement, which can be instrumental in maintaining consistency in their fitness journey.
                </p>

                <div className="program-row">
                    <div className="program-img">
                        <img src={corporate} alt="Corporate Membership" />
                    </div>

                    <div className="program-content">
                        <h3>Corporate Membership</h3>
                        <p>
                            Don’t have time to go to the gym? We get the gym to you. Gold's Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.
                        </p>
                    </div>
                </div>

                <div className="program-row ">
                    <div className="program-content">
                        <h3>Personal Training</h3>
                        <p>
                            Gold's Gym India is known for the competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Gold’s Gym India personal training program is for them.
                        </p>
                    </div>
                    <div className="program-img">
                        <img src={group} alt="Group Program" />
                    </div>
                </div>
                <div className="program-row">
                    <div className="program-img">
                        <img src={personal} alt="Personal Training" />
                    </div>
                    <div className="program-content">
                        <h3>Group Program</h3>
                        <p>
                            Gold's Gym India provides a variety of group fitness programs such as dance fitness, yoga, HIIT, and much more tailored to cater to diverse fitness preferences and goals. These group programs offer a supportive environment and a sense of community while engaging participants in fun and effective workouts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}