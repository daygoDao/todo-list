import projectList from './project-list';
import project from './project-object';
import task from './task-object';
import './style.css';

//testing task obj
const task1 = task('yo', 'yo', 1, 2);
const task2 = task('ayo', 'yoyo', 11, 32);

//testing project obj
const project1 = project('name-of-project1');
const project2 = project('name-of-project2');
project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task2);
project2.addTask(task2);
project2.addTask(task2);

//testing project list
const listOfProjects = projectList();
listOfProjects.addProject(project1);
listOfProjects.addProject(project2);
// console.log(listOfProjects);

//////////////////////
// projects section //
// display project list
const projectsDOM = document.querySelector('.projects');
//loop and add projects to the unordered list from the array
for (let i = 0; i < listOfProjects.list.length; i++) {
	const projectDOM = document.createElement('li');

	projectDOM.textContent = listOfProjects.list[i].name;
	console.log(listOfProjects.list[i]);
	projectsDOM.appendChild(projectDOM);
	console.log(i);
}

// add project button
const projectInfo = () => {
	console.log('addProjectButton clicked');
};
let addProjectButton = document.createElement('button');
addProjectButton.textContent = '+';
addProjectButton.addEventListener('click', projectInfo);
projectsDOM.appendChild(addProjectButton);

//////////////////
// task section //
const taskDOM = document.createElement('li');

// add tasks button
const addTaskButton = document.createElement('button');
addTaskButton.textContent = '+';
const taskInfo = () => {
	console.log('add task button clicked');
};
document.querySelector('.content').appendChild(addTaskButton);

// display task list from current project selected
addTaskButton.addEventListener('click', taskInfo);
taskDOM.classList.add('yoyo');
taskDOM.textContent = 'yoyoyo';

document.querySelector('.content').appendChild(taskDOM);
