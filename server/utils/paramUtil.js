const hasNull = (...params) => {
    for (let param of params) {
        if (!param) {
            return true
        }
    }
    return false
}

const delay = async (ms) => {
    return await new Promise(resolve => setTimeout(resolve, ms))
}

export default {
    hasNull,
    delay
}
