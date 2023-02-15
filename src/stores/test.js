import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTest = defineStore('test', {
  state: () => ({
  	questions: [
			{
			  "id": 1,
			  "question": "Which pseudoclass will trigger when clicking into an input?",
			  "variants": [
				":visited",
				":focus",
				":not(:disabled)",
				":active",
				":hover"
			  ]
			},
			{
			  "id": 2,
			  "question": "Which property can hide an element, while preserving the space it occupies?",
			  "variants": [
				"visibility",
				"display",
				"hide",
				"none"
			  ]
			},
			{
			  "id": 3,
			  "question": "Which property displays an image as a border around an element?",
			  "variants": [
				"border-style",
				"border-back",
				"border-background",
				"border-image"
			  ]
			},
			{
			  "id": 4,
			  "question": "Which of the following is a pseudoclass selector:",
			  "variants": [
				":active",
				".active",
				"active",
				"*"
			  ]
			},
			{
			  "id": 5,
			  "question": "Which property applies graphical effects to the area behind an element?",
			  "variants": [
				"filter",
				"back-filter",
				"backdrop-filter",
				"background-filter"
			  ]
			},
			{
			  "id": 6,
			  "question": "Which tag represents a portion of a document whose content is only partially related to the document's main content?",
			  "variants": [
				"<main>",
				"<header>",
				"<aside>"
			  ]
			},
			{
			  "id": 7,
			  "question": "Which unit of measurement doesn't exist in CSS?",
			  "variants": [
				"rem",
				"px",
				"cm",
				"em",
				"All of the above are valid"
			  ]
			},
			{
			  "id": 8,
			  "question": "What is the difference between local and global variables?",
			  "variants": [
				"no difference",
				"local variables can be accessed anywhere, unlike global variables",
				"global variables can be modified, unlike local variables",
				"local variables can be modified, unlike global variables",
				"global variables can be accessed anywhere, unlike local variables"
			  ]
			},
			{
			  "id": 9,
			  "question": "How can a datatype be declared to be a constant type?",
			  "variants": [
				"const",
				"var",
				"let",
				"constant"
			  ]
			},
			{
			  "id": 10,
			  "question": "How are functions decalred in JavaScript?",
			  "variants": [
				"function:MyFunction()",
				"function MyFunction()",
				"function = MyFunction()",
				"function = New MyFunction()"
			  ]
			}
		  ],
	answers: [
			{
			  "id": 1,
			  "answer": ":focus"
			},
			{
			  "id": 2,
			  "answer": "visibility"
			},
			{
			  "id": 3,
			  "answer": "border-image"
			},
			{
			  "id": 4,
			  "answer": ":active"
			},
			{
			  "id": 5,
			  "answer": "backdrop-filter"
			},
			{
			  "id": 6,
			  "answer": "<aside>"
			},
			{
			  "id": 7,
			  "answer": "All of the above are valid"
			},
			{
			  "id": 8,
			  "answer": "global variables can be accessed anywhere, unlike local variables"
			},
			{
			  "id": 9,
			  "answer": "const"
			},
			{
			  "id": 10,
			  "answer": "function MyFunction()"
			}
		  ],
  	switchFavs: false,
    id: 0,
    correctAnswers: 0,
    finished: false,
    started: false
  }),
  actions: {
  
  	async getData() {
  	
		console.log(this.questions)
  	
  	}

  },
  persist: {
  
  	storage: localStorage,
  	paths: [
  	
  		'id',
  		'started',
  		'questions',
  		'finished'
  	
  	],
  
  },
})
