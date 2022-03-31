function resetProjectList() {
	let content = document.querySelector('.projects');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
}

export default resetProjectList;
