import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <>
      <Link href="/about">About</Link>
      <Link href="/new">New</Link>
      <div>Task Form</div>
    </>
  )
}

export default Page