import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar src="imgs/7.jpg" />
      <div className="data">
        <Intro
          fullName="Riad Hallouch"
          data="Front-end web developer and freelancer at Upwork. when not coding or studying, I like to play board games, video-games, and mostly out having fun with friends."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
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
      <h1>{props.fullName}</h1>
      <p>{props.data}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <DevSkill name="Html + css 💪" backgroundColor="#0284c7" />
      <DevSkill name="Javascript 💪" backgroundColor="#fde047" />
      <DevSkill name="Web design 👍" backgroundColor="#86efac" />
      <DevSkill name="React 👶" backgroundColor="#7dd3fc" />
      <DevSkill name="Git & Github👍" backgroundColor="#e11d48" />
    </div>
  );
}

function DevSkill(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.name}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
