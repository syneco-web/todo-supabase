import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { supabase } from '../utils/supabase'
import { Task, Notice } from '../types/types'
import Layout from '../components/Layout'
import { createClient } from '@supabase/supabase-js'

export const getStaticProps: GetStaticProps = async () => {
    console.log('getStaticProps/isr invoked')
    
    const { data: tasks } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: true })
    const { data: notices } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: true })

    return { props: { tasks, notices }, revalidate: 5 }
}

type StaticProps = {
    tasks: Task[]
    notices: Notice[]
}

const Isr: NextPage<StaticProps> = ({ tasks, notices }) => {
    const router = useRouter()
  return (
    <Layout title='ISR'>
        <p className="mb-3 text-indigo-500">ISR</p>
        <p className="mb-3 text-indigo-800">(Incremental Static Regeneration)</p>
        <p>Regenerate the HTML with fresh data in run time</p>
        <ul>
            <li>Direct access to ISR page</li>
            <li>Prefetch by next/link, next/router</li>
        </ul>

        <ul className="mb-3">
            {tasks && tasks.map((task) => {
                return (
                    <li key={task.id} className="my-3">
                        <p className="text-lg font-semibold">{task.title}</p>
                    </li>
                )
            })}
        </ul>
        <ul className="mb-3">
            {notices && notices.map((notice) => {
                return (
                    <li key={notice.id} className="my-3">
                        <p className="text-lg font-semibold">{notice.content}</p>
                    </li>
                )
            })}
        </ul>
        <Link className='my-3 text-xs' href="/ssr" prefetch={false}>Link to ssr</Link>
        <button className='my-3 text-xs'>Route to SSR</button>
    </Layout>
  )
}

export default Isr