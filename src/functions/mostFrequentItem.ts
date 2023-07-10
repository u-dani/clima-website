export const mostFrequentItem = (arr: any[]) => {
    const occurrences: { [key: string]: number } = arr.reduce((acc, curr) => {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
    }, {})

    const times = Math.max(...Object.values(occurrences))

    const mostFrequently = Object.keys(occurrences).filter(
        key => occurrences[key] === times
    )

    return {
        items: mostFrequently,
        times: times,
    }
}
