import resetTasks from './resetTaskDOM';

const projectList = () => {
	let chosenProjectIndex = 0;
	const list = []; //to be used to store project objects
	const addProject = (projectObj) => {
		list.push(projectObj);
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

	return { chosenProjectIndex, list, addProject, addProjectListDOM };
};

export default projectList;
