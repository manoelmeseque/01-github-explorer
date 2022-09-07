import { BsEmojiFrown } from 'react-icons/bs'
import '../styles/repositorynotfound.scss';

export function RepositoryNotFound(){
    return (
      
       <div className="repository-not-found">
            <strong>Nenhum repositório encontrado.</strong>
            <BsEmojiFrown className="icon" />
       </div> 
    )
}