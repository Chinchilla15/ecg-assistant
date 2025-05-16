import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CardioMonitor - Análisis de Salud Cardíaca",
  description: "Plataforma para análisis y seguimiento de datos de EKG obtenidos con Arduino",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen`}> {/* Ensure full height and flex column */}
          <Navbar />
          {/* Add flex-grow for main content and padding */}
          <main className="flex-grow px-4 py-6 sm:px-6 lg:px-8">{children}</main>
          <footer className="w-full py-6 bg-gray-100">
            <div className=" px-4 md:px-6">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-500">© 2025 CardioMonitor. Todos los derechos reservados.</p>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="/terminos" className="text-sm text-gray-500 hover:text-blue-600">
                      Términos de uso
                    </Link>
                    <Link href="/privacidad" className="text-sm text-gray-500 hover:text-blue-600">
                      Política de privacidad
                    </Link>
                    <Link href="/contacto" className="text-sm text-gray-500 hover:text-blue-600">
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </body>
    </html>
  )
}