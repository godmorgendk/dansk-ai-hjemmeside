let cursorElement = document.querySelector('.cursor')

document.addEventListener('mousemove', (event) => {
	cursorElement.style.left = `${event.pageX-12}px`
	cursorElement.style.top = `${event.pageY - 12}px`
})
