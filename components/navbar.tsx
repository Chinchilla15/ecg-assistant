"use client"

import Link from "next/link"
import { Heart, Menu, X } from "lucide-react" // Import Menu and X icons
import { Button } from "@/components/ui/button"
import { useState } from "react" // Import useState

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 md:px-6"> {/* Added padding */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}> {/* Close menu on logo click */}
          <Heart className="h-6 w-6 text-red-500" />
          <span className="text-xl font-bold text-blue-700">CardioMonitor</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6"> {/* Combined nav and button div */}
          <nav className="flex gap-6"> {/* Original nav links container */}
            <Link href="/" className="text-sm font-medium hover:text-blue-600">
              Inicio
            </Link>
            <Link href="/analisis-visualizacion#top" className="text-sm font-medium hover:text-blue-600">
              Análisis y Visualización
            </Link>
            <Link href="/informacion#top" className="text-sm font-medium hover:text-blue-600">
              Información
            </Link>
            <Link href="/asistente#top" className="text-sm font-medium hover:text-blue-600">
              Asistente Virtual
            </Link>
          </nav>
          {/* "Analizar Datos" Button for desktop */}
          <Link href="/analisis-visualizacion#top">
            <Button className="bg-blue-600 hover:bg-blue-700">Analizar Datos</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-md">
          <nav className="flex flex-col space-y-1 p-4">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/analisis-visualizacion#top"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Análisis y Visualización
            </Link>
            <Link
              href="/informacion#top"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Información
            </Link>
            <Link
              href="/asistente#top"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Asistente Virtual
            </Link>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <Link href="/analisis-visualizacion#top" onClick={() => setIsMenuOpen(false)} className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Analizar Datos
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}