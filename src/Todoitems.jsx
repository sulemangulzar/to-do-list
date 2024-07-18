import React from "react";

const Todoitems = ({ id, item, onSelect, onToggleComplete }) => {
  return (
    <li className="flex items-center justify-between w-full py-1 px-4 gap-4 border-b border-gray-200 overflow-auto">
      <span
        className="break-all"
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.text}
      </span>
      <div className="flex items-center gap-2">
        <button
          className="py-0.5 px-2 rounded-lg"
          onClick={() => onToggleComplete(id)}
          dangerouslySetInnerHTML={{
            __html: item.completed
              ? `<lord-icon
    src="https://cdn.lordicon.com/eavayqgw.json"
    trigger="hover"
    colors="primary:#000000,secondary:#000000"
    className="w-6 h-6"
</lord-icon>`
              : `<lord-icon src="https://cdn.lordicon.com/cgzlioyf.json" trigger="hover" colors="primary:#000000" class="w-6 h-6"></lord-icon>`,
          }}
        ></button>
        <button className="py-1 px-2 rounded-lg" onClick={() => onSelect(id)}>
          <lord-icon
            src="https://cdn.lordicon.com/drxwpfop.json"
            trigger="hover"
            colors="primary:#000000,secondary:#000000"
            className="w-6 h-6"
          ></lord-icon>
        </button>
      </div>
    </li>
  );
};

export default Todoitems;
