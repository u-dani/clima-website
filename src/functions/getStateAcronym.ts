export const getStateAcronym = (state: string) => {
    let stateAcronym

    if (state.toLowerCase() === 'rio de janeiro') {
        return 'RJ'
    } else if (state.split(' ').length > 1) {
        stateAcronym = `${state.split(' ')[0][0]}${
            state.split(' ')[1][0]
        }`.toUpperCase()
    } else {
        stateAcronym = state.substring(0, 2).toUpperCase()
    }

    return stateAcronym
}
