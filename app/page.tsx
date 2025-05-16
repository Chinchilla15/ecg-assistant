import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Activity, Info } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-blue-700">
                CardioMonitor
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Tu compañero digital para el análisis y seguimiento de la salud cardíaca
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/analisis-visualizacion#top">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Analizar mis datos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/informacion#top">
                <Button variant="outline">
                  Más información <Info className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200 mt-6 max-w-3xl">
              <h2 className="text-lg font-semibold text-red-700 mb-2">AVISO MÉDICO IMPORTANTE</h2>
              <p className="text-sm text-gray-700">
                La información proporcionada por esta aplicación es únicamente con fines informativos y educativos. No
                sustituye el consejo, diagnóstico o tratamiento médico profesional. Siempre consulte a un profesional de
                la salud calificado ante cualquier duda sobre una condición médica. En caso de emergencia, contacte
                inmediatamente a los servicios médicos de emergencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-red-500 mb-2" />
                <CardTitle>Análisis de Frecuencia Cardíaca</CardTitle>
                <CardDescription>
                  Interpreta tus datos de frecuencia cardíaca y recibe información detallada sobre tu salud.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Ingresa los datos obtenidos de tu dispositivo Arduino y obtén un análisis completo de tu ritmo
                  cardíaco, incluyendo rangos normales y posibles anomalías.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/analisis-visualizacion#top">
                  <Button variant="ghost" className="text-blue-600">
                    Comenzar análisis <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Visualización de EKG</CardTitle>
                <CardDescription>Visualiza tus datos de EKG con gráficos interactivos y detallados.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Carga los datos de tu gráfico de pulso y observa una representación visual mejorada con marcadores de
                  eventos importantes y análisis de patrones.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/analisis-visualizacion#top">
                  <Button variant="ghost" className="text-blue-600">
                    Ver gráficos <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Info className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Asistente Virtual</CardTitle>
                <CardDescription>
                  Consulta con nuestro asistente virtual sobre dudas relacionadas con la salud cardíaca.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Interactúa con nuestro chatbot especializado que responde preguntas frecuentes sobre salud cardíaca,
                  interpretación de datos y recomendaciones generales.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/asistente#top">
                  <Button variant="ghost" className="text-blue-600">
                    Hablar con asistente <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
