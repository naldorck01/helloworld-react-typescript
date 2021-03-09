import { Helmet } from "react-helmet"
import ItemList from "@Components/Items/ItemList"
import Layout from "@Components/Commons/Layout"

const HomePage = (): JSX.Element => {
  return (
    <Layout title="Home" subtitle="Helloworld:typescrypt">
      <>
        <section className="title--default">
          <h1>Dayli cases of COVID in Colombia</h1>
        </section>
        <ItemList />
      </>
    </Layout>
  )
}

export default HomePage
