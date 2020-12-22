const scrollTo = (anchor, options = {}) => {
	const { offset = 0 } = options;
	const node = anchor instanceof HTMLElement
		? anchor
		: document.querySelector(anchor);
	console.log(node)
	if (!node) return;
	window.scrollTo({
		top: node.getBoundingClientRect().top + window.pageYOffset - offset,
		behavior: 'smooth'
	});
}

const scrollToTop = (anchor) => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

const scrollToBottom = (anchor) => {
	window.scrollTo({
		bottom: 0,
		behavior: 'smooth'
	});
}

export {
	scrollTo,
	scrollToTop,
	scrollToBottom,
}
