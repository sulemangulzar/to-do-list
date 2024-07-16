import React from "react";

const Customcheckbox = ({ id, checked, onChange }) => {
  return (
    <div>
      <label className="custom-checkbox">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Customcheckbox;
