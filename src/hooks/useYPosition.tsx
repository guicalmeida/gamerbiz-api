import { useState, useEffect } from 'react'

export default function useYPosition() {
  const [yPos, setYPos] = useState(undefined)

  function onScroll() {
    setYPos(document.body.scrollTop)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      onScroll()
      document.body.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
  }),
    []
  return yPos
}
