function resetTasks() {
	let content = document.querySelector('.content');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
}

export default resetTasks;