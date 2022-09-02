window.addEventListener("DOMContentLoaded", () => {
    const ws = new WebSocket("ws://127.0.0.1:8080");
    let name = prompt('Enter your name');
    const chat = document.querySelector('.chat')
    ws.onmessage = (messages) => {
        console.log(JSON.parse(messages.data))
        document.querySelectorAll(".message-block").forEach(el => el.remove())
        JSON.parse(messages.data).forEach(message => {
            if(message.name === name) {
                chat.insertAdjacentHTML('beforeend', `
                <div class="message-block myMessage">
                    <p id="name">${message.name}</p>
                    <span id="message">${message.message}</span>
                    <p id="time">${message.date}</p>
                </div>
                `)
            } else {
                chat.insertAdjacentHTML('beforeend', `
                <div class="message-block">
                    <p id="name">${message.name}</p>
                    <span id="message">${message.message}</span>
                    <p id="time">${message.date}</p>
                </div>
                `)
            }
        })
    }

    const send = (e) => {
        e.preventDefault();
        const message = document.querySelector('.message').value;
        let date = Date().toString().split(' ')[4];
        ws.send(JSON.stringify({
            name, message, date
        }))
    }
    const form = document.querySelector('.chat-form');
    form.addEventListener('submit', send)
})


