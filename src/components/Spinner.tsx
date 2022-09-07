import '../styles/spinner.scss';

interface SpinnerProps {
    isActived: boolean;
}

export function Spinner({isActived}: SpinnerProps){
    if(!isActived){
        return (
            <></>
        )
    }
    return (
      
       <div className="spinner-body"></div> 
    )
}