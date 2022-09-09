import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import { RepositoryNotFound } from "./RepositoryNotFound";
import { Header } from "./Header";
import { Spinner } from './Spinner';

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [typeRepository, setTypeRepository] = useState('orgs');
    const [search, setSearch] = useState("");
    const [alertEmptySearch, setAlertEmptySearch] = useState(false);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        fetch(`https://api.github.com/orgs/rocketseat/repos`)
            .then(res => res.json())
            .then(data => setRepositories(data))
            .finally(() => setSpinner(false));
    }, [])

    const fetchSearchRepositories = (r = search, t = typeRepository) => {
        if(r && t) {
            setAlertEmptySearch(false);

            setSpinner(true);
            
            fetch(`https://api.github.com/${t.trim()}/${r.trim()}/repos`)
            .then(res => res.json())
            .then(data => setRepositories(data))
            .finally(() => {
                setSearch("");
                setSpinner(false);
            });
        } else {
            setAlertEmptySearch(true);
        }
    }

    return (
        <section className="repository-list">
            <Header />

            <section className="search-box">
                <input 
                    type="text" 
                    placeholder="Buscar..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <select 
                    value={typeRepository}
                    onChange={(event) => setTypeRepository(event.target.value)}
                >
                    <option value="orgs">Organização</option>
                    <option value="users">Usuários</option>
                </select>

                <button 
                    onClick={() => fetchSearchRepositories()}
                >
                    Search
                </button>
            </section>

            {alertEmptySearch && <span className="box-alert-empty-search">
                *O campo de pesquisa está vázio.*
            </span>}

            
            <Spinner isActived={spinner} />

            {
                repositories.length ? (
                    <ul>
                        {repositories.map(repository => {
                            return <RepositoryItem 
                            key={repository.name} 
                            repository={repository} 
                            />
                        })}
                    </ul>
                ): !spinner && <RepositoryNotFound/> 
            }
            
        </section>
    )
}