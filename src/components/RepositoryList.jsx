import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
    name: 'Repositorio 1',
    description: 'Forms in ReactJS',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de Respositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}