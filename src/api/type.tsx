import { FunctionComponent, ReactNode } from 'react';

export type useQueryDependency = {
    name: string,
    username: string,
    phone: string,
    email: string,
    id: number | string,
}

export type ninjaMapProps = {
    id: number,
    name: string
}


export type ninjaComponent =
    | ReactNode
    | FunctionComponent