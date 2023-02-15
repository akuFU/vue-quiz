<template>
	
	<div class = "h-screen flex justify-center">
	
		<div v-if = "!test.started" class = "absolute top-1/3 border p-10 text-center">
		
			<p>Welcome to the quiz!</p>
			
			<button @click = "test.started = true" class = "border-2 p-1 my-4 hover:bg-gray-300">Begin.</button>
		
		</div>
		
		<Questions v-if = "test.started && test.id != test.questions.length"/>
		
		<Results v-if = "test.finished"/>
	
	</div>
	
</template>

<script>

import { useTest } from '@/stores/test';
import Questions from '@/components/Questions.vue';
import Results from '@/components/Results.vue';

export default {

	data() {
	
		return {
		
			test: useTest(),
		
		}
	
	},
	
	components: {
	
		Questions,
		Results
	
	},

	async mounted() {
	
		await this.test.getData();
	
	}

}

</script>
