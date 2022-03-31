import projectList from './project-list';
import project from './project-object';
import task from './task-object';
import resetTasks from './resetTaskDOM';
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

///////////////////////
// projects section //
const projectsDOM = document.querySelector('.projects');

// localStorage
if (!localStorage.getItem('projectList')) {
	localStorage.setItem('projectList', JSON.stringify(listOfProjects.list));
}

// display project list
//loop and add projects to the unordered list from the array
for (let i = 0; i < listOfProjects.list.length; i++) {
	const projectDOM = document.createElement('li');
	// add event listener to catch when project section is clicked
	const activeList = (e) => {
		// clear others
		console.log('project clicked');
		//console.log(e);
		for (let i = 0; i < listOfProjects.list.length; i++) {
			projectsDOM.children[i].classList.remove('chosenProject');
		}
		projectDOM.classList.add('chosenProject');
		findChosenProject();
		resetTasks();
		//display tasks
		listOfProjects.list[listOfProjects.chosenProjectIndex].displaytasks(
			listOfProjects
		);
	};

	projectDOM.addEventListener('click', activeList);
	// highlight project that is active and change highlight when clicked elsewhere
	projectDOM.textContent = listOfProjects.list[i].name;
	//console.log(listOfProjects.list[i]);
	projectsDOM.appendChild(projectDOM);
	//console.log(i);
}

function findChosenProject() {
	// console.log(document.querySelector('.projects').children[i].className);
	for (let i = 0; i < listOfProjects.list.length; i++) {
		console.log('within findChosenProject', i);
		if (
			document.querySelector('.projects').children[i].className ==
			'chosenProject'
		) {
			listOfProjects.chosenProjectIndex = i;
			console.log('found a chosen one, index at', i);
		}
	}
}
// add project button
const addProjectInfo = () => {
	const project3 = project('chieet');
	listOfProjects.addProject(project3);
	console.log('addProjectButton clicked');
	console.log(listOfProjects);
};
let addProjectButton = document.createElement('button');
addProjectButton.textContent = '+';
addProjectButton.addEventListener('click', addProjectInfo);
projectsDOM.appendChild(addProjectButton);

listOfProjects.list[0].displaytasks(listOfProjects);
