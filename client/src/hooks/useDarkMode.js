import { useState, useEffect } from 'react';

export const useDarkMode = initialValue => {
    const [value, setValue ] = useState(initialValue)



    useEffect(() => {
        value ? document.body.classList.remove('dark-mode') : document.body.classList.add('dark-mode');
    }, [value])

    return [value, setValue ]
}