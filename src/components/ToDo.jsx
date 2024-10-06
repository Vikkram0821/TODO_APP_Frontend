import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, desc, updateMode, deleteMode }) => {
  return (
    <div className="todo">
      <div className="text">
        {text}
        <span className="description">{desc}</span>
      </div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteMode} />
      </div>
    </div>
  );
};

export default ToDo;
