const project = (name) => {
	name = name;
	const taskArray = [];

	const addTask = (task) => {
		taskArray.push(task);
	};

	return { name, taskArray, addTask };
};

export default project;
