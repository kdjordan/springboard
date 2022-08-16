import React from 'react'
import { useParams } from 'react-router-dom'
import './DogListFilter.css'
import DogDetail from './DogDetail'

function DogListFilter({dogs}) {
    const { name } = useParams()
    if(name) {
        const curDog = dogs.find(d => name.toLowerCase() === d.name.toLowerCase())
        return <DogDetail dog={curDog} />
    }
    return null
}

export default DogListFilter