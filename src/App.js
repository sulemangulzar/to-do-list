import { useState, useEffect } from "react";
import Todoitems from "./Todoitems";

const App = () => {
  const [addItemInput, setAddItemInput] = useState("");
  const [addItemBtn, setAddItemBtn] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setAddItemBtn(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever addItemBtn changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(addItemBtn));
  }, [addItemBtn]);

  const handleChange = (e) => {
    setAddItemInput(e.target.value);
  };

  const handleAdd = () => {
    if (addItemInput.trim() !== "") {
      setAddItemBtn([...addItemBtn, { text: addItemInput, completed: false }]);
      setAddItemInput("");
    }
  };

  const deleteItem = (id) => {
    setAddItemBtn((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  const toggleComplete = (id) => {
    setAddItemBtn((oldItems) =>
      oldItems.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const getFilteredItems = () => {
    switch (activeTab) {
      case "pending":
        return addItemBtn.filter((item) => !item.completed);
      case "completed":
        return addItemBtn.filter((item) => item.completed);
      default:
        return addItemBtn;
    }
  };

  return (
    <>
      <div className="flex justify-center absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="container max-w-[98%] md:w-[600px] min-h-[500px] bg-white rounded-xl p-4">
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
                type="button"
                className="py-2 px-4 text-white bg-[#361B7F] hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-around mb-4">
              <button
                className={`text-base font-medium ${
                  activeTab === "all" ? "border-b-2" : ""
                }`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`text-base font-medium ${
                  activeTab === "pending" ? "border-b-2" : ""
                }`}
                onClick={() => setActiveTab("pending")}
              >
                Pending
              </button>
              <button
                className={`text-base font-medium ${
                  activeTab === "completed" ? "border-b-2" : ""
                }`}
                onClick={() => setActiveTab("completed")}
              >
                Completed
              </button>
            </div>
            <ul className="flex flex-col items-center w-full">
              {getFilteredItems().map((item, index) => (
                <Todoitems
                  id={index}
                  key={index}
                  item={item}
                  onSelect={deleteItem}
                  onToggleComplete={toggleComplete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
