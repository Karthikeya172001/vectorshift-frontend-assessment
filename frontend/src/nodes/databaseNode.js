import BaseNode from '../components/BaseNode';

export const DatabaseNode = ({ id }) => {
return (
<BaseNode
title="Database"
inputs={[{ id: `${id}-query` }]}
outputs={[{ id: `${id}-result` }]}
>
<div>
<span>Database operation.</span>
</div>
</BaseNode>
);
};