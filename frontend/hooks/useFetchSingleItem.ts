import { useState, useEffect } from 'react'
import api from '@/utils/api'
import axios from 'axios'
import { showToast } from '@/utils/toast'
import { ItemProps } from '@/types/type'

function useFetchSingleItem(endpoint: string, id: string) {
  console.log(id)
  console.log(endpoint)

  const [item, setItem] = useState<ItemProps | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!endpoint || !id) {
      setError('Invalid endpoint or ID')
      setIsLoading(false)
      return
    }

    const fetchItems = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const res = await api.get(`${endpoint}/${id}`)
        console.log(res)

        if (res.status === 200) {
          setItem(res.data)
        } else {
          setError(`Unexpected response status: ${res.status}`)
        }
      } catch (err) {
        if (axios.isAxiosError(error))
          showToast.error(
            "We couldn't load the items. Please check your internet connection or try again later."
          )

        setError(`Failed to fetch item: ${err}`)
      } finally {
        setIsLoading(false)
      }
    }

    fetchItems()
  }, [endpoint, id, error])

  return { item, isLoading, error, setItem }
}

export default useFetchSingleItem
