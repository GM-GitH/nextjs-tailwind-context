import React from 'react'

function Page({params}: {params: {id: string}}) {
  return (
    <div>Editing ID: {params.id}</div>
  )
}

export default Page