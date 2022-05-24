import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const modalOpen = () =>{
        setIsModalOpen(true)
    }

    const closeModal = () =>{
        setIsModalOpen(false)
    }

    const sidebarOpen = () =>{
        setIsSidebarOpen(true)
    }

    const sidebarClose = () =>{
        setIsSidebarOpen(false)
    }

    return <AppContext.Provider 
    value={{
        isModalOpen,
        isSidebarOpen,
        modalOpen,
        sidebarOpen,
        closeModal,
        sidebarClose }}>
        {children}
        </AppContext.Provider>
}

// Custom hook

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}