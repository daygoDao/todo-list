const projectList = () => {
	const list = []; //to be used to store project objects
	const addProject = (projectObj) => {
		list.push(projectObj);
	};
	//function to delete obj from list

	return { list, addProject };
};

export default projectList;
