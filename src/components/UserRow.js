import React from 'react'
import '../styles/UserRow.css'
import { Link } from 'react-router-dom'

export default function UserRow({
    id,firstname, lastname, age,
    company, state, city, zip, email
}) {
    return (
        <tr>
            <Link className="link-to-info-page" to={`/user/${id}`}>
            <td>{id}</td>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{age}</td>
            <td>{company}</td>
            <td>{state}</td>
            <td>{city}</td>
            <td>{zip}</td>
            <td>{email}</td>
        </Link>
        </tr>
    )
}
