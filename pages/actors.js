import React from 'react'
import Layout from '@/Components/Layout/Layout'
import Main from '@/Components/Actors/Main'
export default function actors() {
  return (
    <Layout title={'Actors - Movies'} container={<Main />} />
  )
}
