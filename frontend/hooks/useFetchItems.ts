import { useState, useEffect } from 'react'
import api from '@/utils/api'
import axios from 'axios'
import { showToast } from '@/utils/toast'

function useFetchItems<T>(endpoint: string) {
  const [items, setItems] = useState<T | []>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await api.get(endpoint)
        setItems(res.data)
      } catch (err) {
        if (axios.isAxiosError(error))
          showToast.error(
            "We couldn't load items. Please check your internet connection or try again later."
          )
        setError(`An error occurred while fetching items: ${err}`)
      } finally {
        setIsLoading(false)
      }
    }

    fetchItems()
  }, [endpoint, error])

  return { items, isLoading, error, setItems }
}

export default useFetchItems
