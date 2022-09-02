const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const users = [],
    messages = []

wss.on('connection', function connection(ws) {
    users.push(ws);
    ws.on('message', function incoming(rawMessage) {
        const {name, message, date} = JSON.parse(rawMessage);
        messages.push({name, message, date})
        users.map((client)=>{
            client.send(JSON.stringify(messages))
        })
    });
    
});

    //wss.on('connection', )

console.log('Server is running on port 8080')

