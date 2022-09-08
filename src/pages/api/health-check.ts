// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '../../Axios/axiosInstance';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { data } = await axiosInstance.get('users');

    res.status(200).json(data);
};