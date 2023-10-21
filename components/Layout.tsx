import { FC, ReactNode } from "react"
import Head from "next/head"
import { BadgeCheckIcon } from "@heroicons/react/solid"
import Link from "next/link"
type Title = {
    title: string
    children: ReactNode
}

const Layout: FC<Title> = ({ children, title = 'Todo app'}) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center font-mono text-gray-800'>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex">
        <Link href="/ssg"><a className='block my-4 mx-4'>SSG</a></Link>
        <Link href="/isr"><a className='block my-4 mx-4'>ISR</a></Link>
        <Link href="/csr"><a className='block my-4 mx-4'>CSR</a></Link>
        <Link href="/ssr"><a className='block my-4 mx-4'>SSR</a></Link>

      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <BadgeCheckIcon className="h-6 w-6 text-blue-500" />
      </footer>
    </div>
  )
}

export default Layout
