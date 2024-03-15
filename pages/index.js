import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import Layout from '../layout/Layout'

export default function Home() {


  return (
    <Layout
      pagina='Home'
    >
      <h1>Hola MisterDAN</h1>

    </Layout>
  )
}
