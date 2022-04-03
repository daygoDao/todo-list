import task from "./task-object";
import resetTasks from "./resetTaskDOM";

const project = (name) => {
  name = name;
  const taskArray = [];

  const addTask = (task) => {
    taskArray.push(task);
  };

  ///////////////////
  // task section //

  // display task list from current project that is selected
  const displaytasks = () => {
    resetTasks();
    for (let i = 0; i < taskArray.length; i++) {
      const taskDOM = document.createElement("li");
      const taskTitle = document.createElement("span");
      const taskNote = document.createElement("span");
      const taskDate = document.createElement("input");

      taskTitle.classList.add("title");
      taskNote.classList.add("note");
      taskDate.classList.add("date");
	  taskDate.type = 'date';

      taskDOM.classList.add("task");

      taskTitle.textContent = taskArray[i].title;
      taskNote.textContent = taskArray[i].note;
      taskDate.textContent = taskArray[i].date;
      taskDOM.appendChild(taskTitle);
      taskDOM.appendChild(taskNote);
      taskDOM.appendChild(taskDate);

      document.querySelector(".content").appendChild(taskDOM);
    }
  };

  return { name, taskArray, addTask, displaytasks };
};

export default project;
