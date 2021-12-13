export  const showErrorMessage = (error, text) =>{
    if (error) {
        return text
    }
}

export const setLocalStorage = (name , value) => {
    localStorage.setItem( name , value )
}

export const getLocalStorage = (name) => {
    localStorage.getItem(name)
}
