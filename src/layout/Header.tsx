import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {

    const navbarItems = [
        {
            label: 'Escola',
            link: '' 
        },
        {
            label: 'Creche',
            link: '' 
        },
        {
            label: 'Serviços',
            link: '' 
        },
        {
            label: 'Sobre nós',
            link: '' 
        }
    ]

    return(
        <div className='w-screen h-[70px] px-72 bg-white flex items-center justify-between'>

            <div id='logo_section' className='justify-self-start space-x-4 flex items-center'>
                <img src={logo} alt='logo' height='54px' width='54px'/>
                <p className='font-ubuntu text-h1'>CIC BENFICA</p>
            </div>

            <div id='navbar' className='space-x-6 flex items-center pointer-events-auto'>
                {
                    navbarItems.map((item) =>
                    <a href='www.google.com' >
                        <p className='text-h3 transition-all duration-500 text-ubuntu hover:text-orange-400 hover:text-h1'>{item.label}</p>
                    </a>
                    )
                }
            </div>
        </div>
    )
}

const NewHeader = () => {
    return (
        <div className='w-screen h-[70px] px-[505px] grid overflow-hidden grid-cols-3 grid-rows-1 gap-2 bg-faded-black/[0.596] '>
            <div className='bg-white h-[52px] self-center'>

            </div>
            <div className='bg-white w-80 justify-self-center'>

            </div>
            <div className='bg-white'>

            </div>
        </div>
    );
}
export {
    NewHeader,
    Header
};