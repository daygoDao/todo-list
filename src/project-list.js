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
      };
      projectDOM.addEventListener("click", activeList);
      projectDOM.classList.add("project");
      projectDOM.textContent = list[i].name;
      projectsDOM.appendChild(projectDOM);
    }
    addProjectButt();
  };

  // highlight active folder
  const findChosenProject = () => {
    for (let i = 0; i < list.length; i++) {
      if (
        document.querySelector(".projects").children[i].className ==
        "chosenProject"
      ) {
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
    list[0];
    addTaskButt();
    deleteProject();
    deleteTask();
  };

  //function to delete obj from list
  const deleteProject = () => {
    const projects = document.querySelectorAll(".project");
    for (let project of projects) {
      const delButton = document.createElement("button");
      delButton.classList.add("delProject");
      delButton.textContent = "x";
      project.appendChild(delButton);
    }
  };
  //function to delete obj from list
  const deleteTask = () => {
    const projects = document.querySelectorAll(".task");
    for (let project of projects) {
      const delButton = document.createElement("button");
      delButton.classList.add("delTask");
      delButton.textContent = "x";

      project.appendChild(delButton);
    }
  };
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
