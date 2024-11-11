import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import Actor from './pages/Actor'
import Contact from './pages/Contact'
import About from './pages/About'
import CollectionProject from './pages/CollectionProject'
import CollectionActor from './pages/CollectionActor'
import CollectionActuality from './pages/CollectionActuality'
import Project from './pages/Project'
import Cartography from './pages/Cartography'
import Actuality from './pages/Actuality'
import Message from './pages/Message'
import Donation from './pages/Donation'
import PrivatePolicy from './pages/PrivatePolicy'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acteurs' element={<CollectionActor />} />
        <Route path='/acteurs/:actorId' element={<Actor />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/projets' element={<CollectionProject />} />
        <Route path='/projets/:projectId' element={<Project />} />
        <Route path='/cartographie' element={<Cartography />} />
        <Route path='/actualites' element={<CollectionActuality />} />
        <Route path='/actualites/:actualityId' element={<Actuality />} />
        <Route path='/messagerie' element={<Message />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/confidentialite' element={<PrivatePolicy />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App