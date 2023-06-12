import { Layout } from './common/Layout'
import { Services } from './Services'
import { CustomCursor } from './common/CustomCursor'
import './App.scss'

function App() {
  return (
    <>
      <Layout>
        <Services />
      </Layout>
      <CustomCursor />
    </>
  )
}

export default App
