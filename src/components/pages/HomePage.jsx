import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'
// import Experiences from './aboutpage-comps/Experiences'

const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/1.png'},
        {image: '/images/certificates/diploma-frontend-developer.png'},       
        {image: '/images/certificates/diploma-frontend-developer-practico.png'},       
        {image: '/images/certificates/diploma-backend.png'},       
        {image: '/images/certificates/diploma-bd.png'},       
        {image: '/images/certificates/diploma-git-github.png'},       
        {image: '/images/certificates/diploma-asincronismo-js.png'},
        {image: '/images/certificates/diploma-ecmascript-6.png'},
        {image: '/images/certificates/diploma-passport.png'},
        {image: '/images/certificates/diploma-backend-nodejs.png'},
        {image: '/images/certificates/diploma-profesional-nextjs.png'},       
        {image: '/images/certificates/diploma-react.png'},       
        {image: '/images/certificates/diploma-react-vite-tailwindcss.png'},       
        {image: '/images/certificates/diploma-react-estado.png'},       
        {image: '/images/certificates/diploma-react-patrones-render.png'},       
        {image: '/images/certificates/diploma-laboratorio-react.png'},       
        {image: '/images/certificates/diploma-javascript-practico.png'},       
        {image: '/images/certificates/diploma-configuracion-windows.png'},
        {image: '/images/certificates/diploma-web-chatgpt.png'},       
        {image: '/images/certificates/diploma-computacion-basica.png'},
        {image: '/images/certificates/diploma-cursobasicode js.png'},
        {image: '/images/certificates/diploma-fundamentos-node.png'},       
        {image: '/images/certificates/diploma-terminal.png'},       
        {image: '/images/certificates/diploma-smart-contracts.png'},       
        {image: '/images/certificates/diploma-npm.png'},       
        {image: '/images/certificates/diploma-pensamiento-logico.png'},       
        {image: '/images/certificates/diploma-programacion-basica.png'},       
        {image: '/images/certificates/hacking.png'},       
        {image: '/images/certificates/pyton.png'},       
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            {/* <Experiences/>  */}
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Contact />

        </>
    )
}

export default HomePage