import "./styles.css";
const profileData = {
  name: "Kai Grao",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt dolore deserunt corrupti sunt modi vitae illo culpa quia?",
  skills: [
    "Html, Css",
    "Javascript",
    "Web Design",
    "Git and Github",
    "React",
    "Angular",
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
      <Skills skill={profileData.skills} />
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
function Skills(props) {
  return (
    <div className="skill">
      {props.skill.map((e, index) => (
        <span key={index} id={"id" + index}>
          {e}
        </span>
      ))}
    </div>
  );
}
