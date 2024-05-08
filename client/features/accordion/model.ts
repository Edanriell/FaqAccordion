import gsap from "gsap";

export const changeAccordionButtonTextColor = (index: number) => {
	gsap.to(`.accordion-button-${index}`, {
		color: "#ad28eb",
		duration: 0.25
	});
};

export const invertChangeAccordionButtonTextColor = (index: number) => {
	gsap.to(`.accordion-button-${index}`, {
		color: "#301534",
		duration: 0.5
	});
};

export const openAccordion = (index: number) => {
	gsap.to(`.accordion-circle-${index}`, {
		backgroundColor: "#301534",
		duration: 0.25,
		ease: "power2"
	});

	gsap.to(`.accordion-horizontal-line-${index}`, {
		rotate: "+=90",
		scale: 0,
		opacity: 0,
		duration: 0.25,
		ease: "power2"
	});

	gsap.to(`.accordion-vertical-line-${index}`, {
		rotate: "+=90",
		duration: 0.25,
		ease: "power2"
	});

	gsap.set(`.accordion-text-content-${index}`, {
		display: "block",
		opacity: 0,
		paddingTop: "24px",
		translateY: "-24px"
	});

	gsap.to(`.accordion-text-content-${index}`, {
		translateY: "0px",
		height: "auto",
		opacity: 1,
		duration: 0.25,
		ease: "power2"
	});
};

export const closeAccordion = (index: number) => {
	gsap.to(`.accordion-circle-${index}`, {
		backgroundColor: "#ad28eb",
		duration: 0.25,
		ease: "power2"
	});

	gsap.to(`.accordion-horizontal-line-${index}`, {
		rotate: "+=90",
		scale: 1,
		opacity: 1,
		duration: 0.25,
		ease: "power2"
	});

	gsap.to(`.accordion-vertical-line-${index}`, {
		rotate: "+=90",
		duration: 0.25,
		ease: "power2"
	});

	gsap.to(`.accordion-text-content-${index}`, {
		height: 0,
		opacity: 0,
		duration: 0.25,
		ease: "power2",
		paddingTop: "0px",
		onComplete: () => {
			gsap.set(`.accordion-text-content-${index}`, {
				display: "none",
				paddingTop: "24px"
			});
		}
	});
};
