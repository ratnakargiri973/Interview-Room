# Role based Interview Room 

[Hosted Link](https://interview-room-navy.vercel.app/)

### Tech stack used:
        React
        JavaScript
        css
        versel for hosting

### How does my solution work ?
    I have created a role based interview room web application where two users are available such as "Interviewer" and  "Candidate".
    When we will go through this application first the role page will open where we will select the role where we can be interviewer or candidate.
    If we click on Interviewer button we logged in as interviewer and if we click on Candidte button we logged in as candidate.
    If the role is interviewer, the there is a option for start interview which will be only show to interview, and after clickin gon the start interview button then only interviewer can message to the candidate. And there is option for uploading files which also only interview able to upload files.
    And this interface also the select role option is available, after interview sending message to candidate, if candidate click on the candidate button then he will go to the candidate's message pannel where candidate can reply back to the interviewer. 
    If the interviewer has not started the interview, then in the candidate messsage pannet, it will show that "Wait for interviewer to start the interview...".
    According to role, the message will align at the right or left. For sender it will show at the right and for receiver it will show at the left side in the message pannel.

### What i'd improve with more time?
    I'd improve with more time features like 
      1. User authentication and authorization using jwt in backend as per role.
      2. Email verification and email sending using nodemailer.
      3. File uploading using multer.
      4. State management using redux for more reliable.
      5. Material UI for more attractive visualisation.
      6. Socket.IO for messaging.
      7. User Profile (profile picture, name, email, etc.)
      
    
    
