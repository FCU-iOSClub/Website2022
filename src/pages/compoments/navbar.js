import * as React from "react"
import { useMediaQuery } from 'react-responsive'

const menuItems = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About Us",
        url: "/",
    },
    {
        name: "Activities",
        url: "/",
    },
    {
        name: "Contact us",
        url: "/",
    },
]

const Navbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
    // dropdown menu
    if (isMobile) {
        return (
            <nav className="text-lg">
                <div className="text-3xl my-5 text-center">iOS Club</div>
                <ul className="flex flex-col text-center divide-y-2 border-2">
                    {menuItems.map((item, index) => (
                        <li key={index} className="bg-gray-100 ">
                            <a href={item.url} className="text-solid">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }

    return (
        <nav className="flex my-8 text-lg text-solid">
            <a href="/">iOS Club</a>
            <ul className="flex flex-grow justify-center space-x-6">
                {
                    menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
            <div>
                Join Us
            </div>
        </nav>
    )
}

export default Navbar;
