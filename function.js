document.addEventListener('DOMContentLoaded', () => {
	$('.box').tilt({
		scale: 1.05,
		perspective: 3000,
		easing: 'cubic-bezier(0.21, 0.83, 0, 0.99)',
		speed: 1000,
	})

	anime({
		targets: '.box',
		easing: 'easeOutExpo',
		translateY: [-100, 0],
		duration: 1500,
		delay: (el, i) => i * 120,
		opacity: [0, 1],
	})
})
