import project from "./project-object";
import task from "./task-object";
import resetTasks from "./resetTaskDOM";
import resetProjectList from "./resetProjectListDOM";

const projectList = () => {
  let chosenProjectIndex = 0;
  let list = []; //to be used to store project objects

  const addProject = (projectObj) => {
    list.push(projectObj);
  };

  // button to add project to list//
  // add project button helper
  const addProjectInfo = () => {
    let name = prompt("name of project?", "folder");
    const projecto = project(name);

    addProject(projecto);
    //update localStorage
    localStorage.setItem("projectList", JSON.stringify(list));
    //update DOM
    resetProjectList();
    addProjectListDOM();
    deleteProjectButt();
  };

  // add button to dom
  const addProjectButt = () => {
    const projectsDOM = document.querySelector(".projects");
    const addProjectButton = document.createElement("button");

    addProjectButton.textContent = "+";
    addProjectButton.addEventListener("click", addProjectInfo);
    projectsDOM.appendChild(addProjectButton);
  };

  // update list from localStorage to this object
  const getLocalList = () => {
    const localList = JSON.parse(localStorage.getItem("projectList"));

    // convert each element from local storage as product object
    let tempProjectList = [];
    for (let i = 0; i < localList.length; i++) {
      tempProjectList.push(project(localList[i].name));
      for (let j = 0; j < localList[i].taskArray.length; j++) {
        let title = localList[i].taskArray[j].title;
        let note = localList[i].taskArray[j].note;
        let date = localList[i].taskArray[j].date;
        const newTask = task(title, note, date);
        tempProjectList[i].addTask(newTask);
      }
    }
    list = tempProjectList;
  };

  // add project to list and display on DOM
  const addProjectListDOM = () => {
    const projectsDOM = document.querySelector(".projects");
    // convert each element from local storage as product object
    getLocalList();
    // display each project to DOM
    for (let i = 0; i < list.length; i++) {
      const projectDOM = document.createElement("li");
      const projectName = document.createElement("span");
      // add event listener to catch when project section is clicked
      const activeList = (e) => {
        for (let i = 0; i < list.length; i++) {
          projectsDOM.children[i].classList.remove("chosenProject");
        }
        projectDOM.classList.add("chosenProject");
        findChosenProject();
        // display tasks when said project is clicked
        list[chosenProjectIndex].displaytasks();
        addTaskButt();
        deleteTaskButt();
      };
      projectDOM.addEventListener("click", activeList);
      projectDOM.classList.add("project");
      projectName.textContent = list[i].name;
      projectDOM.appendChild(projectName);
      projectsDOM.appendChild(projectDOM);
    }
    addProjectButt();
  };

  // highlight active folder
  const findChosenProject = () => {
    for (let i = 0; i < list.length; i++) {
      const chosen = document.querySelector(".projects").children[i].className;
      if (chosen.includes("chosenProject")) {
        chosenProjectIndex = i;
      }
    }
  };

  // add tasks button
  let addTaskButt = () => {
    const modal = document.querySelector("#modal");
    const closeModal = document.querySelector(".close-modal");
    const submitTask = document.querySelector(".addTask");
    const addTaskButton = document.createElement("button");

    addTaskButton.textContent = "+";
    addTaskButton.classList.add("open-modal");
    // addTaskButton.addEventListener('click', addTaskInfo);
    document.querySelector(".content").appendChild(addTaskButton);

    addTaskButton.addEventListener("click", () => {
      modal.showModal();
    });
    closeModal.addEventListener("click", () => {
      modal.close();
    });
    submitTask.addEventListener("click", addTaskInfo);
  };

  // update added task to local storage
  // when task button is clicked it will open a form modal
  const addTaskInfo = () => {
    const form = document.getElementById("newTask");
    const name = form.elements[0].value;
    const note = form.elements[1].value;
    const date = form.elements[2].value;
    const newTask = task(name, note, date);
    list[chosenProjectIndex].addTask(newTask);
    // update localStorage
    localStorage.setItem("projectList", JSON.stringify(list));
    list[chosenProjectIndex].displaytasks();
    addTaskButt();
    deleteTaskButt();
    // reset modal form
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    modal.close();
  };

  // init display
  const initDisplay = () => {
    addProjectListDOM();
    //display to page initally the tasks of the first project
    document
      .querySelector(".projects")
      .children[0].classList.add("chosenProject");
    list[0].displaytasks();

    addTaskButt();
    deleteProjectButt();
    deleteTaskButt();
    projectNameUpdate();
    taskUpdate();
  };

  const deleteProject = (e) => {
    const projects = document.querySelectorAll(".project");
    let index = 0;
    for (let project of projects) {
      console.log("ayp", project.children[0]);
      if (project.children[1] == e.target) {
        console.log("in here");
        list.splice(index, 1);
        localStorage.setItem("projectList", JSON.stringify(list));
        resetProjectList();
        addProjectListDOM();
        deleteProjectButt();
      }
      index++;
    }
  };
  //function to delete obj from list
  const deleteProjectButt = () => {
    const projects = document.querySelectorAll(".project");
    for (let project of projects) {
      const delButton = document.createElement("button");
      delButton.classList.add("delProject");
      delButton.textContent = "x";
      delButton.addEventListener("click", deleteProject);
      project.appendChild(delButton);
    }
  };

  const deleteTask = (e) => {
    const tasks = document.querySelectorAll(".task");
    let index = 0;
    for (let task of tasks) {
      if (task.children[3] == e.target) {
        list[chosenProjectIndex].taskArray.splice(index, 1);
        localStorage.setItem("projectList", JSON.stringify(list));
        list[chosenProjectIndex].displaytasks();
        addTaskButt();
        deleteTaskButt();
      }
      index++;
    }
  };
  //function to delete obj from list
  const deleteTaskButt = () => {
    const tasks = document.querySelectorAll(".task");
    for (let task of tasks) {
      const delButton = document.createElement("button");
      delButton.classList.add("delTask");
      delButton.textContent = "x";
      delButton.addEventListener("click", deleteTask);
      task.appendChild(delButton);
    }
  };

  // update project name on DOM and localStorage on click
  const changeProjName = (e) => {
    // console.log(e.target.textContent)
    let newName = prompt("new name?", e.target.textContent);
    if(newName == null) return '';
    console.log(newName);
    e.target.textContent = newName;
    // save to localStorage
    // console.log("changeprojname", chosenProjectIndex);
    list[chosenProjectIndex].name = newName;
    localStorage.setItem("projectList", JSON.stringify(list));
  };

  const projectNameUpdate = () => {
    const projects = document.querySelectorAll(".projects span");
    findChosenProject();
    for (let proj of projects) {
      proj.addEventListener("dblclick", changeProjName);
    }
  };

  //update task title, note, date when dbl click
  const updateTask = (e) => {
    const titles = document.querySelectorAll(".title");
    const notes = document.querySelectorAll(".note");

    let newnew = prompt("new info", e.target.textContent);
    if(newnew == null) return '';
    e.target.textContent = newnew;
    let taskIndex = 0;
    for (let title of titles) {
      if (title == e.target) {
        console.log("home run");
        console.log(list[chosenProjectIndex].taskArray[titleIndex]);
        list[chosenProjectIndex].taskArray[titleIndex].title = newnew;
        // console.log(list[chosenProjectIndex].taskArray[taskIndex].title);
      }
      taskIndex++;
    }
    let noteIndex = 0;
    for (let note of notes) {
      if (note == e.target) {
        console.log("home run");
        //console.log(list[chosenProjectIndex].taskArray[noteIndex]);
        list[chosenProjectIndex].taskArray[noteIndex].note = newnew;
        // console.log(list[chosenProjectIndex].taskArray[taskIndex].title);
      }
      noteIndex++;
    }
    // save to localStorage
    localStorage.setItem("projectList", JSON.stringify(list));
  };

  const updateDate = (e) => {
    const dates = document.querySelectorAll(".date");

    let newDate = e.target.value;
    let dateIndex = 0;
    for (let date of dates) {
      if (date == e.target) {
        console.log(newDate);
        console.log(list[chosenProjectIndex].taskArray[dateIndex]);
        list[chosenProjectIndex].taskArray[dateIndex].date = newDate;
      }
      dateIndex++;
    }
    // save to localStorage
    localStorage.setItem("projectList", JSON.stringify(list));
  };

  const taskUpdate = () => {
    const titles = document.querySelectorAll(".title");
    const notes = document.querySelectorAll(".note");
    const dates = document.querySelectorAll(".date");
    for (let title of titles) {
      title.addEventListener("dblclick", updateTask);
    }
    for (let note of notes) {
      note.addEventListener("dblclick", updateTask);
    }
    for (let date of dates) {
      date.addEventListener("change", updateDate);
    }
  };

  // ^_^
  return {
    chosenProjectIndex,
    list,
    addProject,
    addProjectListDOM,
    addProjectButt,
    addTaskButt,
    getLocalList,
    initDisplay,
  };
};

export default projectList;
