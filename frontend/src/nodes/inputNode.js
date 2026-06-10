// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {

 const [currName, setCurrName] = useState(
 data?.inputName || id.replace('customInput-', 'input_')
 );

 const [inputType, setInputType] = useState(
 data?.inputType || 'Text'
 );

 const handleNameChange = (e) => {
 setCurrName(e.target.value);
 };

 const handleTypeChange = (e) => {
 setInputType(e.target.value);
 };

 return (

 <div
 style={{
 width: 220,
 minHeight: 100,
 border: '1px solid #d1d5db',
 borderRadius: '12px',
 padding: '12px',
 background: 'white',
 boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
 fontFamily: 'Arial',
 }}
 >

 <div>
 <strong>Input</strong>
 </div>

 <div style={{ marginTop: '10px' }}>

 <label>
 Name:
 <input
 type="text"
 value={currName}
 onChange={handleNameChange}
 style={{
 marginLeft: '5px',
 padding: '4px',
 }}
 />
 </label>

 <br />
 <br />

 <label>
 Type:
 <select
 value={inputType}
 onChange={handleTypeChange}
 style={{
 marginLeft: '5px',
 padding: '4px',
 }}
 >
 <option value="Text">Text</option>
 <option value="File">File</option>
 </select>
 </label>

 </div>

 <Handle
 type="source"
 position={Position.Right}
 id={`${id}-value`}
 />

 </div>
 );
};