import React from "react";

export default function RoleSelector({ setRole }) {
  return (
    <div className="role-selector">
      <h2>Select Your Role</h2>
      <button onClick={() => setRole("Interviewer")}>Interviewer</button>
      <button onClick={() => setRole("Candidate")}>Candidate</button>
    </div>
  );
}
