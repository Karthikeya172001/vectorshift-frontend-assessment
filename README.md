# VectorShift Frontend Assessment

## Overview

This project is a node-based workflow editor built using React and React Flow.

Users can:

- Create custom nodes
- Connect nodes dynamically
- Resize nodes
- Add and remove handles dynamically
- Analyze pipeline structure
- View backend pipeline analysis results

---

## Features

### Custom Nodes
- Input Node
- Output Node
- Text Node
- Email Node

### Dynamic Handles
- Handles are generated automatically based on node content.
- Connections update dynamically.

### Resizable Nodes
- Nodes can be resized directly on the canvas.

### Pipeline Analysis
Backend analyzes:

- Number of Nodes
- Number of Edges
- DAG Validation

Example:

```
Nodes: 3
Edges: 2
Is DAG: true
```

---

## Architecture

The application uses a reusable node architecture.

Benefits:

- Less duplicate code
- Easier maintenance
- Scalable node creation
- Shared styling and behavior

Base node functionality is reused across all custom nodes.

---

## Tech Stack

Frontend:
- React
- React Flow

Backend:
- Python
- FastAPI

---

## Project Structure

```
frontend/
backend/
screenshots/
README.md
```

---

## Setup

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## Screenshots

Screenshots are available in the screenshots folder.

---

## Author

Karthikeya
