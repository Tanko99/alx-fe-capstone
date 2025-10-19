import { Facebook, Twitter, Linkedin } from "lucide-react";

function Footer(){
    return (
        <footer className=" bg-black text-gray-200 mt-10 py-8">
            <div className="container flex flex-col md:flex-row mx-auto items-center justify-between gap-6">
                <h1 className="text-gray-200 text-lg  font-semibold">ServiceFinder</h1>
            
            <div className="flex flex-row justify-center  items-center gap-6">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Facebook size={35} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Twitter  size={35} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={35} />
                </a>
            </div>
            <p className="text-sm md:text-righ"t > © {new Date().getFullYear()} ServiceFinder. All rights reserved. <br />
          Built with ❤️ by Tanko Fabrice Ngala.</p>
          </div>
        </footer>
    );
}

export default Footer;