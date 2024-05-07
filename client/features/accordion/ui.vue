<script setup lang="ts">
	import gsap from "gsap";

	type AccordionData = Array<{
		buttonName: string;
		textContent: string;
	}>;

	defineProps<{
		data: AccordionData;
	}>();

	const activeAccordion = ref<number | null>(null);

	const onMouseEnter = (index: number) => {
		gsap.to(`.accordion-button-${index}`, {
			color: "#ad28eb",
			duration: 0.25
		});
	};

	const onMouseLeave = (index: number) => {
		gsap.to(`.accordion-button-${index}`, {
			color: "#301534",
			duration: 0.5
		});
	};

	const onTouchStart = (index: number) => {
		gsap.to(`.accordion-button-${index}`, {
			color: "#ad28eb",
			duration: 0.25,
			ease: "power2"
		});
	};

	const onTouchEnd = (index: number) => {
		gsap.to(`.accordion-button-${index}`, {
			color: "#301534",
			duration: 0.5,
			ease: "power2"
		});
	};

	const onClick = (index: number) => {
		if (activeAccordion.value === index) {
			// Close the clicked accordion if it's already open
			activeAccordion.value = null;
			closeAccordion(index);
		} else {
			if (activeAccordion.value !== null) {
				// Close the currently open accordion
				const prevIndex = activeAccordion.value;
				activeAccordion.value = null;
				closeAccordion(prevIndex);
			}
			// Open the clicked accordion
			activeAccordion.value = index;
			openAccordion(index);
		}
	};

	const onTap = (index: number) => {};

	const openAccordion = (index: number) => {
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

	const closeAccordion = (index: number) => {
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
</script>

<template>
	<ul class="flex flex-col">
		<li class="grid overflow-hidden" v-for="(accordionItem, index) in data">
			<button
				@mouseenter="onMouseEnter(index)"
				@mouseleave="onMouseLeave(index)"
				@touchstart="onTouchStart(index)"
				@touchend="onTouchEnd(index)"
				@click="onClick(index)"
				@tap="onTap(index)"
				type="button"
				:class="
					'accordion-button-' +
					index +
					' flex flex-row items-center gap-x-[2.4rem] justify-between font-workSans font-semibold text-[1.6rem] md:text-[1.8rem] text-revolver-950 text-left'
				"
			>
				{{ accordionItem.buttonName }}
				<span
					:class="
						'accordion-circle-' +
						index +
						' w-[2.5rem] h-[2.5rem] rounded-full bg-electric-violet-600 flex-shrink-0 flex-grow-0 block relative z-10'
					"
				>
					<span
						:class="
							'accordion-horizontal-line-' +
							index +
							' w-[1.1rem] h-[0.2rem] bg-blue-chalk-100 block z-20 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full'
						"
					></span>
					<span
						:class="
							'accordion-vertical-line-' +
							index +
							' w-[1.1rem] h-[0.2rem] bg-blue-chalk-100 block z-20 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[90deg] rounded-full'
						"
					></span>
				</span>
			</button>
			<p
				:class="
					'accordion-text-content-' +
					index +
					' font-workSans font-normal text-[1.4rem] md:text-[1.6rem] text-left text-trendy-pink-600 pt-[2.4rem] h-[0] hidden overflow-hidden'
				"
			>
				{{ accordionItem.textContent }}
			</p>
			<span
				class="block w-full h-[0.1rem] bg-blue-chalk-100 my-[2rem] md:my-[2.4rem]"
				v-if="data.length > 1 && data.length !== index + 1"
			></span>
		</li>
	</ul>
</template>
