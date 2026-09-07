import { useState } from "react";
import "../styles/general.css";

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
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
            value={generalInfo.firstName}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, firstName: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">First Name:</span>
          <span className="value">{generalInfo.firstName}</span>
        </div>
      )}

      {edit ? (
        <div className="form-row">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={generalInfo.lastName}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, lastName: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">Last Name:</span>
          <span className="value">{generalInfo.lastName}</span>
        </div>
      )}
      {/* Email */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={generalInfo.email}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, email: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="row">
          <span className="label">Email:</span>
          <span className="value">{generalInfo.email}</span>
        </div>
      )}
      {/* Phone Number */}
      {edit ? (
        <div className="form-row">
          <label htmlFor="phone">Phone Number</label>
          <div className="phone-row">
            <select
              value={generalInfo.phonePrefix}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, phonePrefix: e.target.value })
              }
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
              value={generalInfo.phoneNum}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, phoneNum: e.target.value })
              }
              placeholder="Enter phone"
            />
          </div>
        </div>
      ) : (
        <div className="row">
          <span className="label">Phone:</span>
          <span className="value">{generalInfo.phoneNum}</span>
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
