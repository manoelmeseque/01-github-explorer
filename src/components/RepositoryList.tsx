import React, { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import { Header } from "./Header";

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(res => res.json())
        .then(data => setRepositories(data));
    }, [])

    return (
        <section className="repository-list">
            <Header />

            <section className="search-box">
                <input type="text" placeholder="Buscar..."/>
                <button>
                    Search
                </button>
            </section>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem 
                    key={repository.name} 
                    repository={repository} 
                    />
                })}
            </ul>
        </section>
    )
}