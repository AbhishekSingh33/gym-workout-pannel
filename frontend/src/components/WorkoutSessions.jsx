import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
         A full-body workout combining resistance training and functional movements. Focuses on sculpting muscles, boosting metabolism, and building overall strength.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
         Gentle and refreshing, perfect for beginners and stress relief.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Burnout Challenge</h4>
            <p>
              Get ready for an explosive high-intensity interval training (HIIT) session designed to torch fat and build endurance.
            </p>
          </div>
          <div>
            <h4>Strength & Sculpt Bootcamp.</h4>
            <p>
              Build muscle, improve posture, and feel strong from the inside out.
            </p>
          </div>
          <div>
            <h4>Yoga & Mindfulness Flow.</h4>
            <p>
              Unwind your mind and body with a mix of yoga postures and breathing exercises.
            </p>
          </div>
          <div>
            <h4> Cardio Dance Party</h4>
            <p>
              Turn up the music and burn calories with this fun, fast-paced dance workout!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;