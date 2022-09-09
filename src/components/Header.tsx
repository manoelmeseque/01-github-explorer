import {MdExplore} from 'react-icons/md';

import '../styles/header.scss';

export function Header(){
    return (
        <header className="header-repository-list">
            <h1>
                <MdExplore className="icon"/> 
                Github Explorer
            </h1>
        </header>
    )
}