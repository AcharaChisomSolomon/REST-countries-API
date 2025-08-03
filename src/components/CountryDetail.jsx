import { useParams } from "react-router-dom"

export default function CountryDetail() {
  const { name } = useParams()

  return (
    <>
      Country detail for {name}
    </>
  )
}