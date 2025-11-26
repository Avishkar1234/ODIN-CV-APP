import { useState } from "react";

export default function Experience() {
    const [companyName, setCompanyName] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [responsibility, setResponsibility] = useState("")
    const [workDuration, setWorkDuration] = useState("")
    const [edit, setEdit] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setEdit(false)
    }

    function handleEdit() {
        setEdit(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            {edit ? (
                <>
                    <label htmlFor="company-name">Company Name</label>
                    <input 
                        type="text" 
                        id="company-name"
                        value={companyName}    
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </>
            ) : (
                <p>Company Name: {companyName}</p>
            )}

            {edit ? (
                <>
                    <label htmlFor="position">Job Title</label>
                    <input 
                        type="text"
                        id="position"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </>
            ) : (
                <p>Job Title: {jobTitle}</p>
            )}

            {edit ? (
                <>
                    <label htmlFor="responsibility">Responsibility</label>
                    <input 
                        type="text"
                        id="responsibility"
                        value={responsibility}
                        onChange={(e) => setResponsibility(e.target.value)}
                    />
                </>
            ) : (
                <p>Responsibility: {responsibility}</p>
            )}

            {edit ? (
                <>
                    <label htmlFor="duration">Duration of Work</label>
                    <input 
                        type="text"
                        id="duration"
                        value={workDuration}
                        onChange={(e) => setWorkDuration(e.target.value)}
                    />
                </>
            ) : (
                <p>Duration of Work: {workDuration}</p>
            )}

            {!edit && (
                <button 
                    type="submit"
                    onClick={handleEdit}
                >
                    Edit
                </button>
            )}

            {edit && <button type="submit">Submit</button>}


        </form>
    )
}