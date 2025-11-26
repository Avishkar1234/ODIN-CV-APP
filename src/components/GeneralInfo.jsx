import { useState } from "react";
import "../styles/general.css";

export default function GeneralInfo() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [phonePrefix, setPhonePrefix] = useState("+91");
    const [edit, setEdit] = useState(false);

    function handleEdit() {
        setEdit(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEdit(false);
    }

    return (
        <form onSubmit={handleSubmit} className="general-form">

            {/* First Name */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="first-name">First Name</label>
                    <input 
                        type="text"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                  <span className="label">First Name:</span>
                  <span className="value">{firstName}</span>
                </div>            
            )}

            {/* Last Name */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="last-name">Last Name</label>
                    <input 
                        type="text"
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                  <span className="label">Last Name:</span>
                  <span className="value">{lastName}</span>
                </div>

            )}

            {/* Email */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            ) : (
                <div className="row">
                  <span className="label">Email:</span>
                  <span className="value">{email}</span>
                </div>

            )}

            {/* Phone Number */}
            {edit ? (
                <div className="form-row">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="phone-row">
                        <select 
                            value={phonePrefix}
                            onChange={(e) => setPhonePrefix(e.target.value)}
                        >
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+81">+81</option>
                            <option value="+61">+61</option>
                        </select>

                        <input 
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter phone"
                        />
                    </div>
                </div>
            ) : (
                <div className="row">
                  <span className="label">Phone:</span>
                  <span className="value">{phone}</span>
                </div>
            )}

            {/* Buttons */}
            {!edit && (
                <button type="button" onClick={handleEdit}>
                    Edit
                </button>
            )}

            {edit && <button type="submit">Submit</button>}
        </form>
    );
}
