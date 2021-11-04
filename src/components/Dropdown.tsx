import React, { useState } from "react";
type propsDropdown = {
    children: any;
    overlay: any;
};
const Dropdown = (props: propsDropdown) => {
    const { children, overlay } = props;
    return (
        <div>
            {children}
            <div>{overlay}</div>
        </div>
    );
};
export default Dropdown;
