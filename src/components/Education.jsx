import { useState } from "react";
import "../styles/education.css";

export default function Education() {
    const [universityName, setUniversityName] = useState("");
    const [major, setMajor] = useState("");
    const [duration, setDuration] = useState("");
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
                        value={universityName}
                        onChange={(e) => setUniversityName(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                    <span className="label">University:</span>
                    <span className="value">{universityName}</span>
                </div>
            )}

            {/* Major */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="major">Major</label>
                    <input
                        type="text"
                        id="major"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                    <span className="label">Major:</span>
                    <span className="value">{major}</span>
                </div>
            )}

            {/* Duration */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="text"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                    <span className="label">Duration:</span>
                    <span className="value">{duration}</span>
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
