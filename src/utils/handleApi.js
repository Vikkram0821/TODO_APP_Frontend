import axios from "axios";

//baseurl - Localhost:3000
const baseUrl = "https://todo-app-backend-jsgl.onrender.com";

//Getting datas from the server(MongoDB)
//Using GET Method
const getAllToDo = (setToDo) => {
  try {
    axios.get(baseUrl).then(({ data }) => {
      {
        console.log("Data = ", data);
        setToDo(data);
      }
    });
  } catch (error) {
    console.error(error);
  }
};
//Adding datas to the server(MongoDB)
//Using POST Method
const addToDo = (text, setText, setToDo) => {
  try {
    axios.post(`${baseUrl}/save`, { text }).then(({ data }) => {
      console.log("Data = ", data);
      setText("");
      getAllToDo(setToDo);
    });
  } catch (error) {
    console.error(error);
  }
};

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  try {
    axios.put(`${baseUrl}/update`, { _id: toDoId, text }).then(({ data }) => {
      console.log("Data = ", data);
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteToDo = (toDoId, setToDo) => {
  try {
    axios
      .delete(`${baseUrl}/delete`, { data: { _id: toDoId } })
      .then((Data) => {
        console.log(Data);
        getAllToDo(setToDo);
      });
  } catch (error) {
    console.error(error);
  }
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
