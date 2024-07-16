import React from "react";

const Todoitems = (props) => {
  return (
    <>
      <div className="w-full flex items-center gap-x-4 mt-2">
        <lord-icon
          src="https://cdn.lordicon.com/vlnvqvew.json"
          trigger="hover"
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></lord-icon>
        <li className="text-base font-medium tracking-wide">{props.items}</li>
      </div>
    </>
  );
};

export default Todoitems;
