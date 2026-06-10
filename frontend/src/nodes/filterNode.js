import BaseNode from '../components/BaseNode';

export const FilterNode = ({ id }) => {
return (
<BaseNode
title="Filter"
inputs={[{ id: `${id}-input` }]}
outputs={[{ id: `${id}-filtered` }]}
>
<div>
<span>Filter incoming data.</span>
</div>
</BaseNode>
);
};