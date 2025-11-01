import React from 'react'

export default function Footer() {
  return (
      <footer className="bg-slate-900 py-8 text-center text-gray-400 border-t border-purple-500/20 mt-16">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Muhammadhassan Gadhawala. All rights reserved.</p>
        </footer>
  )
}
