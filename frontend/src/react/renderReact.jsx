import React from 'react'
import ReactDOM from 'react-dom/client'

export function mountReactComponent(Component, el, props) {
  const root = ReactDOM.createRoot(el)
  root.render(<Component {...props} />)
  return root
}