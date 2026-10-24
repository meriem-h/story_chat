import React, { useState, useEffect } from 'react'
import { useApi } from '../../context/ApiContext'
import { X, Pen, BadgePlus, Search, Eye, Trash2, Wand2, User, Sparkles, Star, Users, Ghost, Moon, Swords, GraduationCap, Skull } from 'lucide-react'
import { ReactSortable } from 'react-sortablejs'
import Modal from '../modal/Modal'
import ModalDelete from '../modal/ModalDelete'
import ModalCharacter from '../modal/ModalCharacter'


export default function CharacterLayout({ selectedStory }) {

    const api = useApi()
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetchCharacter()
    }, [])


    const fetchCharacter = async () => {
        const result = await api('characters:findBy', { story_id: selectedStory.id })
        setCharacters(result.data || [])
    }


    return (
        <>
            
        </>
    )
}