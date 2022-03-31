import project from './project-object';
import resetTasks from './resetTaskDOM';
import resetProjectList from './resetProjectListDOM';

const projectList = () => {
	let chosenProjectIndex = 0;
	const list = []; //to be used to store project objects
	const addProject = (projectObj) => {
		list.push(projectObj);
	};

	// button to add project to list//
	// add project button helper
	const addProjectInfo = () => {
		let name = prompt('name of project?', 'folder');
		const projectsDOM = document.querySelector('.projects');
		const projecto = project(name);

		addProject(projecto);
		//update localStorage
		localStorage.setItem('projectList', JSON.stringify(list));
		//update DOM
		resetProjectList();
		addProjectListDOM(projectsDOM);

		console.log('addProjectButton clicked');
		console.log(list);
		console.log('yee');
	};
	// add button to dom
	const addProjectButt = () => {
		const projectsDOM = document.querySelector('.projects');
		const addProjectButton = document.createElement('button');

		addProjectButton.textContent = '+';
		addProjectButton.addEventListener('click', addProjectInfo);
		projectsDOM.appendChild(addProjectButton);
	};

	//functions to display list to DOM
	const addProjectListDOM = (projectsDOM) => {
		for (let i = 0; i < list.length; i++) {
			const projectDOM = document.createElement('li');

			// add event listener to catch when project section is clicked
			const activeList = (e) => {
				console.log('project clicked');
				//console.log(e);
				for (let i = 0; i < list.length; i++) {
					projectsDOM.children[i].classList.remove('chosenProject');
				}
				projectDOM.classList.add('chosenProject');
				findChosenProject();
				resetTasks();
				// display tasks when said project is clicked
				list[chosenProjectIndex].displaytasks();
			};
			projectDOM.addEventListener('click', activeList);
			projectDOM.textContent = list[i].name;
			projectsDOM.appendChild(projectDOM);
		}
		addProjectButt();
	};

	// highlight active folder
	const findChosenProject = () => {
		// console.log(document.querySelector('.projects').children[i].className);
		for (let i = 0; i < list.length; i++) {
			console.log('within findChosenProject', i);
			if (
				document.querySelector('.projects').children[i].className ==
				'chosenProject'
			) {
				chosenProjectIndex = i;
				console.log('found a chosen one, index at', i);
			}
		}
	};

	//function to delete obj from list

	return {
		chosenProjectIndex,
		list,
		addProject,
		addProjectListDOM,
		addProjectButt,
	};
};

export default projectList;
