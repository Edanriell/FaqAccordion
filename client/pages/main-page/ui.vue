<script setup lang="ts">
	import { Accordion } from "@features";
	import { StarIcon } from "@shared/ui";

	const accordionData = [
		{
			buttonName: "What is Frontend Mentor, and how will it help me?",
			textContent:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
		},
		{
			buttonName: "Is Frontend Mentor free?",
			textContent: "Yes, Frontend Mentor is free to use."
		},
		{
			buttonName: "Can I use Frontend Mentor projects in my portfolio?",
			textContent: "Yes, you can use Frontend Mentor projects in your portfolio."
		},
		{
			buttonName: "How can I get help if I'm stuck on a challenge?",
			textContent:
				"Frontend Mentor provides various resources to help you if you're stuck on a challenge. You can refer to the solution guides, join the community forum, or reach out to the support team for assistance."
		}
	];
</script>

<template>
	<section
		class="shadow-page rounded-[0.8rem] md:rounded-[1.6rem] p-[2.4rem] md:p-[4rem] w-full max-w-[32.7rem] md:max-w-[60rem] bg-white-50 mx-[2.4rem] mt-[14.25rem] md:mt-[16.75rem] mb-[14.25rem] md:mb-[16.75rem] z-10"
	>
		<header
			class="flex flex-row items-center justify-start gap-x-[2.4rem] mb-[2.4rem] md:mb-[3.2rem]"
		>
			<StarIcon />
			<h1
				class="font-workSans font-bold text-[3.2rem] md:text-[5.6rem] text-revolver-950 uppercase"
			>
				Faq<span class="lowercase">s</span>
			</h1>
		</header>
		<Accordion :data="accordionData" active-accordions="single" />
	</section>
</template>
