import BaseNode from '../components/BaseNode';

export const APINode = ({ id }) => {
return (
<BaseNode
title="API"
inputs={[{ id: `${id}-input` }]}
outputs={[{ id: `${id}-output` }]}
>
<div>
<span>Fetch API data.</span>
</div>
</BaseNode>
);
};