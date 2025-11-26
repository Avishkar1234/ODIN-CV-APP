import { useState } from "react";
import "../styles/experience.css";

export default function Experience() {
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [responsibility, setResponsibility] = useState("");
    const [workDuration, setWorkDuration] = useState("");
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
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                    <span className="label">Company Name:</span>
                    <span className="value">{companyName}</span>
                </div>
            )}

            {/* Job Title */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="position">Job Title</label>
                    <input
                        type="text"
                        id="position"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                    <span className="label">Job Title:</span>
                    <span className="value">{jobTitle}</span>
                </div>
            )}

            {/* Responsibility */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="responsibility">Responsibility</label>
                    <input
                        type="text"
                        id="responsibility"
                        value={responsibility}
                        onChange={(e) => setResponsibility(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                    <span className="label">Responsibility:</span>
                    <span className="value">{responsibility}</span>
                </div>
            )}

            {/* Duration */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="text"
                        id="duration"
                        value={workDuration}
                        onChange={(e) => setWorkDuration(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                    <span className="label">Duration:</span>
                    <span className="value">{workDuration}</span>
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
