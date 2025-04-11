import "./styles.css";
const profileData = {
  name: "Kai Grao",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt dolore deserunt corrupti sunt modi vitae illo culpa quia?",
  userSkills: [
    {
      level: "Advanced",
      skill: "React",
      color: "#61DBFB", // React Blue
    },
    {
      level: "Intermediate",
      skill: "JavaScript",
      color: "#F0DB4F", // JavaScript Yellow
    },
    {
      level: "Beginner",
      skill: "HTML",
      color: "#E34C26", // HTML Orange
    },
    {
      level: "Intermediate",
      skill: "CSS",
      color: "#264de4", // CSS Blue
    },
    {
      level: "Advanced",
      skill: "TypeScript",
      color: "#007ACC", // TypeScript Blue
    },
  ],
};

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Details />
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img
        src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
        alt="avatar-img"
      />
    </div>
  );
}

function Details() {
  return (
    <div className="profile-details">
      <NameDesc name={profileData.name} desc={profileData.desc} />
      <Skills skill={profileData.userSkills} />
    </div>
  );
}
function NameDesc(props) {
  return (
    <div className="name-desc">
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  );
}
function Skills({ skill }) {
  return (
    <div className="skill">
      {skill.map((elem, idx) => {
        return (
          <span
            style={{
              backgroundColor: elem.color,
              marginRight: "5px",
              padding: "4px 5px",
              lineHeight: 2,
              borderRadius: "6px",
            }}
            key={idx}
          >
            <span>
              {elem.skill}

              {/* <Emoji level={elem.level} /> */}
            </span>
            <span>
              {elem.level === "Beginner" && "😊"}
              {elem.level === "Intermediate" && "👍"}
              {elem.level === "Advanced" && "💪"}
            </span>
          </span>
        );
      })}
    </div>
  );
}

function Emoji({ level }) {
  let emojiSign = "";
  if (level === "Advanced") {
    emojiSign = "💪";
  } else if (level === "Intermediate") {
    emojiSign = "👍";
  } else {
    emojiSign = "😊";
  }
  return emojiSign;
}
