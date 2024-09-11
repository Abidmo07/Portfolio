import { FaFacebook,FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa"
export default function NavBar() {
  return (
         <>
         <div className="flex justify-between p-10  ">
            
            <h1 className="font-semibold">Ramzi.Dev</h1>
            <div className="flex gap-3 ">
                <a className=" hover:text-blue-800 hover:scale-110" href="">
                    <FaFacebook size={30}></FaFacebook>
                </a>
                <a className=" hover:text-pink-700 hover:scale-110" href="">
                    <FaInstagram size={30}></FaInstagram>
                </a>
                <a className=" hover:text-gray-700 hover:scale-110" href="">
                    <FaGithub size={30}></FaGithub>
                </a>
                <a className=" hover:text-[#0A66C2] hover:scale-110" href="">
                    <FaLinkedin size={30}></FaLinkedin>
                </a>
                
            </div>
         </div>
         </>
  )
}
