import project from './project-object';
import task from './task-object';
import resetTasks from './resetTaskDOM';
import resetProjectList from './resetProjectListDOM';

const projectList = () => {
	let chosenProjectIndex = 0;
	let list = []; //to be used to store project objects

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
		addProjectListDOM();

		console.log('addProjectButton clicked');
		console.log(list);
	};

	// add button to dom
	const addProjectButt = () => {
		const projectsDOM = document.querySelector('.projects');
		const addProjectButton = document.createElement('button');

		addProjectButton.textContent = '+';
		addProjectButton.addEventListener('click', addProjectInfo);
		projectsDOM.appendChild(addProjectButton);
	};

	// update list from local to this object
	const getLocalList = () => {
		const localList = JSON.parse(localStorage.getItem('projectList'));
		// convert each element from local storage as product object
		let tempProjectList = [];
		for (let i = 0; i < localList.length; i++) {
			//console.log(localList[i]);
			// list[i] = project(localList[i].name);
			tempProjectList.push(project(localList[i].name));
			for (let j = 0; j < localList[i].taskArray.length; j++) {
				let title = localList[i].taskArray[j].title;
				let note = localList[i].taskArray[j].note;
				let date = localList[i].taskArray[j].date;
				//console.log('ayo');
				const newTask = task(title, note, date);
				tempProjectList[i].addTask(newTask);
			}
		}
		console.log('this is the temp PL', tempProjectList);
		list = tempProjectList;
	};

	// add project to list and display on DOM
	const addProjectListDOM = () => {
		const localList = JSON.parse(localStorage.getItem('projectList'));
		// convert each element from local storage as product object
		/* for (let i = 0; i < localList.length; i++) {
			console.log(localList[i]);
		} */
		console.log(list);

		getLocalList();

		console.log(list);

		const projectsDOM = document.querySelector('.projects');
		//console.log(`from addProjectListDOM, the list content is ${localList}`);

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

	// update added task to local storage
	/* 	const addTaskToProject = () => {
		list[chosenProjectIndex].addTask();
	}; */

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
