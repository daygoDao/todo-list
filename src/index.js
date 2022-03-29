import './style.css';

const projectList = document.querySelector('.projects');
const project = document.createElement('li');
project.textContent = 'project name';
projectList.appendChild(project);

console.log('yo');
const element = document.createElement('p');

element.classList.add('yoyo');
element.textContent = 'yoyoyo';

document.querySelector('.content').appendChild(element);
// const yo = 'yoyo';
