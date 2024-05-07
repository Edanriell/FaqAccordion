<script setup lang="ts">
	import { Accordion } from "@features";

	const accordionData = [
		{
			buttonName: "What is Frontend Mentor, and how will it help me?",
			textContent:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
		},
		{
			buttonName: "Is Frontend Mentor free?",
			textContent:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
		},
		{
			buttonName: "Can I use Frontend Mentor projects in my portfolio?",
			textContent:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
		},
		{
			buttonName: "How can I get help if I'm stuck on a challenge?",
			textContent:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
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
			<svg
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="md:hidden"
			>
				<path
					d="M22.5 12.5C22.5024 12.8076 22.4089 13.1083 22.2324 13.3604C22.056 13.6124 21.8055 13.8032 21.5156 13.9062L15.5681 16.0691L13.4062 22.0156C13.2997 22.3027 13.1078 22.5503 12.8565 22.7251C12.6051 22.8999 12.3062 22.9936 12 22.9936C11.6938 22.9936 11.3949 22.8999 11.1435 22.7251C10.8922 22.5503 10.7003 22.3027 10.5937 22.0156L8.43093 16.0625L2.48437 13.9062C2.1973 13.7997 1.94972 13.6078 1.77489 13.3565C1.60006 13.1051 1.50635 12.8062 1.50635 12.5C1.50635 12.1938 1.60006 11.8949 1.77489 11.6435C1.94972 11.3922 2.1973 11.2003 2.48437 11.0937L8.4375 8.93093L10.5937 2.98437C10.7003 2.6973 10.8922 2.44972 11.1435 2.27489C11.3949 2.10006 11.6938 2.00635 12 2.00635C12.3062 2.00635 12.6051 2.10006 12.8565 2.27489C13.1078 2.44972 13.2997 2.6973 13.4062 2.98437L15.5691 8.9375L21.5156 11.0937C21.8055 11.1968 22.056 11.3876 22.2324 11.6396C22.4089 11.8916 22.5024 12.1924 22.5 12.5Z"
					fill="#AD28EB"
				/>
			</svg>
			<svg
				width="40"
				height="41"
				viewBox="0 0 40 41"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="hidden md:block"
			>
				<path
					d="M37.5 20.5C37.504 21.0127 37.3481 21.5139 37.0541 21.934C36.7601 22.354 36.3425 22.672 35.8594 22.8438L25.9469 26.4484L22.3438 36.3594C22.1662 36.8378 21.8464 37.2505 21.4275 37.5418C21.0085 37.8332 20.5104 37.9894 20 37.9894C19.4897 37.9894 18.9916 37.8332 18.5726 37.5418C18.1536 37.2505 17.8339 36.8378 17.6563 36.3594L14.0516 26.4375L4.14066 22.8438C3.66221 22.6662 3.24958 22.3464 2.95819 21.9274C2.66681 21.5085 2.51062 21.0103 2.51062 20.5C2.51062 19.9897 2.66681 19.4915 2.95819 19.0726C3.24958 18.6536 3.66221 18.3338 4.14066 18.1563L14.0625 14.5516L17.6563 4.64063C17.8339 4.16218 18.1536 3.74955 18.5726 3.45816C18.9916 3.16677 19.4897 3.01059 20 3.01059C20.5104 3.01059 21.0085 3.16677 21.4275 3.45816C21.8464 3.74955 22.1662 4.16218 22.3438 4.64063L25.9485 14.5625L35.8594 18.1563C36.3425 18.328 36.7601 18.646 37.0541 19.066C37.3481 19.4861 37.504 19.9873 37.5 20.5Z"
					fill="#AD28EB"
				/>
			</svg>
			<h1
				class="font-workSans font-bold text-[3.2rem] md:text-[5.6rem] text-revolver-950 uppercase"
			>
				Faq<span class="lowercase">s</span>
			</h1>
		</header>
		<Accordion :data="accordionData" active-accordions="single" />
	</section>
</template>
