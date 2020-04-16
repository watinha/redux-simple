import React from 'react';
import { useSelector } from 'react-redux';
import { list_map } from './userSlice';

export default function UserCounter () {
    const users = useSelector(list_map);
    return (
        <div>Contador de usuários: {users.length}</div>
    );
}
