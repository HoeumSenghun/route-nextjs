const DEFAULT_API_BASE_URL = 'https://fakestoreapi.com'

function getBaseUrl () {
  const raw =
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || DEFAULT_API_BASE_URL
  return raw.replace(/\/$/, '')
}

export async function apiClient (endpoint) {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  const url = `${getBaseUrl()}${path}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `API request failed with status ${response.status} ${response.statusText}`
      )
    }
    return await response.json()
  } catch (error) {
    console.error('API request error:', error)
    throw error
  }
}
