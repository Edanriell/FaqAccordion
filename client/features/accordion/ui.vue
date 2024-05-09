<script setup lang="ts">
	import {
		changeAccordionButtonTextColor,
		invertChangeAccordionButtonTextColor,
		openAccordion,
		closeAccordion
	} from "./model";

	type AccordionData = Array<{
		buttonName: string;
		textContent: string;
	}>;

	type ActiveAccordions = "single" | "multiple";

	const accordionProps = defineProps<{
		data: AccordionData;
		activeAccordions: ActiveAccordions;
	}>();

	const currentlyActiveAccordions: Array<number> = reactive([]);
	const activeAccordion = ref<number | null>(null);

	const handleButtonMouseEnter = (index: number) => {
		changeAccordionButtonTextColor(index);
	};

	const handleButtonMouseLeave = (index: number) => {
		invertChangeAccordionButtonTextColor(index);
	};

	const handleButtonTouchStart = (index: number) => {
		changeAccordionButtonTextColor(index);
	};

	const handleButtonTouchEnd = (index: number) => {
		invertChangeAccordionButtonTextColor(index);
	};

	const handleButtonClick = (index: number) => {
		toggleAccordion(index);
	};

	const handleButtonTap = (index: number) => {
		toggleAccordion(index);
	};

	const toggleAccordion = (index: number) => {
		if (accordionProps.activeAccordions === "single") {
			if (activeAccordion.value === index) {
				// Close the clicked accordion if it's already open
				activeAccordion.value = null;
				closeAccordion(index);
			} else {
				if (activeAccordion.value !== null) {
					const prevIndex = activeAccordion.value;
					activeAccordion.value = null;
					closeAccordion(prevIndex);
					// Close the currently open accordion
				}
				// Open the clicked accordion
				activeAccordion.value = index;
				openAccordion(index);
			}
		}

		if (accordionProps.activeAccordions === "multiple") {
			const accordionIndex = currentlyActiveAccordions.indexOf(index);
			if (accordionIndex !== -1) {
				// Accordion is already active, so remove it
				currentlyActiveAccordions.splice(accordionIndex, 1);
				closeAccordion(index);
			} else {
				// Accordion is not active, so add it
				currentlyActiveAccordions.push(index);
				openAccordion(index);
			}
		}
	};
</script>

<template>
	<dl class="flex flex-col">
		<div class="overflow-hidden block" v-for="(accordionItem, index) in data">
			<dt class="grid relative">
				<button
					@mouseenter="handleButtonMouseEnter(index)"
					@mouseleave="handleButtonMouseLeave(index)"
					@touchstart="handleButtonTouchStart(index)"
					@touchend="handleButtonTouchEnd(index)"
					@click="handleButtonClick(index)"
					@tap="handleButtonTap(index)"
					type="button"
					:class="
						'accordion-button-' +
						index +
						' flex flex-row items-center gap-x-[2.4rem] justify-between font-workSans font-semibold text-[1.6rem] md:text-[1.8rem] text-revolver-950 text-left z-20'
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
			</dt>
			<dd class="relative">
				<p
					:class="
						'accordion-text-content-' +
						index +
						' font-workSans font-normal text-[1.4rem] md:text-[1.6rem] text-left text-trendy-pink-600 pt-[2.4rem] h-[0] hidden overflow-hidden z-10'
					"
				>
					{{ accordionItem.textContent }}
				</p>
			</dd>
			<div
				class="block w-full h-[0.1rem] bg-blue-chalk-100 my-[2rem] md:my-[2.4rem] z-10"
				v-if="data.length > 1 && data.length !== index + 1"
			></div>
		</div>
	</dl>
</template>
