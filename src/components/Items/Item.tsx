import { Covid } from "../../interfaces/Covid"

const Item = ({ data }: { data: Covid }): JSX.Element => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formatDate: string = new Date(data.Date).toLocaleDateString(
    "en-US",
    dateOptions
  )

  return (
    <li>
      <strong>Date</strong>:{formatDate} - <strong>Cases:</strong>
      {data.Cases}
    </li>
  )
}

export default Item
