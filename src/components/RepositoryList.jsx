import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos


const repository = {
    name: 'Repositorio 1',
    description: 'Forms in ReactJS',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(res => res.json())
        .then(data => setRepositories(data));
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Respositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}