import logo from "./logo.svg"
import ItemList from "@Components/Items/ItemList"
import "@Css/app.css"

const App = () => {
  return (
    <>
      <main>
        <section className="title--default">
          <h1>Dayli cases of COVID in Colombia</h1>
        </section>
        <ItemList />
      </main>
    </>
  )
}

export default App
