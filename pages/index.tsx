import Link from 'next/link'
import Signin from './auth/Signin'
import Layout from './components/Layout'

const IndexPage = () => (
  <Layout title="Prototype">
    <Signin/>
  </Layout>
)

export default IndexPage
