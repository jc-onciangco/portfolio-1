import React from 'react'

function Footer() {
    var d = new Date();  
  return (
    <footer className="h-[20vh] w-full bg-[#1D3C58] flex justify-center items-center">
                <div className="copyright text-white text-xl">
                    Copyright &copy; {d.getFullYear()} JC Onciangco. All Rights Reserved. 
                </div>
    </footer>
  )
}

export default Footer