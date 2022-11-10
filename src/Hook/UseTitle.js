import { useEffect } from 'react';
const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -titlechanges`;
    },[title])
}

export default useTitle;