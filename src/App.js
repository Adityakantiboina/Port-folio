import React from "react";
import "./App.css";
import insta from "./instagramlogo.png";
import mail from "./gmail.jpeg";
import github from "./githublogo.png";

export default function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Kantiboina Aditya</h1>
        <p>Web Developer | Machine Learning Enthusiast</p>
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <section>
          Hi! I'm Kantiboina Aditya, a passionate web developer and machine
          learning enthusiast based in Kakinada, Andhra Pradesh. I'm currently
          pursuing my B.Tech in Computer Science with a specialization in
          Artificial Intelligence and Machine Learning. I am doing CSE with
          specialization in Artificial Intelligence and Machine Learning.I
          completed my Intermediate inKSN Junior College.I Completed my SSC in
          ChaCha Vidya Niketan,Peddapuram. I spend most of my time on Project
          works as well as i am always active on Linkedin.I like to enjoy my
          time watching anime and im good at playing guitar.I like to listen
          music very much and i watch movies very often.
        </section>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>Data Structures and Algorithms</li>
          <li>HTML & CSS</li>
          <li>SQL</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Online Plants Selling Website</li>
          <li>Driver Drowsiness Alert System</li>
          <li>Heart and Blood Pressure Monitoring Watch</li>
          <li>Handwritten Text Recognition and Generation</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:adityakantiboina9@gmail.com">
            adityakantiboina9@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/adityakantiboina/">LinkedIn</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/Adityakantiboina">Github</a>
        </p>
      </section>
    </div>
  );
}
