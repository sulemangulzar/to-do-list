import { useState } from "react";
import Todoitems from "./Todoitems";

const App = () => {
  const [addItemInput, setAddItemInput] = useState("");
  const [addItemBtn, setAddItemBtn] = useState([]);

  const handleChange = (e) => {
    setAddItemInput(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = () => {
    setAddItemBtn([...addItemBtn, addItemInput]);
    setAddItemInput("");
  };
  const deleteItem = (id) => {
    setAddItemBtn((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="flex justify-center absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="container max-w-[98%] md:w-[600px] h-[500px] bg-white rounded-xl p-4 ">
          <h1 className="text-center text-xl font-medium">To-Do List</h1>
          <div className="addTodo mt-4">
            <h2 className="text-base font-medium">Add a Todo:</h2>
            <div className="flex items-center justify-start m-2 gap-2">
              <input
                onChange={handleChange}
                value={addItemInput}
                className="w-full h-8 p-2 border-2 border-gray-200 focus:outline-[#361B7F]"
                type="text"
              />
              <button
                onClick={handleAdd}
                type="submit"
                className="py-2 px-4 text-white bg-[#361B7F] hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
          <div className="">
            <h2 className="text-base font-medium">Your Todos:</h2>
            <ul className="flex flex-col items-center">
              {addItemBtn.map((item, index) => {
                return (
                  <Todoitems
                    id={index}
                    key={index}
                    items={item}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
