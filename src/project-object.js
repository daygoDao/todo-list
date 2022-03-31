const project = (name) => {
	name = name;
	const taskArray = [];

	const addTask = (task) => {
		taskArray.push(task);
	};

	///////////////////
	// task section //

	// display task list from current project selected
	//console.log(document.querySelector('.chosenProject'));
	// displaytasks();
	const displaytasks = (listOfProjects) => {
		for (
			let i = 0;
			i <
			listOfProjects.list[listOfProjects.chosenProjectIndex].taskArray.length;
			i++
		) {
			//document.querySelector();
			const taskDOM = document.createElement('li');
			taskDOM.classList.add('task');
			taskDOM.textContent = listOfProjects.list[0].taskArray[i].title;

			document.querySelector('.content').appendChild(taskDOM);
			// console.log(i);
		}

		// add tasks button
		const addTaskInfo = () => {
			console.log('add task button clicked');
		};
		const addTaskButton = document.createElement('button');
		addTaskButton.addEventListener('click', addTaskInfo);
		addTaskButton.textContent = '+';

		document.querySelector('.content').appendChild(addTaskButton);
	};

	return { name, taskArray, addTask, displaytasks };
};

export default project;
