// alert('Hello')
const socket = io()
const form = document.getElementById('form')
const input = document.getElementById('input')
const message = document.getElementById('message')
const buttnNick = document.getElementById('buttnNick')

socket.on('all_messages', function(msgArray){
    msgArray.forEach(msg => {
        let item = document.createElement('li')
        item.textContent = msg.login + ':' +msg.content
        messages.appendChild(item)
    });
    window.scrollTo(0, document.body.scrollHeight)
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(input.value){
        socket.emit('new_message', input.value)
        input.value = ''
    }
})
socket.on('message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    message.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

function changeNickname(){
    let nickname = prompt(`choose your nickname.`)
    if (nickname){
        socket.emit('set_nickname', nickname)
    }
}

changeNickname()