import "./App.css";
import insta from "./instagramlogo.png";
import mail from "./gmail.jpeg";
import github from "./githublogo.png";
export default function app() {
  return (
    <div id="id">
      <div id="id1">
        <p>My Own Portfolio</p>
      </div>
      <div id="id2">
        <p>
          <b id="id3">Profile</b>
        </p>
        <p>
          Hi! Everyone, My name is Kantiboina Aditya. I am from Kakinada,Andhra
          Pradesh
        </p>
        <p>I am pursuing my B-Tech 3rd year in Vitap university.</p>
        <p>
          I am doing CSE with specialization in Artificial Intelligence and
          Machine Learning.
        </p>
        <p>I completed my Intermediate inKSN Junior College.</p>
        <p>I Completed my SSC in ChaCha Vidya Niketan,Peddapuram</p>
        <p>
          I spend most of my time on Project works as well as i am always active
          on Linkedin.
        </p>
        <p>
          I like to enjoy my time watching anime and im good at playing guitar.
        </p>
        <p>I like to listen music very much and i watch movies very often.</p>
      </div>
      <div id="id9">
        <p id="id3">
          <b>Skills</b>
        </p>
        <span id="id6">Java</span>
        <span id="id6">Python</span>
        <span id="id6">Data Structures and Algorithms</span>
        <span id="id6">HTML & CSS</span>
        <span id="id6">R Language</span>
        <span id="id6">SQL</span>
        <span id="id6">JavaScript</span>
      </div>
      <div id="id10">
        <p id="id12">
          <b>Projects</b>
        </p>
        <span id="id11">Online Plants selling </span>
        <span id="id11">Driver drowsiness alert</span>
        <span id="id11">Heart and Bp measuring watch</span>
        <span id="id11">Hand written recognition and generation</span>
      </div>
      <div id="id4">
        <p id="id3">Contact</p>
        <span id="id5">
          <a id="id8" href="mailto:adityakantiboina9@gmail.com">
            Email
          </a>
        </span>
        <a href="mailto:adityakantiboina9@gmail.com">
          <img src={mail} alt="Instagram logo" height={50} />
        </a>
        <span id="id5">
          <a
            id="id8"
            href="https://instagram.com/adityakantiboina?igshid=NGVhN2U2NjQ0Yg=="
          >
            Instagram
          </a>
        </span>
        <a href="https://instagram.com/adityakantiboina?igshid=NGVhN2U2NjQ0Yg==">
          <img src={insta} alt="Instagram logo" height={50} />
        </a>
        <span id="id5">
          <a id="id8" href="https://github.com/Adityakantiboina">
            Github
          </a>
        </span>
        <a href="https://github.com/Adityakantiboina">
          <img src={github} alt="Instagram logo" height={50} />
        </a>
      </div>
    </div>
  );
}
