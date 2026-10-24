import React, { useState, useEffect } from 'react'
import { X, Lightbulb, BookUser, BookOpenText, NotebookPen, ScrollText, Images, Download, GitBranch, ChevronRight, ChevronLeft, Palette, CalendarDays, Network, UsersRound } from 'lucide-react'

import { useTheme, THEMES } from '../../context/ThemeContext'


export default function Layout(props) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="flex h-screen">

           

            {/* Sidebar ouverte */}
            <div className={`${isOpen ? 'w-80 px-4' : 'w-0'} h-full flex flex-col transition-all duration-300 overflow-hidden bg-primary-300`}>
                <div className='p-4 flex gap-2 justify-center flex-shrink-0'>
                    <button >
                        0
                    </button>
                    
                    <button className='bg-primary-600 rounded-2xl p-2 text-primary-100 hover:bg-primary-500' onClick={() => setIsOpen(!isOpen)}>
                        <X />
                    </button>
                </div>
                <div className='flex-1 min-h-0'>content</div>
            </div>

            {/* Sidebar fermée */}
            <div className="flex">
                <div className={`${isOpen && "hidden"} p-4 bg-primary-300 flex flex-col gap-4`} onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen &&
                        <>
                            <button title="Chapitres" onClick={(e) => { e.stopPropagation(); setIsOpen(true) }}>
                                K
                            </button>
                            
                        </>
                    }
                </div>
            </div>

            {/* Page */}
            <div className="flex-1 min-w-0 overflow-hidden px-40">
                children
            </div>




            <section className="fixed bottom-6 right-0 z-50 flex items-end gap-2">


            </section>

        </div >
    )
}