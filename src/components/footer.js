import React from "react";
import { Icon } from "@iconify/react"

const communityList = [
    {
        name: "E-mail",
        icon: "fluent:mail-48-filled",
        href: "",
    },
    {
        name: "Facebook",
        icon: "akar-icons:facebook-fill",
        href: "",
    },
    {
        name: "Instagram",
        icon: "akar-icons:instagram-fill",
        href: "",
    },
    {
        name: "Line 社群",
        icon: "bi:line",
        href: "",
    },
    {
        name: "Discord",
        icon: "akar-icons:discord-fill",
        href: "",
    },
]

const Footer = () => {
    return (
        <div className="bg-blue-200 w-full py-24 px-12 text-center">
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24">
                <div>
                    <p className="font-bold">iOS Club</p>
                    <p className="text-gray-600 my-6">Feng Chia University</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold">Our Activities</p>
                    <a href="" className="text-gray-600">行事曆</a>
                    <a href="" className="text-gray-600">活動相簿</a>
                    <a href="" className="text-gray-600">報名活動</a>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold">Our Club</p>
                    <a href="" className="text-gray-600">歷屆社團幹部</a>
                    <a href="" className="text-gray-600">合作夥伴</a>
                    <a href="" className="text-gray-600">相關單位</a>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold flex flex-row">Community</p>
                    {communityList.map((item, index) => (
                        <a href={item.href} className="text-gray-600" key={index}><Icon icon={item.icon} className="inline pr-1" />{item.name}</a>
                    ))}
                </div>
            </div>
            <div className="pt-12 text-gray-600">iOS Club 2016 - 2021 © All right reserved</div>
        </div>
    )
}

export default Footer;
