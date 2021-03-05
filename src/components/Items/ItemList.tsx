import Item from "@Components/Items/Item"
import ItemImg from "@Components/Items/ItemImg"
import useFetch from "@Hooks/useFetch"
import { Covid } from "@Interfaces/Covid"

const ItemList = (): JSX.Element => {
  const API: string = "https://api.covid19api.com/"
  const [response, loading] = useFetch(
    `${API}country/colombia/status/confirmed?from=2021-02-01T00:00:00Z&to=2021-02-15T00:00:00Z`
  )

  const renderItems = (): JSX.Element => {
    if (!response.length) {
      return <p>No data available</p>
    }

    if (loading) {
      return <p>Loading...</p>
    }

    return (
      <>
        <ItemImg />
        <section className="app list__items--default">
          <ul>
            {response &&
              response.map((data: Covid) => (
                <Item key={data.Date} data={data} />
              ))}
          </ul>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="app list__items--default">{renderItems()}</section>
    </>
  )
}

export default ItemList
