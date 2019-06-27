import React from 'react';

const Dropdown = () => {
    return (
        <select style={{ display: "block" }}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    )
}

export default Dropdown;