import projectList from './project-list';
import project from './project-object';
import task from './task-object';
import './style.css';

//testing task obj
const task1 = task('yo', 'yo', 1, 2);

//testing project obj
const project1 = project('name');
project1.addTask(task1);

//testing project list
const listOfProjects = projectList();
listOfProjects.addProject(project1);
console.log(listOfProjects);

// something
const projectsDOM = document.querySelector('.projects');
const projectDOM = document.createElement('li');
const taskDOM = document.createElement('li');

// projects section
projectDOM.textContent = 'project name';
projectsDOM.appendChild(projectDOM);

// add project button
const projectInfo = () => {
	console.log('addProjectButton clicked');
};
let addProjectButton = document.createElement('button');
addProjectButton.textContent = '+';
addProjectButton.addEventListener('click', projectInfo);

projectsDOM.appendChild(addProjectButton);

// task section
const addTaskButton = document.createElement('button');
addTaskButton.textContent = '+';
const taskInfo = () => {
	console.log('add task button clicked');
};
addTaskButton.addEventListener('click', taskInfo);
taskDOM.classList.add('yoyo');
taskDOM.textContent = 'yoyoyo';

document.querySelector('.content').appendChild(taskDOM);
document.querySelector('.content').appendChild(addTaskButton);

// add tasks button