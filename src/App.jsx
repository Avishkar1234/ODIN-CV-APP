import { useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    phonePrefix: "+91",
  });

  const [education, setEducation] = useState({
    university: "",
    major: "",
    duration: "",
  });

  const [experience, setExperience] = useState({
    companyName: "",
    jobTitle: "",
    responsibility: "",
    workDuration: "",
  });

  return (
    <div id="app-container">
      <h1>CV builder</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience} />
    </div>
  );
}

export default App;
