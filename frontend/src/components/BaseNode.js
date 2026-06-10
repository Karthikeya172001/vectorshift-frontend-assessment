import { Handle, Position } from 'reactflow';

const BaseNode = ({
 title,
 children,
 inputs = [],
 outputs = [],
}) => {
 return (
 <div
 style={{
 width: 220,
 minHeight: 120,
 border: '1px solid #555',
 borderRadius: '10px',
 padding: '10px',
 background: 'white',
 }}
 >
 <h3>{title}</h3>

 {inputs.map((input, index) => (
 <Handle
 key={input.id}
 type="target"
 position={Position.Left}
 id={input.id}
 style={{ top: 40 + index * 20 }}
 />
 ))}

 {outputs.map((output, index) => (
 <Handle
 key={output.id}
 type="source"
 position={Position.Right}
 id={output.id}
 style={{ top: 40 + index * 20 }}
 />
 ))}

 <div>{children}</div>
 </div>
 );
};

export default BaseNode;