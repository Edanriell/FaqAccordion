<script setup lang="ts">
	type AccordionData = Array<{
		buttonName: string;
		textContent: string;
	}>;

	defineProps<{
		data: AccordionData;
	}>();
</script>

<template>
	<ul class="flex flex-col">
		<li class="grid" v-for="(accordionItem, index) in data">
			<button
				type="button"
				class="flex flex-row items-center gap-x-[2.4rem] justify-between font-workSans font-semibold text-[1.6rem] text-revolver-950 text-left"
			>
				{{ accordionItem.buttonName }}
				<span
					class="w-[2.5rem] h-[2.5rem] rounded-full bg-electric-violet-600 flex-shrink-0 flex-grow-0 block relative z-10"
				>
					<span
						class="w-[1.1rem] h-[0.2rem] bg-blue-chalk-100 block z-20 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full"
					></span>
					<span
						class="w-[1.1rem] h-[0.2rem] bg-blue-chalk-100 block z-20 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[90deg] rounded-full"
					></span>
				</span>
			</button>
			<p class="font-workSans font-normal text-[1.4rem] text-left text-trendy-pink-600 mt-[2.4rem]">
				{{ accordionItem.textContent }}
			</p>
			<span
				class="block w-full h-[0.1rem] bg-blue-chalk-100 my-[2rem]"
				v-if="data.length > 1 && data.length !== index + 1"
			></span>
		</li>
	</ul>
</template>
