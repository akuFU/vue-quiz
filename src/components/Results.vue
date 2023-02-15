<template>

	<div class = "absolute top-1/3 border p-10 text-center flex flex-col items-center">
	
		<p>Test completed! Your result:</p>
		<p>Out of {{ questions }} questions, you answered {{ answers }} correctly.</p>
		<p>Your grade: {{ Math.floor((answers / questions) * 100) }}%.</p>
		<button @click = "reset" class = "border-2 p-1 hover:bg-gray-300">Take the test again.</button>
	
	</div>

</template>

<script>

import { useTest } from '@/stores/test';
import { storeToRefs } from "pinia";

export default {

	data() {
	
		return {
	
			questions: null,
			answers: null
	
		}
		
	},
	
	methods: {
	
		reset() {
		
			useTest().id = 0;
			useTest().correctAnswers = 0;
			useTest().finished = false;
		
		}
	
	},
	
	async mounted() {
	
		this.questions = await useTest().questions.length;
		this.answers = await useTest().correctAnswers;
	
	}

}

</script>
