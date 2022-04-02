import task from './task-object';
import resetTasks from './resetTaskDOM';

const project = (name) => {
	name = name;
	const taskArray = [];

	const addTask = (task) => {
		taskArray.push(task);
	};

	///////////////////
	// task section //

	// display task list from current project that is selected
	const displaytasks = () => {
		resetTasks();
		for (let i = 0; i < taskArray.length; i++) {
			const taskDOM = document.createElement('li');
			taskDOM.classList.add('task');
			taskDOM.textContent = taskArray[i].title;
			document.querySelector('.content').appendChild(taskDOM);
		}
		// addTaskButt();
	};

	return { name, taskArray, addTask, displaytasks };
};

export default project;
