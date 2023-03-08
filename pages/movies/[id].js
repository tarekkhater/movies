import React from 'react'
import { useRouter } from 'next/router'
import { movies } from '@/Components/Home/Movies';
import Layout from '@/Components/Layout/Layout';
import SelectedMovie from '@/Components/Home/SelectedMovie';
export default function movie() {
    const {query} = useRouter()
    const {id} = query;
    const movie = movies.find(q=> q.id == id);
    if(!movie){
      return "No Movie Found"
  }
  return (
    <Layout title={movie?.name + ' - Movie'} container={<SelectedMovie movie={movie}/>}/>
  )
}
