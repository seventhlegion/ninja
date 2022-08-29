import { useEffect, useState } from 'react';

export const useLoaded = () => {
    const [load, setLoad] = useState(false);

    useEffect(() => setLoad(true), [])

    return load;
}