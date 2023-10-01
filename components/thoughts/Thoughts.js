import React, { useState } from "react";

const Thoughts = () => {
  const [thought, setThought] = useState("");
  const [thoughtsArray, setThoughtsArray] = useState([{
    id: 0,
    thought: ''
  }]);
  const handleChange = (e) => {
    setThought(e.target.value);
  };
  const addThought = () => {
    setThoughtsArray((prev) => 
    {
      
      return [...prev,{id: thoughtsArray.length, thought: thought}]
    });
    setThought("");
  };
const removeThought = (value, index, arr) => {

}
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        {thoughtsArray.map((item, index) => (
          <div key={index} className="flex gap-3">
            {item.id}
            {item.thought}
            <button>Delete</button>
          </div>
        ))}
      </div>
      <input
        className="bg-sky-500"
        type="text"
        id="thought"
        name="thought"
        onChange={handleChange}
        value={thought}
      />

      <button onClick={addThought}>Add thought</button>
    </div>
  );
};
export default Thoughts;
