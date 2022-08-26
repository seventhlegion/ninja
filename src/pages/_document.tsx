import { NextPage } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'

const Document: NextPage = () => (
    <Html>
        <Head />
        <body className='transition-all delay-200'>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document