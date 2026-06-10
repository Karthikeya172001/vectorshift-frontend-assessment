# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class PipelineData(BaseModel):
    nodes: List[dict]
    edges: List[dict]
@app.get("/")
def read_root():
    return {"Ping": "Pong"}
@app.post("/pipelines/parse")
def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)
    # simple DAG check
    visited = set()
    is_dag = True
    for edge in data.edges:
        source = edge.get("source")
        target = edge.get("target")
        # self-loop means not DAG
        if source == target:
            is_dag = False
            break
        edge_key = (source, target)
        if edge_key in visited:
            continue
        visited.add(edge_key)
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }

