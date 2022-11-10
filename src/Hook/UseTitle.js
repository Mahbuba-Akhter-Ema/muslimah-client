import { useEffect } from 'react';
const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Muslimah`;
    },[title])
}

export default useTitle;