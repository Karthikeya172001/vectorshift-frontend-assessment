import { useState, useMemo } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {

 const [currText, setCurrText] = useState(
 data?.text || '{{input}}'
 );

 const handleTextChange = (e) => {
 setCurrText(e.target.value);
 };

 // extract variables like {{input}}
 const variables = useMemo(() => {

 const regex =
 /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

 const matches = [...currText.matchAll(regex)];

 return matches.map(match => match[1]);

 }, [currText]);

 // dynamic width + height
 const width = Math.max(220, currText.length * 8);

 const height =
 Math.max(120, 80 + variables.length * 20);

 return (
 <div
 style={{
 width,
 minHeight: height,
 border: '1px solid #4f46e5',
 borderRadius: '10px',
 padding: '10px',
 background: 'white',
 }}
 >

 {/* Dynamic input handles */}
 {variables.map((variable, index) => (

 <Handle
 key={variable}
 type="target"
 position={Position.Left}
 id={`${id}-${variable}`}
 style={{
 top: `${40 + index * 20}px`,
 background: '#6366f1',
 }}
 />

 ))}

 <div>
 <strong>Text</strong>
 </div>

 <div style={{ marginTop: '10px' }}>
 <label>
 Text:
 </label>

 <textarea
 value={currText}
 onChange={handleTextChange}
 rows={4}
 style={{
 width: '100%',
 marginTop: '5px',
 resize: 'none',
 }}
 />
 </div>

 <Handle
 type="source"
 position={Position.Right}
 id={`${id}-output`}
 style={{
 background: '#6366f1',
 }}
 />
 </div>
 );
};