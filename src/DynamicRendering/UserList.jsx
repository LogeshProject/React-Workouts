import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <ul>
            {users.map((user , index)=> (
                <li key={index}>{user.username}</li>
            ))}
        </ul>
    );
}

export default UserList;