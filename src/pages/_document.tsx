import { NextPage } from 'next'
import { Head, Html, Main, NextScript } from 'next/document'

const Document: NextPage = () => (
    <Html>
        <Head />
        <body className='ease-in duration-500 transition-colors'>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document