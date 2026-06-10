import BaseNode from '../components/BaseNode';

export const DelayNode = ({ id }) => {
return (
<BaseNode
title="Delay"
inputs={[{ id: `${id}-input` }]}
outputs={[{ id: `${id}-output` }]}
>
<div>
<span>Add execution delay.</span>
</div>
</BaseNode>
);
};