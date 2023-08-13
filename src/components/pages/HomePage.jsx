import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'
import Experiences from './aboutpage-comps/Experiences'

const HomePage = () => {
    const certificates = [
        {image: '/public/images/certificates/1.png'},
        {image: '/public/images/certificates/diploma-frontend-developer.png'},       
        {image: '/public/images/certificates/diploma-frontend-developer-practico.png'},       
        {image: '/public/images/certificates/diploma-backend.png'},       
        {image: '/public/images/certificates/diploma-bd.png'},       
        {image: '/public/images/certificates/diploma-git-github.png'},       
        {image: '/public/images/certificates/diploma-asincronismo-js.png'},
        {image: '/public/images/certificates/diploma-ecmascript-6.png'},
        {image: '/public/images/certificates/diploma-passport.png'},
        {image: '/public/images/certificates/diploma-backend-nodejs.png'},
        {image: '/public/images/certificates/diploma-profesional-nextjs.png'},       
        {image: '/public/images/certificates/diploma-react.png'},       
        {image: '/public/images/certificates/diploma-react-vite-tailwindcss.png'},       
        {image: '/public/images/certificates/diploma-react-estado.png'},       
        {image: '/public/images/certificates/diploma-react-patrones-render.png'},       
        {image: '/public/images/certificates/diploma-laboratorio-react.png'},       
        {image: '/public/images/certificates/diploma-javascript-practico.png'},       
        {image: '/public/images/certificates/diploma-configuracion-windows.png'},
        {image: '/public/images/certificates/diploma-web-chatgpt.png'},       
        {image: '/public/images/certificates/diploma-computacion-basica.png'},
        {image: '/public/images/certificates/diploma-cursobasicode js.png'},
        {image: '/public/images/certificates/diploma-fundamentos-node.png'},       
        {image: '/public/images/certificates/diploma-terminal.png'},       
        {image: '/public/images/certificates/diploma-smart-contracts.png'},       
        {image: '/public/images/certificates/diploma-npm.png'},       
        {image: '/public/images/certificates/diploma-pensamiento-logico.png'},       
        {image: '/public/images/certificates/diploma-programacion-basica.png'},       
        {image: '/public/images/certificates/hacking.png'},       
        {image: '/public/images/certificates/pyton.png'},       
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Experiences/> 
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Contact />

        </>
    )
}

export default HomePage