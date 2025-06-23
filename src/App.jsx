import React, { useEffect, useState } from "react";
import RoleSelector from "./components/RoleSelector";
import Chat from "./components/Chat";
import FileUpload from "./components/FileUpload";
import UploadedFileList from "./components/UploadFileList";
import "./App.css";

function App() {
  const [role, setRole] = useState("");
  const [messages, setMessages] = useState([]);
  const [files, setFiles] = useState([]);
  const [interviewStarted, setInterviewStarted] = useState(false);

  const handleFileUpload = (file) => {
    const fileURL = URL.createObjectURL(file);
    setFiles([...files, { name: file.name, url: fileURL, type: file.type }]);
  };

  const startInterview = () => {
  setInterviewStarted(true);
};

const endInterview = () => {
  setInterviewStarted(false);
};

  if (!role) return <RoleSelector setRole={setRole} />;

  return (
    <div className="app">
      <header>
        <h1>Interview Room</h1>
        <RoleSelector setRole={setRole}/>
        <p>Logged in as: {role}</p>
        {role === "Interviewer" && (
          <div>
            {!interviewStarted ? (
              <button onClick={startInterview}>Start Interview</button>
            ) : (
              <button onClick={endInterview}>End Interview</button>
            )}
          </div>
        )}
        {role === "Candidate" && !interviewStarted && (
          <p style={{ textAlign: 'center', color: 'gray' }}>
            Waiting for interviewer to start the interview...
          </p>
        )}
      </header>

      <main>
        <Chat
          role={role}
          messages={messages}
          setMessages={setMessages}
          active={interviewStarted}
        />
        {role === 'Interviewer' && 
        <>
            <FileUpload
          role={role}
          onFileUpload={handleFileUpload}
          active={interviewStarted}
        />
        <UploadedFileList files={files} />
        </>
        }
      </main>
    </div>
  );
}

export default App;
