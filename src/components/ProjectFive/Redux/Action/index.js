export const increment = ()=> {
    return {
        type: "INCREMENT",
        payload: {
            increaseBy: 2
        }
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT",
        payload: {
            decreasedBy: 2
        }
    }
}