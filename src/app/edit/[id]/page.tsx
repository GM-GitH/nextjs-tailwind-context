import React from 'react'

function page({params}: {params: {id: string}}) {
  return (
    <div>Editing ID: {params.id}</div>
  )
}

export default page