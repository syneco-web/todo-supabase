import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      console.log(`FCP: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'LCP':
      // handle LCP results
      console.log(`LCP: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'TTFB':
      // handle TTFB results
      console.log('TTFB invoked')
      break
    case 'Next.js-hydration':
      // handle hydration results
      console.log(
        `Next.js-hydration: ${Math.round(metric.value * 10) / 10} -> ${
          Math.round((metric.startTime + metric.value) * 10) / 10}`
      )
      break
    default:
      break
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
