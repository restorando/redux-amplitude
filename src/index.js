import tap from 'redux-tap'

const filterAmplitude = ({ meta }) => meta && meta.amplitude

const warn = () => window !== 'undefined' &&
  typeof window.amplitude !== 'object' &&
  console.warn('redux-amplitude has been executed but it seems like Amplitude snippet has not been loaded.')

export default () => tap(filterAmplitude, ({ key, payload }, action, store) => {
  typeof window !== 'undefined' && typeof window.amplitude === 'object'
    ? window.amplitude.logEvent(key, payload)
    : warn()
})
