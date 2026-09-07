import { useState } from "react";
import "../styles/education.css";

export default function Education({ education, setEducation }) {
  const [edit, setEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
  }

  return (
    <form onSubmit={handleSubmit} className="education-form">
      {/* University */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="university">University</label>
          <input
            type="text"
            id="university"
            value={education.university}
            onChange={(e) =>
              setEducation({ ...education, university: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">University:</span>
          <span className="value">{education.university}</span>
        </div>
      )}

      {/* Major */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="major">Major</label>
          <input
            type="text"
            id="major"
            value={education.major}
            onChange={(e) =>
              setEducation({ ...education, major: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">Major:</span>
          <span className="value">{education.major}</span>
        </div>
      )}

      {/* Duration */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={education.duration}
            max={10}
            min={5}
            onChange={(e) =>
              setEducation({ ...education, duration: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">Duration:</span>
          <span className="value">{education.duration}</span>
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
