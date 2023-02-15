<template>

	<div class = "absolute top-1/3 border p-10 text-center flex flex-col items-center">
	
		<p>Question №{{ questions.id }}:</p>
		<p class = "m-2">{{ questions.question }}</p>
		<div class = "text-left w-fit">
				<div v-for = "item in questions?.variants" >
				<input :id = "item" @click = "submit = `Check answer`" type = "radio" name = "radAnswer" :value = "item" v-model = "answer" :disabled = "answered"/>
				<label :for = "item" class = "pl-4 py-2">{{ item }}</label> 
			</div>
		</div>
		<div>
			<p class = "m-2" :class = "answered ? 'visible' : 'invisible'">{{ checkedAnswer }}</p>
			<button @click = "answerCheck" v-if = "!answered" class = "border-2 m-2 p-1 hover:bg-gray-300">{{ submit }}</button>
			<button @click = "nextQuestion" v-if = "answered" class = "border-2 m-2 p-1 hover:bg-gray-300">Next question</button>
		</div>
	</div>

</template>

<script>

import { useTest } from '@/stores/test'

export default {

	data() {
	
		return {
		
			answer: '',
			answered: false,
			submit: 'Check answer',
			checkedAnswer: 'placeholder',
			questions: useTest().questions[useTest().id]
		
		}
	
	},
	
	methods: {
	
		async answerCheck() {
		
			if (!this.answer.length) {
			
				this.submit = "Please choose an answer!";
				return
				
			}
			
			let trueAnswer = useTest().answers[useTest().id];
		
			if (this.answer == trueAnswer.answer) {
			
				this.checkedAnswer = "Correct!";
				useTest().correctAnswers += 1;
			
			} else {
			
				this.checkedAnswer = `Incorrect! The right answer is: "${trueAnswer.answer}"`;
			
			}
			
			this.answered = true;
		
		},
		
		nextQuestion() {
		
			useTest().id+=1;
			this.questions = useTest().questions[useTest().id];
			this.answered = false;
			this.answer = '';
			console.log(useTest().questions.length);
			if (useTest().id == useTest().questions.length) useTest().finished = true;
		
		}
	
	}

}

</script>
