import projectList from './project-list';
import project from './project-object';
import task from './task-object';
import './style.css';

const projects = document.querySelector('.projects');
const project = document.createElement('li');
project.textContent = 'project name';
projects.appendChild(project);

console.log('yo');
const element = document.createElement('p');

element.classList.add('yoyo');
element.textContent = 'yoyoyo';

document.querySelector('.content').appendChild(element);
