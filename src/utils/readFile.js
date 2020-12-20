const readFile = async (src) => {
	const response = await fetch(src);
	return response.text();
}

export default readFile;
