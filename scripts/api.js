export const indexGoal = () => {
    return fetch(`http://localhost:8000/characters`)
}

export const createGoal = (data) => {
    return fetch(`http://localhost:8000/goal`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showGoal = (id) => {
    return fetch(`http://localhost:8000/goal/${id}`)
}

export const updateGoal = (data, id) => {
    return fetch(`http://localhost:8000/goals/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteGoal = (id) => {
    return fetch(`http://localhost:8000/goals/${id}`, {
        method: 'DELETE'
    })
}