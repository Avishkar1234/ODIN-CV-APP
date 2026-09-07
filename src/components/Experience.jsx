import { useState } from "react";
import "../styles/experience.css";

export default function Experience({ experience, setExperience }) {
  const [edit, setEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
  }

  return (
    <form onSubmit={handleSubmit} className="experience-form">
      {/* Company Name */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            id="company-name"
            value={experience.companyName}
            onChange={(e) =>
              setExperience({ ...experience, companyName: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">Company Name:</span>
          <span className="value">{experience.companyName}</span>
        </div>
      )}

      {/* Job Title */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="position">Job Title</label>
          <input
            type="text"
            id="position"
            value={experience.jobTitle}
            onChange={(e) =>
              setExperience({ ...experience, jobTitle: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">Job Title:</span>
          <span className="value">{experience.jobTitle}</span>
        </div>
      )}

      {/* Responsibility */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="responsibility">Responsibility</label>
          <input
            type="text"
            id="responsibility"
            value={experience.responsibility}
            onChange={(e) =>
              setExperience({ ...experience, responsibility: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">Responsibility:</span>
          <span className="value">{experience.responsibility}</span>
        </div>
      )}

      {/* Duration */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            value={experience.workDuration}
            onChange={(e) =>
              setExperience({ ...experience, workDuration: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">Duration:</span>
          <span className="value">{experience.workDuration}</span>
        </div>
      )}

      {!edit && (
        <button type="button" onClick={() => setEdit(true)}>
          Edit
        </button>
      )}

      {edit && <button type="submit">Submit</button>}
    </form>
  );
}
