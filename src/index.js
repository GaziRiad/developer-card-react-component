import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar src="imgs/7.jpg" />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.src} alt="developer pic" className="avatar" />;
}
function Intro(props) {
  return (
    <div>
      <h1>Riad Hallouch</h1>
      <p>
        Front-end web developer and freelancer at Upwork. when not coding or
        studying, I like to play board games, video-games, and mostly out having
        fun with friends.
      </p>
    </div>
  );
}
function SkillList({ skills }) {
  console.log(skills);
  return skills ? (
    <ul className="skill-list">
      {skills.map((skill) => (
        <DevSkill skill={skill} key={skill.skill} />
      ))}
    </ul>
  ) : null;
}

function DevSkill({ skill }) {
  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === "beginner" && "👶"}
        {skill.level === "intermediate" && "👍"}
        {skill.level === "advanced" && "💪"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
