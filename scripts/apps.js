import { indexGoal, createGoal, showGoal, updateGoal, deleteGoal } from './api.js'
import {
    onIndexGoalSuccess,
	onFailure,
	onCreateGoalSuccess,
	onShowGoalSuccess,
	onUpdateGoalSuccess,
	onDeleteGoalSuccess,
} from './ui.js'

const createGoalForm = document.querySelector('#create-goal-form')
const indexGoalContainer = document.querySelector('#index-goal-container')
const showGoalContainer = document.querySelector('#show-goal-container')

indexGoal()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexGoalSuccess(res.goals)
    })
    .catch(onFailure)


createGoalForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const goalData = {
			goal: {
				Name: event.target['Name'].value,
				TimeFrame: event.target['Timeframe'].value,
				purpose: event.target['Purpose'].value,
				steps: event.target['Steps'].value,
			},
		}

    createGoal(goalData)
			.then(onCreateGoalSuccess)
			.catch(onFailure)
})


import {indexGoal} from './api.js'

indexGoal()
	.then((res) => res.json())
	.then(console.log)
	.catch(console.error)

import { onIndexGoalSuccess } from './ui.js'

indexGoals()
	.then((res) => res.json())
	.then((res) => onIndexGoalSuccess(res.goals))
	.catch(console.error)
	
	import { onIndexGoalSuccess, onFailure } from './ui.js'

indexGoals()
	.then((res) => res.json())
	.then((res) => onIndexGoalSuccess(res.goals))
	.catch(onFailure)



indexGoalContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)

	if (!id) return

    showGoal(id)
			.then((res) => res.json())
			.then((res) => onShowGoalSuccess(res.goal))
			.catch(onFailure)
})

showCharacterContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const goalData = {
		Goal: {
			Name: event.target['Name'].value,
			Name: event.target['TimeFrame'].value,
			timeframe: event.target['Purpose'].value,
			purpose: event.target['Steps'].value,
            steps: event.target
		},
	}

	if (!id) return

	updateGoal(goalData, id)
		// this function (onUpdateCharacterSuccess) does not need anything to run. NO params
		.then(onUpdateGoalSuccess)
		.catch(onFailure)
})

showGoalContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	delete(id)
		.then(onDeleteGoalSuccess)
		.catch(onFailure)
})