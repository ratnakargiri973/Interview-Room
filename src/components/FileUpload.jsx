import React from "react";

export default function FileUpload({ role, onFileUpload, active }) {
  if (role !== "Interviewer") return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.type === "text/plain")) {
      onFileUpload(file);
    } else {
      alert("Only PDF or TXT files are allowed");
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} disabled={!active} />
    </div>
  );
}
