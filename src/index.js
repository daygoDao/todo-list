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
project1.addTask(task1);
project1.addTask(task1);
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
const projectsDOM = document.querySelector('.projects');

// display project list
//loop and add projects to the unordered list from the array
for (let i = 0; i < listOfProjects.list.length; i++) {
	const projectDOM = document.createElement('li');
	// add event listener to catch when project section is clicked
	const activeList = () => {
		console.log('project clicked');
	};
	projectDOM.addEventListener('click', activeList);
	// highlight project that is active and change highlight when clicked elsewhere
	projectDOM.classList.add('chosenProject');
	projectDOM.textContent = listOfProjects.list[i].name;
	//console.log(listOfProjects.list[i]);
	projectsDOM.appendChild(projectDOM);
	//console.log(i);
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
// display task list from current project selected
for (let i = 0; i < project1.taskArray.length; i++) {
	const taskDOM = document.createElement('li');
	taskDOM.classList.add('yoyo');
	taskDOM.textContent = project1.taskArray[i].title;

	document.querySelector('.content').appendChild(taskDOM);
	// console.log(i);
}

// add tasks button
const taskInfo = () => {
	console.log('add task button clicked');
};
const addTaskButton = document.createElement('button');
addTaskButton.addEventListener('click', taskInfo);
addTaskButton.textContent = '+';

document.querySelector('.content').appendChild(addTaskButton);
