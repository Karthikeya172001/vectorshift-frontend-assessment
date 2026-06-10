import BaseNode from '../components/BaseNode';

export const EmailNode = ({ id }) => {
return (
<BaseNode
title="Email"
inputs={[{ id: `${id}-input` }]}
outputs={[{ id: `${id}-sent` }]}
>
<div>
<span>Send email notification.</span>
</div>
</BaseNode>
);
};