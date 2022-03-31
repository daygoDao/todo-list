import projectList from './project-list';
import project from './project-object';
import task from './task-object';
import './style.css';

//testing task obj
const task1 = task('yo', 'yo', 1, 2);
const task2 = task('ayo', 'yoyo', 11, 32);

//testing project obj
const project1 = project('demo project');
const project2 = project('name-of-project2');
project1.addTask(task1);
project1.addTask(task1);
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
// localStorage
if (!localStorage.getItem('projectList')) {
	localStorage.setItem('projectList', JSON.stringify(listOfProjects.list));
}

// init display project list and butt to DOM
listOfProjects.addProjectListDOM(projectsDOM);
listOfProjects.addProjectButt();

//display to page initally the tasks of the first project
listOfProjects.list[0].displaytasks(listOfProjects);
