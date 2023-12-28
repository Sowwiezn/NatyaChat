const registerForm = document.getElementById('regAc')

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const {login, password, passwordCheck} = registerForm
    if(password.value !== passwordCheck.value){
        return alert('')
    }
    const user = JSON.stringify({
        login: login.value,
        password: password.value
    })
    const xhr = new XMLHttpRequest
    xhr.open('POST', '/api/register')
    xhr.send(user)
    xhr.onload = () => alert(xhr.response)
})