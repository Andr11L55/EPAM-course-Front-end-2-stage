
window.addEventListener('DOMContentLoaded', () => {
    const tab = document.querySelector('.users');
    let userList = [];
    async function getUsers(callback) {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => callback(json))
    }

    function editUser(user) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
    }

    function deleteUser(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
    }

    function handleChange(e) {
        const name = e.target.parentNode.parentNode.children[0].children[0].value,
        phone = e.target.parentNode.parentNode.children[1].children[0].value,
        city = e.target.parentNode.parentNode.children[2].children[0].value,
        id = e.target.getAttribute("data-id");
        let oldUser = userList.filter((u) => id == u.id)[0];
        editUser({
            ...oldUser,
            name,
            phone,
            city
        })
        console.log(oldUser);
    }

    function displayUsers(users) {
        userList = users;
        users.forEach(user => {
            tab.insertAdjacentHTML('beforeend', `
            <tr>
                <td><input value="${user.name}"></td>
                <td><input value="${user.phone}"></td>
                <td><input value="${user.address.city}"></td>
                <td><button class="edit" data-id="${user.id}">Edit</button></td>
                <td><button class="del" data-id="${user.id}">Delete</button></td>
                </tr>`) 
        })
        const del = document.querySelectorAll('.del'),
        edit = document.querySelectorAll('.edit');
        del.forEach(btn => {
            btn.addEventListener('click', (e) => {
                deleteUser(e.target.getAttribute("data-id"));
                e.target.parentNode.parentNode.remove();
            })
        })
        edit.forEach(btn => {
            btn.addEventListener('click', (e) => {
                handleChange(e);
            })
        })
    }


    getUsers(displayUsers)
})

