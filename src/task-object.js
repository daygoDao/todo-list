let task = (title, note, date) => {
	title = title;
	note = note;
	date = date;

	let priority = 0;

	return { title, note, date, priority };
};

export default task;
