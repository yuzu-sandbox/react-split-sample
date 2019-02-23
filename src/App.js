import React, { Suspense } from 'react'

const Nogi = React.lazy(() => import(/* webpackChunkName: "Nogi" */'./Nogi'))

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nogi />
      </Suspense>
    </div>
  )
}