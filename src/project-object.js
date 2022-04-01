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
		for (let i = 0; i < taskArray.length; i++) {
			const taskDOM = document.createElement('li');
			taskDOM.classList.add('task');
			taskDOM.textContent = taskArray[i].title;
			document.querySelector('.content').appendChild(taskDOM);
		}
		addTaskButt();
	};

	// add tasks button
	let addTaskButt = () => {
		const modal = document.querySelector('#modal');
		const closeModal = document.querySelector('.close-modal');
		const submitTask = document.querySelector('.addTask');
		const addTaskButton = document.createElement('button');

		addTaskButton.textContent = '+';
		addTaskButton.classList.add('open-modal');
		// addTaskButton.addEventListener('click', addTaskInfo);
		document.querySelector('.content').appendChild(addTaskButton);

		addTaskButton.addEventListener('click', () => {
			console.log('yo from open modal');
			modal.showModal();
		});
		closeModal.addEventListener('click', () => {
			console.log('yo from close modal');
			modal.close();
		});
		submitTask.addEventListener('click', addTaskInfo);
	};

	// when task button is clicked it will open a form modal
	const addTaskInfo = () => {
		const form = document.getElementById('newTask');
		console.log('yo from submit modal');
		const name = form.elements[0].value;
		const note = form.elements[1].value;
		const date = form.elements[2].value;
		const newTask = task(name, note, date);
		addTask(newTask);
		console.log(taskArray);
	};

	return { name, taskArray, addTask, displaytasks };
};

export default project;
