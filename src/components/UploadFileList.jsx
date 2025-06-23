import React from "react";

export default function UploadFileList({ files }) {
  return (
    <div className="file-list">
      <h3>Uploaded Files</h3>
      <ul>
        {files.map((file, idx) => (
          <li key={idx}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.name} ({file.type})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
