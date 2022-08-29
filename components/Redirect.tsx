import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Redirection = {
    to?: string,
}

export default function({to}: Redirection) {
    const router = useRouter();
    
    React.useLayoutEffect(() => {
        router.replace(`${to}`)
    }, [])
    
    return <></>
}