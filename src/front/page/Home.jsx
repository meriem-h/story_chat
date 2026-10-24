import React, { useState, useEffect } from 'react'
import { GitBranch, Flame } from 'lucide-react'
import Layout from '../component/layout/Layout'
import { useApi } from '../context/ApiContext'

import { useTheme, THEMES } from '../context/ThemeContext'


export default function Home() {
    const api = useApi()


    return (
        <div className="min-h-screen bg-primary-50">
            <Layout >
                Hello
            </Layout>
        </div>
    )
}