💬 Real-Time Chat Application
A simple real-time chat application built using Spring Boot, React (Vite), WebSocket, and STOMP. Users can join with a name, send messages instantly, and view chats in a clean minimal UI.

🚀 Features
Real-time messaging using WebSocket
Multi-user chat support
Spring Boot backend
React frontend with Vite
STOMP protocol for message handling
Clean minimal UI
Responsive design
🛠️ Tech Stack
Frontend
React.js
Vite
CSS3
STOMPJS
Backend
Spring Boot
Spring WebSocket
Maven
Java 17+
📁 Project Structure
exp10/
│── Demo_WebSocket/        # Spring Boot Backend
│── frontend/              # React Frontend
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Run Backend (Spring Boot)
cd Demo_WebSocket
./mvnw spring-boot:run
For Windows:

.\mvnw.cmd spring-boot:run
Backend runs on:

http://localhost:8080
3️⃣ Run Frontend (React)
cd frontend
npm install
npm run dev
Frontend runs on:

http://localhost:5173
🔌 WebSocket Endpoint
/ws
STOMP Topics
Send Message
/app/chat
Receive Messages
/topic/messages
💻 How to Use
Open frontend in browser
Enter your name
Type message
Click Send
Messages appear instantly for all connected users

Screenshots:

<img width="1919" height="966" alt="Screenshot 2026-04-23 063609" src="https://github.com/user-attachments/assets/c7cedcf3-8c75-4d99-b5a5-28fd1809486d" />
<img width="1918" height="883" alt="Screenshot 2026-04-23 063617" src="https://github.com/user-attachments/assets/a84d677e-33a9-4fa4-a92f-cc8edc60382c" />
