import React from 'react'
import {
    FaInstagramSquare,
    FaFacebookSquare,
    FaTwitterSquare,
} from "react-icons/fa";
import { FaLinkedinIn } from 'react-icons/fa6';



const Footer = () => {
    return (
        <>
            <div class="container mx-auto footer">
                <div class="p-5 rounded-lg py-12 m-5">
                    <div class="flex flex-col ">
                        <h3 class="text-3xl leading-10 text-[#051622] w-full text-center font-bold">Sign up to place order now</h3>
                        <div class="text-base text-[#051622] w-full  md:w-2/4 self-center text-center lg:pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div class="flex flex-row justify-center space-x-3 py-4">
                        <input class="bg-white rounded-lg text-sm px-2 sm:px-3 md:px-8 py-3" type="text" placeholder="email@email.com" />
                            <input class="font-bold rounded-lg text-[#051622] bg-blue-700 hover:bg-blue-600 cursor-pointer px-3 py-1 md:px-6 md:py-3 focus:outline-none" type="submit" value="subscribe" />
                            </div>
                            <div class="font-bold text-[#051622] content-center">
                                <ul class="flex flex-row space-x-6 py-4 justify-center">
                                    <li>
                                        <a href="#" class="hover:underline hover:text-[27px] hover:translate-y-4 text-[25px] cursor-pointer"><FaFacebookSquare /> </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline hover:text-[27px] hover:translate-y-4 text-[25px] cursor-pointer"> <FaInstagramSquare /> </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline hover:text-[27px] hover:translate-y-4 text-[25px] cursor-pointer"> <FaLinkedinIn /> </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline hover:text-[27px] hover:translate-y-4 text-[25px] cursor-pointer"> <FaTwitterSquare /> </a>
                                    </li>

                                </ul>
                            </div>
                    </div>
                </div>












            </>
            )
}

            export default Footer