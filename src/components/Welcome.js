import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

const Welcome=()=>{
    const [showWelcome, setShowWelcome]= useState();
    useEffect(()=>{
        const data=localStorage.getItem('show_welcome_app')
        setShowWelcome(JSON.parse(data) ?? true)
    },[])
    const welcomeHandle=()=>{
     setShowWelcome(false);
     localStorage.setItem('show_welcome_app', JSON.stringify(false))
    }
    return(<>
        {showWelcome &&
        <div className="container d-flex justify-content-center">
            <div className="toast my-3 text-bg-primary border-0 fade show" role="alert">
                <FontAwesomeIcon
                icon={faClose}
                style={{float:'right', margin: '5px' }}
                onClick={welcomeHandle} className="btn-close"/>
                <div className="p-4">Welcome</div>
            </div>
        </div>}
        </>
    )
}

export default Welcome;