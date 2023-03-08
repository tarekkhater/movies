import React from 'react'
import { useRouter } from 'next/router'
import { TvShows } from '@/Components/Tv_Shows/TvShows';
import Layout from '@/Components/Layout/Layout';
import SelectedTvShow from '@/Components/Tv_Shows/SelectedTvShow';
export default function tvShow() {
    const {query} = useRouter()
    const {id} = query;
    const tvShow = TvShows.find(q=> q.id == id);
    if(!tvShow){
        return "No Movie Found"
    }
  return (
    <Layout title={tvShow?.name + ' - TvShow'} container={<SelectedTvShow tvShow={tvShow}/>}/>
  )
}
