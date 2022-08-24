import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
    <Html>
        <Head />
        <body className='bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-rose-500 selection:text-blue-600 dark:selection:text-emerald-600'>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document