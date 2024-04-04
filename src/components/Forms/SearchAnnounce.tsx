// import React from 'react'
import { Input } from '../ui/input'
import search from '../../assets/search.svg'
import { Label } from '../ui/label'

function SearchAnnounce() {
  return (
    <div className='relative w-1/2 mx-auto mt-5 max-h-24'>
        <Label htmlFor="email">Quelle(s) annonce(s) voulez-vous voir ?</Label>
        <Input type='text' placeholder='Recherche par mot-clé'/>
        <img className="absolute top-9 right-1.5 w-5 h-5" src={search} alt="Recherche" />
    </div>
  )
}

export default SearchAnnounce