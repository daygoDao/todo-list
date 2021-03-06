import projectList from './project-list';
import project from './project-object';
import task from './task-object';
import './style.css';

// demo task obj
const task1 = task('whatwothuh', 'dbl click to change this', '2022-05-07');
const task2 = task('dbl click to change this', 'yoyo', '2022-05-07');

// demo project obj
const project1 = project('demo project');
const project2 = project('dbl click to change this');
project1.addTask(task1);
project1.addTask(task1);
project1.addTask(task1);
project1.addTask(task1);
project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task1);
project2.addTask(task2);
project2.addTask(task1);

// demo project list
const listOfProjects = projectList();
listOfProjects.addProject(project1);
listOfProjects.addProject(project2);

///////////////////////
// projects section //
// localStorage
if (!localStorage.getItem('projectList')) {
	localStorage.setItem('projectList', JSON.stringify(listOfProjects.list));
}

listOfProjects.initDisplay();

