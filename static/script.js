// alert('Hello')
const socket = io()
const form = document.getElementById('form')
const input = document.getElementById('input')
const message = document.getElementById('message')

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(input.value){
        socket.emit('new_message', input.value)
        input.value = ''
    }
})
socket.on('massage', function(msg){
    var item = document.createElement('li')
    item.textContent = msg
    message.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})