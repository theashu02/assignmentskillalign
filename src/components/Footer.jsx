import Input from "./Input"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col md:flex-row bg-black w-[100%] justify-center items-center text-white md:px-[9%]">
                <div className="flex flex-col w-[80%] pt-[18%] md:pt-0 pb-[9%] md:pb-0 md:mt-[10px] md:space-y-5">
                    <span className="font-bold">GET HELP</span>
                    <div className="w-[100%] h-[1px] bg-white my-3 md:hidden"></div>
                    <div className="flex flex-col space-y-[7%] md:space-y-[4%]">
                        <p>Order Status</p>
                        <p>Returns</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="flex flex-col w-[80%] pb-8 md:space-y-5">
                    <span className="font-bold">About</span>
                    <div className="w-[100%] h-[1px] bg-white my-3 md:hidden"></div>
                    <div className="flex flex-col space-y-[7%] md:space-y-[4%]">
                        <p>Newsroom</p>
                        <p>AboutUs</p>
                    </div>
                </div>
                <div className="flex flex-col w-[80%] pb-8 md:space-y-5">
                    <span className="font-bold">Explore</span>
                    <div className="w-[100%] h-[1px] bg-white my-3 md:hidden"></div>
                    <div className="flex flex-col space-y-[7%] md:space-y-[4%]">
                        <p>Limited Edition</p>
                        <p>Become Invester</p>
                    </div>
                </div>
                <div className="flex flex-col bg-black w-[100%] justify-center items-center text-white px-[7%] md:px-0 text-center">
                    <div className="font-bold text-[20px] md:h-[30%] md:w-[350px] md:font-medium md:text-[15px] md:pt-9 md:mt-1 md:mb-3 mb-5">
                    Stay updated on new launches, special offers, and more. No spam --we promise.
                    </div>
                    <Input />
                    <div className="flex flex-row space-x-4 py-[15%] mr-[40%] md:py-[8%] md:ml-[98%]">
                      <FaFacebook className="w-6 h-6 md:w-4 md:h-4 cursor-pointer"/>
                      <FaInstagram className="w-6 h-6 md:w-4 md:h-4 cursor-pointer"/>
                      <FaYoutube className="w-6 h-6 md:w-4 md:h-4 cursor-pointer"/>
                      <FaTwitter className="w-6 h-6 md:w-4 md:h-4 cursor-pointer"/>
                    </div>
                </div>
                
            </div>

        </>
    )
}
