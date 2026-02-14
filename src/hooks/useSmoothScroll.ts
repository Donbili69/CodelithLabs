import { useEffect, useCallback } from 'react'

/**
 * Custom hook for enhanced smooth scrolling behavior
 * Provides smooth scroll to elements and offset handling for fixed headers
 */
export const useSmoothScroll = (headerOffset: number = 80) => {
  const scrollToElement = useCallback(
    (elementId: string) => {
      const element = document.getElementById(elementId)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    },
    [headerOffset]
  )

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    // Enhance default anchor link behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const hash = anchor.getAttribute('href')
        if (hash && hash !== '#') {
          const elementId = hash.substring(1)
          scrollToElement(elementId)

          // Update URL without scrolling
          history.pushState(null, '', hash)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [scrollToElement])

  return { scrollToElement, scrollToTop }
}

/**
 * Initialize smooth scroll behavior on the document
 */
export const initSmoothScroll = () => {
  // Enable smooth scrolling in CSS as fallback
  document.documentElement.style.scrollBehavior = 'smooth'

  // Add scroll padding to account for fixed header
  document.documentElement.style.scrollPaddingTop = '80px'
}
