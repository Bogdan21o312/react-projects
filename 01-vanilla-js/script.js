const changeButton = (index) => {
    const myButton = document.getElementById(index)
    myButton.innerHTML = 'Hello world!'
    myButton.className = 'button'
}