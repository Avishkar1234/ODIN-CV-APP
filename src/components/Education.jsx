import { useState } from "react";

export default function Education() {
    const [universityName, setUniversityName] = useState("")
    const [major, setMajor] = useState("")
    const [duration, setDuration] = useState("")
    const [edit, setEdit] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setEdit(false)
    }

    function handleEdit(e) {
        setEdit(true)
        
    }

    return (
        <form onSubmit={handleSubmit}>
            {edit ? (
                <>
                    <label htmlFor="university">University</label>
                    <input 
                        type="text" 
                        id="university" 
                        value={universityName}
                        onChange={(e) => setUniversityName(e.target.value)}
                    />
                </>
            ) : (
                <p>University: {universityName}</p>
            )}

            {edit ? (
                <>
                    <label htmlFor="major">Major</label>
                    <input 
                        type="text" 
                        id="major" 
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                    />
                </>
            ) : (
                <p>Major: {major}</p>
            )}

            {edit ? (
                <>
                    <label htmlFor="duration">Duration</label>
                    <input 
                        type="text" 
                        id="duration" 
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </>
            ) : (
                <p>Duration: {duration}</p>
            )}

            {!edit && 
                <button 
                    type="button"
                    onClick={handleEdit}
                    >
                    Edit
                </button>
            }
            
            {edit && <button type="submit">Submit</button>}
        </form>
    )
}