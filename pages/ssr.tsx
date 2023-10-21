import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { supabase } from '../utils/supabase'
import { Task, Notice } from '../types/types'
import Layout from '../components/Layout'
import { createClient } from '@supabase/supabase-js'

export const getServerSideProps: GetServerSideProps = async () => {
    console.log('getServerSideProps/ssr invoked')
    
    const { data: tasks } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: true })
    const { data: notices } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: true })

    return { props: { tasks, notices } }
}

type StaticProps = {
    tasks: Task[]
    notices: Notice[]
}

const Ssr: NextPage<StaticProps> = ({ tasks, notices }) => {
    const router = useRouter()
    return (
      <Layout title='SSR'>
          <p className="mb-3 text-blue-500">SSR</p>
          <p className="mb-3 text-indigo-800">(Server Side Rendering)</p>

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
          <Link className='my-3 text-xs' href="/ssg" prefetch={false}>Link to ssg</Link>
          <Link className='my-3 text-xs' href="/isr" prefetch={false}>Link to isr</Link>
          <button className='mb-3 text-xs' onClick={() => router.push('/ssg')}>Route to ssg</button>
          <button className='mb-3 text-xs' onClick={() => router.push('/isr')}>Route to isr</button>
      </Layout>
    )
  }

export default Ssr