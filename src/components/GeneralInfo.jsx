import { useState } from "react"

export default function GeneralInfo() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [edit, setEdit] = useState(false)

    function handleEdit() {
        setEdit(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setEdit(false)
    }
    return (
        <form onSubmit={handleSubmit}>

            {edit ? (
            <>
            <label htmlFor="first-name">First Name</label>
            <input
             type="text"
             id="first-name"
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
             />
            </>
            ) : (
                <p>First Name: {firstName}</p>
            )}

            {edit ? (
                <>
                <label htmlFor="last-name">Last Name</label>
                <input
                 type="text"
                 id="last-name" 
                 value={lastName} 
                 onChange={(e) => setLastName(e.target.value)}
                 />         
                </> 
            ) : (
                <p>Last Name: {lastName}</p>
            )}

            {edit ? (
                <>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </>
            ) : (
                <p>Email: {email}</p>
            )}

            {edit ? (
                <>
                <label htmlFor="phone">Phone Number</label>
                <input 
                type="tel" 
                id="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                />
                </>
            ) : (
                <p>Phone: {phone}</p>
            )}

            {!edit && (
                <button type="button" onClick={handleEdit}>
                    Edit
                </button>
            )}

            {edit && <button type="submit">Submit</button>}
        </form>
    )
}