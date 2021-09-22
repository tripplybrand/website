import { useEffect, useState } from 'react'

export { useWindowWidth }

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleResize = () => {
      const { innerWidth: width } = window
      setWindowWidth(width)
    }

    handleResize() // get the initial size

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}
