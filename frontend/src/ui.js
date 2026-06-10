// ui.js

import { useRef, useCallback } from 'react';
import ReactFlow, {
 Controls,
 Background,
 MiniMap,
} from 'reactflow';

import 'reactflow/dist/style.css';

import { useStore } from './store';

import { InputNode } from './nodes/inputNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { LLMNode } from './nodes/llmNode';

import { APINode } from './nodes/apiNode';
import { EmailNode } from './nodes/emailNode';
import { DatabaseNode } from './nodes/databaseNode';
import { DelayNode } from './nodes/delayNode';
import { FilterNode } from './nodes/filterNode';

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
 customInput: InputNode,
 llm: LLMNode,
 customOutput: OutputNode,
 text: TextNode,

 api: APINode,
 email: EmailNode,
 database: DatabaseNode,
 delay: DelayNode,
 filter: FilterNode,
};

export const PipelineUI = () => {

 const reactFlowWrapper = useRef(null);

 const nodes = useStore((state) => state.nodes);
 const edges = useStore((state) => state.edges);

 const onNodesChange = useStore((state) => state.onNodesChange);
 const onEdgesChange = useStore((state) => state.onEdgesChange);
 const onConnect = useStore((state) => state.onConnect);

 const addNode = useStore((state) => state.addNode);
 const getNodeID = useStore((state) => state.getNodeID);

 const onDragOver = useCallback((event) => {
 event.preventDefault();
 event.dataTransfer.dropEffect = 'move';
 }, []);

 const onDrop = useCallback(
 (event) => {

 event.preventDefault();

 const reactFlowBounds =
 reactFlowWrapper.current.getBoundingClientRect();

 const data = JSON.parse(
 event.dataTransfer.getData('application/reactflow')
 );

 if (!data) {
 return;
 }

 const position = {
 x: event.clientX - reactFlowBounds.left,
 y: event.clientY - reactFlowBounds.top,
 };

 const nodeID = getNodeID(data.nodeType);

 const newNode = {
 id: nodeID,
 type: data.nodeType,
 position,
 data: {},
 };

 addNode(newNode);

 },
 [addNode, getNodeID]
 );

 return (
 <>
 <div
 ref={reactFlowWrapper}
 style={{
 width: '100vw',
 height: '70vh',
 }}
 >
 <ReactFlow
 nodes={nodes}
 edges={edges}
 onNodesChange={onNodesChange}
 onEdgesChange={onEdgesChange}
 onConnect={onConnect}
 onDrop={onDrop}
 onDragOver={onDragOver}
 nodeTypes={nodeTypes}
 snapGrid={[gridSize, gridSize]}
 connectionLineType="smoothstep"
 proOptions={proOptions}
 >
 <Background color="#aaa" gap={gridSize} />
 <Controls />
 <MiniMap />
 </ReactFlow>
 </div>
 </>
 );
};