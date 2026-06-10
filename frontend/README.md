# VectorShift Frontend Technical Assessment

## 📌 Overview

This project is a ReactFlow-based pipeline builder with reusable node abstraction, dynamic text parsing, and FastAPI backend integration.

The application allows users to create pipelines visually using draggable nodes and connections.

---

# 🚀 Features

- Reusable BaseNode abstraction
- Scalable node architecture
- 5 custom additional nodes
- Dynamic variable parsing
- Dynamic handle generation
- Auto-resizing text node
- FastAPI backend integration
- DAG validation response
- ReactFlow pipeline editor

---

# 🧠 Architecture

The project uses a reusable `BaseNode` component to reduce duplicate code across nodes.

Shared functionality such as:
- layout
- handles
- styling
- structure

is centralized into a reusable abstraction.

This makes new node creation faster and more scalable.

---

# 🛠️ Tech Stack

## Frontend
- React
- ReactFlow
- Zustand

## Backend
- FastAPI
- Python

---

# 📂 Custom Nodes Added

- API Node
- Email Node
- Database Node
- Delay Node
- Filter Node

---

# ✨ Dynamic Text Node

The Text Node supports:

- Dynamic resizing
- Variable parsing using:
{{variable}}

Example:
{{name}}
{{email}}

Handles are automatically generated based on detected variables.

---

# 🔗 Backend Integration

The frontend submits pipeline nodes and edges to a FastAPI backend endpoint.

The backend returns:

- Number of nodes
- Number of edges
- DAG validation status

---

# ▶️ Frontend Setup

cd frontend

npm install

npm start

---

# ▶️ Backend Setup

cd backend

pip install fastapi uvicorn

python3 -m uvicorn main:app --reload

---

# 📸 Screenshots

## Full Pipeline
![Pipeline Screenshot](./screenshots/pipeline.png)

## Dynamic Handles
![Dynamic Handles](./screenshots/dynamic-handles.png)

## Backend Alert
![Backend Alert](./screenshots/backend-alert.png)

---

# 🎥 Demo Video

https://drive.google.com/file/d/1FsM_dZlO30B7KEO4o22UeH4RXPmoMePS/view?usp=sharing

---

# 👨‍💻 Author

Karthikeya