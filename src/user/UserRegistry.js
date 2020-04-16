import React, { useState } from 'react';

export default function UserRegistry () {
    const [new_user, setNew_user] = useState(''),
          [users, setUsers] = useState([]);

    function add () {
        setUsers([new_user, ...users]);
        setNew_user('');
    }

    return (
        <div className="user">
            <h2>Registro de usuários</h2>
            <input type="text" value={new_user} onChange={(ev) => setNew_user(ev.target.value)} />
            <button onClick={() => add()}>adicionar...</button>
            <ul>
                {users.map((user, index) => <li key={index}>{user}</li>)}
            </ul>
        </div>
    );
}
