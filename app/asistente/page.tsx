"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, User, Info, AlertTriangle, HelpCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Preguntas predefinidas
const PREGUNTAS_PREDEFINIDAS = [
  "¿Qué es un electrocardiograma?",
  "¿Cuáles son los valores normales de frecuencia cardíaca?",
  "¿Qué significa tener la presión arterial alta?",
  "¿Cómo puedo mejorar mi salud cardíaca?",
  "¿Qué síntomas indican un problema cardíaco?",
  "¿Qué es la arritmia cardíaca?",
  "¿Cómo afecta el estrés al corazón?",
  "¿Qué alimentos son buenos para el corazón?",
]

// Respuestas predefinidas
const RESPUESTAS = {
  "¿Qué es un electrocardiograma?":
    "Un electrocardiograma (ECG o EKG) es una prueba que registra la actividad eléctrica del corazón. Muestra cómo late tu corazón: la frecuencia, el ritmo y la fuerza. Los médicos utilizan esta prueba para detectar problemas cardíacos como arritmias, daño por ataques cardíacos previos, problemas de flujo sanguíneo y más. Es una prueba no invasiva, rápida e indolora que se realiza colocando electrodos en el pecho, brazos y piernas.",

  "¿Cuáles son los valores normales de frecuencia cardíaca?":
    "La frecuencia cardíaca normal en reposo para adultos varía entre 60 y 100 latidos por minuto. Sin embargo, los atletas bien entrenados pueden tener frecuencias cardíacas en reposo más bajas, a veces incluso por debajo de 40 latidos por minuto. Factores como la edad, el nivel de actividad física, las emociones, el tamaño corporal y la medicación pueden afectar tu frecuencia cardíaca. Durante el ejercicio, la frecuencia cardíaca puede aumentar significativamente, dependiendo de la intensidad del ejercicio y tu condición física.",

  "¿Qué significa tener la presión arterial alta?":
    "La presión arterial alta (hipertensión) significa que la fuerza que ejerce la sangre contra las paredes de tus arterias es consistentemente demasiado alta. Se considera hipertensión cuando las lecturas son regularmente de 130/80 mmHg o superiores. La hipertensión es peligrosa porque obliga al corazón a trabajar más duro para bombear sangre y contribuye al endurecimiento de las arterias. Si no se trata, puede llevar a problemas graves como ataques cardíacos, accidentes cerebrovasculares, insuficiencia cardíaca y enfermedad renal. La buena noticia es que se puede controlar con cambios en el estilo de vida y medicamentos.",

  "¿Cómo puedo mejorar mi salud cardíaca?":
    "Para mejorar tu salud cardíaca, considera estas recomendaciones: 1) Mantén una dieta equilibrada rica en frutas, verduras, granos enteros y proteínas magras. 2) Realiza actividad física regular, al menos 150 minutos de ejercicio moderado a la semana. 3) Mantén un peso saludable. 4) No fumes y evita la exposición al humo de segunda mano. 5) Limita el consumo de alcohol. 6) Controla el estrés mediante técnicas de relajación. 7) Duerme lo suficiente (7-8 horas). 8) Controla tu presión arterial, colesterol y azúcar en sangre. 9) Realiza chequeos médicos regulares. Estos cambios en el estilo de vida pueden reducir significativamente tu riesgo de enfermedad cardíaca.",

  "¿Qué síntomas indican un problema cardíaco?":
    "Los síntomas que pueden indicar un problema cardíaco incluyen: dolor o presión en el pecho (especialmente si se irradia al brazo, mandíbula o espalda), dificultad para respirar (con o sin esfuerzo), fatiga inusual, mareos o aturdimiento, palpitaciones (sensación de latidos rápidos o irregulares), hinchazón en piernas, tobillos o pies, y desmayos. En las mujeres, los síntomas pueden ser menos típicos e incluir náuseas, vómitos, dolor de espalda o mandíbula. Si experimentas estos síntomas, especialmente dolor en el pecho junto con otros síntomas, busca atención médica inmediata, ya que podría ser una emergencia.",

  "¿Qué es la arritmia cardíaca?":
    "Una arritmia cardíaca es un latido cardíaco irregular, que puede ser demasiado rápido (taquicardia), demasiado lento (bradicardia) o irregular. Ocurre cuando los impulsos eléctricos que coordinan los latidos del corazón no funcionan correctamente. Muchas arritmias son inofensivas, pero algunas pueden ser graves o incluso potencialmente mortales. Los síntomas pueden incluir palpitaciones, sensación de aleteo en el pecho, latidos acelerados, latidos lentos, dolor en el pecho, dificultad para respirar, mareos o desmayos. Las arritmias pueden ser causadas por diversos factores como enfermedad cardíaca, estrés, cafeína, alcohol, medicamentos o desequilibrios electrolíticos.",

  "¿Cómo afecta el estrés al corazón?":
    "El estrés crónico puede afectar negativamente al corazón de varias maneras. Cuando estás estresado, tu cuerpo libera hormonas como la adrenalina y el cortisol, que aumentan la frecuencia cardíaca y la presión arterial. A largo plazo, esto puede dañar las arterias y aumentar el riesgo de hipertensión, ataques cardíacos y accidentes cerebrovasculares. Además, el estrés a menudo lleva a comportamientos poco saludables como comer en exceso, fumar, beber alcohol o ser físicamente inactivo, todos los cuales aumentan el riesgo de enfermedad cardíaca. Técnicas como la meditación, ejercicio regular, respiración profunda y mantener conexiones sociales positivas pueden ayudar a manejar el estrés y proteger tu corazón.",

  "¿Qué alimentos son buenos para el corazón?":
    "Los alimentos beneficiosos para el corazón incluyen: 1) Frutas y verduras ricas en antioxidantes, vitaminas y minerales. 2) Granos enteros como avena, quinoa y arroz integral, que proporcionan fibra y nutrientes. 3) Proteínas magras como pescado (especialmente pescados grasos ricos en omega-3 como salmón y atún), legumbres, nueces y semillas. 4) Grasas saludables como aceite de oliva, aguacates y nueces. 5) Productos lácteos bajos en grasa. Es recomendable limitar alimentos procesados, carnes rojas, alimentos fritos, productos horneados comerciales, y alimentos altos en sodio y azúcares añadidos. La dieta mediterránea es un excelente patrón alimentario para la salud cardíaca.",
}

// Tipo para los mensajes
type Mensaje = {
  id: number
  texto: string
  esUsuario: boolean
  timestamp: Date
}

export default function AsistentePage() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 0,
      texto:
        "¡Hola! Soy tu asistente virtual de salud cardíaca. ¿En qué puedo ayudarte hoy? Puedes seleccionar una de las preguntas frecuentes o escribir tu propia consulta.",
      esUsuario: false,
      timestamp: new Date(),
    },
  ])
  // Eliminar el estado inputMensaje y su setter
  // const [inputMensaje, setInputMensaje] = useState("")
  const mensajesFinRef = useRef<HTMLDivElement>(null)

  // Efecto para desplazarse al último mensaje
  useEffect(() => {
    if (mensajesFinRef.current) {
      mensajesFinRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [mensajes])

  // Modificar la función handleEnviarMensaje para que solo acepte texto predefinido
  const handleEnviarMensaje = (texto: string) => {
    if (!texto.trim()) return

    // Agregar mensaje del usuario
    const nuevoMensajeUsuario: Mensaje = {
      id: mensajes.length,
      texto: texto,
      esUsuario: true,
      timestamp: new Date(),
    }

    setMensajes((prev) => [...prev, nuevoMensajeUsuario])

    // Simular respuesta del asistente
    setTimeout(() => {
      let respuesta = ""

      // Buscar respuesta predefinida
      if (RESPUESTAS[texto as keyof typeof RESPUESTAS]) {
        respuesta = RESPUESTAS[texto as keyof typeof RESPUESTAS]
      } else {
        // Respuesta genérica si no hay una predefinida
        respuesta =
          "Lo siento, no tengo información específica sobre esa consulta. Te recomiendo consultar con un profesional de la salud para obtener información precisa sobre tu situación particular. Recuerda que este asistente solo proporciona información general y no sustituye el consejo médico profesional."
      }

      const nuevoMensajeAsistente: Mensaje = {
        id: mensajes.length + 1,
        texto: respuesta,
        esUsuario: false,
        timestamp: new Date(),
      }

      setMensajes((prev) => [...prev, nuevoMensajeAsistente])
    }, 1000)
  }

  // Función para manejar el clic en una pregunta predefinida
  const handlePreguntaClick = (pregunta: string) => {
    handleEnviarMensaje(pregunta)
  }

  // Función para formatear la hora
  const formatearHora = (fecha: Date) => {
    return fecha.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className=" py-10" id="top">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Asistente Virtual de Salud Cardíaca</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-red-500" />
                Chat con Asistente Virtual
              </CardTitle>
              <CardDescription>Realiza consultas sobre salud cardíaca y obtén información general</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto">
              {/* Modificar la sección de mensajes para centrar los iconos */}
              <div className="space-y-4">
                {mensajes.map((mensaje) => (
                  <div key={mensaje.id} className={`flex ${mensaje.esUsuario ? "justify-end" : "justify-start"}`}>
                    <div className="flex items-start max-w-[80%]">
                      {!mensaje.esUsuario && (
                        <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback className="flex items-center justify-center">
                            <Heart className="h-4 w-4 text-red-500" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            mensaje.esUsuario ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p>{mensaje.texto}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{formatearHora(mensaje.timestamp)}</p>
                      </div>
                      {mensaje.esUsuario && (
                        <Avatar className="h-8 w-8 ml-2 flex-shrink-0">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback className="flex items-center justify-center">
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={mensajesFinRef} />
              </div>
            </CardContent>
            {/* Eliminar el formulario de entrada de texto y reemplazarlo con un mensaje informativo */}
            <CardFooter className="border-t p-4">
              <p className="text-sm text-gray-500 w-full text-center">
                Selecciona una pregunta de la lista para obtener información
              </p>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
              <CardDescription>Selecciona una pregunta para obtener información rápida</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto">
              {/* Modificar los botones de preguntas frecuentes para hacerlos responsive */}
              <div className="space-y-2">
                {PREGUNTAS_PREDEFINIDAS.map((pregunta, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal"
                    onClick={() => handlePreguntaClick(pregunta)}
                  >
                    {pregunta}
                  </Button>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <Alert variant="destructive" className="w-full">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Aviso importante</AlertTitle>
                <AlertDescription className="flex items-center">
                  Este asistente virtual proporciona información general y no sustituye el consejo médico profesional.
                  <TooltipProvider>
                    <UITooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          La información proporcionada por este asistente virtual es únicamente con fines informativos y
                          educativos. No sustituye el consejo, diagnóstico o tratamiento médico profesional. En caso de
                          emergencia, contacte inmediatamente a los servicios médicos.
                        </p>
                      </TooltipContent>
                    </UITooltip>
                  </TooltipProvider>
                </AlertDescription>
              </Alert>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 h-5 w-5 text-blue-500" />
              Acerca de este Asistente Virtual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Este asistente virtual está diseñado para proporcionar información general sobre salud cardíaca. Utiliza
              respuestas predefinidas para las preguntas más comunes relacionadas con el corazón, electrocardiogramas y
              salud cardiovascular.
            </p>
            <p className="text-gray-700 mb-4">
              Puedes seleccionar una de las preguntas frecuentes de la lista o escribir tu propia consulta. Ten en
              cuenta que este asistente tiene un conocimiento limitado y solo puede responder a preguntas básicas sobre
              salud cardíaca.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
