export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

// export const getLocalStorage = (key) => {
//  return JSON.parse(localStorage.getItem(key))
//  }
export const getLocalStorage = (key) => {
    return (localStorage.getItem(key))
    }