import { useEffect, useState } from "react"

export function useGetItemData(fetchData) {
    const [itemData, setItemData] = useState()

  useEffect(() => {
    const getData = async () => {
      setItemData(await fetchData())
    }
    getData()

}, [])

return itemData
}
