const indexGoalContainer = document.querySelector('#index-goal-container')
const messageContainer = document.querySelector('#message-container')
const showGoalContainer = document.querySelector('#show-goal-container')

export const onIndexGoalSuccess = (goal) => {
    goals.forEach(goal => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${goal.Name}</h3>
            <button data-id="${goal._id}" >Show Goal</button>
        `

        indexGoalContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3> error!</h3>
        <p>${error}</p>
    `
}

export const onCreateGoalSuccess = () => {
    messageContainer.innerText = 'Let's Do This!!'
}

export const onShowGoalSuccess = (goal) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${Goal.Name}</h3>
        <p>${character.timeframe}</p>
        <p>${goal.purpose}</p>
        <p>${goal._id}</p>

        <form data-id="${goal._id}">
            <input type="text" name="Name" value="${goal.Name}" />
            <input type="number" name="Timeframe" value="${goal.timeframe}" />
            <input type="text" name="Purpose" value="${goal.purpose}" />
            <input type="text" name="Steps" value="${goal.steps}" />
            <input type="submit" value="Update Character" />
        </form>

        <button type="button" data-id="${character._id}">Delete Character</button>
    `
    showCharacterContainer.appendChild(div)
}

export const onUpdateCharacterSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteCharacterSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}