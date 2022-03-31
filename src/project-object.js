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
	const displaytasks = () => {
		for (let i = 0; i < taskArray.length; i++) {
			const taskDOM = document.createElement('li');
			taskDOM.classList.add('task');
			taskDOM.textContent = taskArray[i].title;
			document.querySelector('.content').appendChild(taskDOM);
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
