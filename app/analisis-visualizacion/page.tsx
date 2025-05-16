"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HeartPulse, AlertTriangle, ThumbsUp, Info, HelpCircle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Datos de ejemplo para diferentes patologías
const DATOS_EJEMPLO = {
  normal: {
    nombre: "Ritmo Sinusal Normal",
    datos:
      "1.2, 1.3, 1.5, 1.7, 2.0, 2.2, 2.0, 1.8, 1.5, 1.3, 1.2, 1.1, 1.0, 1.2, 1.5, 1.8, 2.1, 2.3, 2.1, 1.9, 1.6, 1.4, 1.2, 1.1",
    descripcion: "Patrón regular con ondas P seguidas de complejos QRS. Frecuencia cardíaca entre 60-100 lpm.",
  },
  taquicardia: {
    nombre: "Taquicardia Sinusal",
    datos:
      "1.0, 1.4, 1.8, 1.4, 1.0, 0.8, 1.0, 1.4, 1.8, 1.4, 1.0, 0.8, 1.0, 1.4, 1.8, 1.4, 1.0, 0.8, 1.0, 1.4, 1.8, 1.4, 1.0, 0.8",
    descripcion: "Ritmo cardíaco acelerado (>100 lpm) pero regular. Puede ser normal durante ejercicio o estrés.",
  },
  bradicardia: {
    nombre: "Bradicardia Sinusal",
    datos:
      "1.0, 1.2, 1.5, 1.8, 2.0, 2.2, 2.0, 1.8, 1.5, 1.2, 1.0, 0.9, 0.8, 0.9, 1.0, 1.2, 1.5, 1.8, 2.0, 2.2, 2.0, 1.8, 1.5, 1.2",
    descripcion: "Ritmo cardíaco lento (<60 lpm) pero regular. Común en atletas o durante el sueño.",
  },
  fibrilacion: {
    nombre: "Fibrilación Auricular",
    datos:
      "1.2, 0.8, 1.5, 0.9, 1.7, 1.1, 0.7, 1.4, 1.0, 1.6, 0.8, 1.3, 0.9, 1.5, 1.1, 0.7, 1.2, 0.8, 1.4, 1.0, 1.6, 0.9, 1.3, 0.7",
    descripcion: "Ritmo irregular con ausencia de ondas P. Latidos auriculares caóticos y rápidos.",
  },
  bloqueo: {
    nombre: "Bloqueo AV de Primer Grado",
    datos:
      "1.0, 1.2, 1.5, 1.8, 2.0, 2.2, 2.0, 1.8, 1.5, 1.2, 1.0, 0.9, 0.8, 0.9, 1.0, 1.2, 1.5, 1.8, 2.0, 2.2, 2.0, 1.8, 1.5, 1.2",
    descripcion:
      "Intervalo PR prolongado (>0.20 segundos). La conducción eléctrica desde las aurículas a los ventrículos está retrasada.",
  },
  isquemia: {
    nombre: "Isquemia Miocárdica",
    datos:
      "1.0, 1.3, 1.6, 1.9, 2.1, 2.0, 1.8, 1.5, 1.2, 0.9, 0.7, 0.5, 0.3, 0.5, 0.7, 0.9, 1.2, 1.5, 1.8, 2.0, 2.1, 1.9, 1.6, 1.3",
    descripcion: "Depresión del segmento ST. Indica flujo sanguíneo reducido al músculo cardíaco.",
  },
  infarto: {
    nombre: "Infarto de Miocardio",
    datos:
      "1.0, 1.3, 1.6, 1.9, 2.2, 2.5, 2.8, 2.5, 2.2, 1.9, 1.6, 1.3, 1.0, 0.7, 0.4, 0.1, 0.4, 0.7, 1.0, 1.3, 1.6, 1.9, 2.2, 2.5",
    descripcion: "Elevación del segmento ST. Indica daño al músculo cardíaco por falta de flujo sanguíneo.",
  },
}

export default function AnalisisVisualizacionPage() {
  const [heartRate, setHeartRate] = useState("")
  const [oxygenLevel, setOxygenLevel] = useState("")
  const [ekgData, setEkgData] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState("input")
  const [analysisResult, setAnalysisResult] = useState<{
    status: "normal" | "warning" | "danger"
    heartRateAnalysis: string
    oxygenAnalysis: string
    recommendations: string[]
  } | null>(null)
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([])
  const [showReferenceLine, setShowReferenceLine] = useState(false)
  const [referenceValue, setReferenceValue] = useState("1.5")
  const [patologiaSeleccionada, setPatologiaSeleccionada] = useState("")
  const [descripcionPatologia, setDescripcionPatologia] = useState("")

  // Función para generar datos de ejemplo
  const generateSampleData = (tipo = "normal") => {
    if (DATOS_EJEMPLO[tipo as keyof typeof DATOS_EJEMPLO]) {
      const patologia = DATOS_EJEMPLO[tipo as keyof typeof DATOS_EJEMPLO]
      setEkgData(patologia.datos)
      setDescripcionPatologia(patologia.descripcion)

      // Convertir los datos en formato para el gráfico
      const dataPoints = patologia.datos
        .split(",")
        .map((point, index) => ({
          name: `${index}`,
          value: Number.parseFloat(point.trim()),
        }))
        .filter((point) => !isNaN(point.value))

      setChartData(dataPoints)
    }
  }

  // Efecto para cargar datos cuando se selecciona una patología
  useEffect(() => {
    if (patologiaSeleccionada) {
      generateSampleData(patologiaSeleccionada)
    }
  }, [patologiaSeleccionada])

  // Función para limpiar los datos de análisis
  const handleClearAnalysisData = () => {
    setHeartRate("")
    setOxygenLevel("")
    setEkgData("")
    setShowResults(false)
    setAnalysisResult(null)
    setChartData([])
    setPatologiaSeleccionada("")
    setDescripcionPatologia("")
    setActiveTab("input")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Convertir los datos de EKG en un array para el gráfico si están disponibles
    if (ekgData) {
      const dataPoints = ekgData
        .split(",")
        .map((point, index) => ({
          name: `${index}`,
          value: Number.parseFloat(point.trim()),
        }))
        .filter((point) => !isNaN(point.value))

      setChartData(dataPoints)
    }

    // Análisis simulado basado en los valores ingresados
    const hr = Number.parseInt(heartRate)
    const o2 = Number.parseInt(oxygenLevel)

    let status: "normal" | "warning" | "danger" = "normal"
    let heartRateAnalysis = ""
    let oxygenAnalysis = ""
    const recommendations: string[] = []

    // Análisis de frecuencia cardíaca
    if (hr < 60) {
      heartRateAnalysis =
        "Frecuencia cardíaca baja (bradicardia). Esto puede ser normal en atletas o durante el sueño, pero también puede indicar un problema si experimenta síntomas como mareos o fatiga."
      status = "warning"
      recommendations.push("Consulte con un médico si experimenta síntomas como mareos, fatiga o desmayos.")
    } else if (hr >= 60 && hr <= 100) {
      heartRateAnalysis = "Frecuencia cardíaca dentro del rango normal para adultos en reposo."
      recommendations.push("Mantenga un estilo de vida saludable con ejercicio regular y una dieta equilibrada.")
    } else {
      heartRateAnalysis =
        "Frecuencia cardíaca elevada (taquicardia). Puede ser normal durante el ejercicio o estrés, pero en reposo podría indicar ansiedad, deshidratación, o problemas cardíacos."
      status = hr > 120 ? "danger" : "warning"
      recommendations.push("Reduzca el consumo de cafeína y practique técnicas de relajación.")
      if (hr > 120) {
        recommendations.push("Busque atención médica si la frecuencia cardíaca alta persiste en reposo.")
      }
    }

    // Análisis de nivel de oxígeno
    if (o2 < 90) {
      oxygenAnalysis = "Nivel de oxígeno bajo, lo que puede indicar hipoxemia. Esto requiere atención médica inmediata."
      status = "danger"
      recommendations.push("Busque atención médica de emergencia inmediatamente.")
    } else if (o2 >= 90 && o2 < 95) {
      oxygenAnalysis = "Nivel de oxígeno por debajo de lo óptimo. Podría indicar problemas respiratorios leves."
      status = "warning"
      recommendations.push("Monitoree sus niveles de oxígeno regularmente y consulte con un médico.")
    } else {
      oxygenAnalysis = "Nivel de oxígeno dentro del rango normal."
      recommendations.push(
        "Continúe con actividades que promuevan una buena salud pulmonar, como ejercicio aeróbico moderado.",
      )
    }

    setAnalysisResult({
      status,
      heartRateAnalysis,
      oxygenAnalysis,
      recommendations,
    })

    setShowResults(true)
    setActiveTab("results")
  }

  const handleGenerateChart = () => {
    // Convertir los datos de EKG en un array para el gráfico
    const dataPoints = ekgData
      .split(",")
      .map((point, index) => ({
        name: `${index}`,
        value: Number.parseFloat(point.trim()),
      }))
      .filter((point) => !isNaN(point.value))

    setChartData(dataPoints)
  }

  // Añadir esta función después de handleGenerateChart
  const handleClearData = () => {
    setEkgData("")
    setChartData([])
    setPatologiaSeleccionada("")
    setDescripcionPatologia("")
  }

  return (
    <div className=" py-10" id="top">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Análisis y Visualización de Datos Cardíacos</h1>

      {/* Sección de Visualización */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Visualización de EKG</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Configuración del Gráfico</CardTitle>
              <CardDescription>Ingrese los datos de su EKG y personalice la visualización</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ekg-data">Datos del EKG</Label>
                <Input
                  id="ekg-data"
                  placeholder="Ej: 1.2, 1.5, 0.8, 1.7, 2.1, 1.9, 1.2, 0.7"
                  value={ekgData}
                  onChange={(e) => setEkgData(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="patologia-ejemplo">Cargar datos de ejemplo</Label>
                <Select value={patologiaSeleccionada} onValueChange={setPatologiaSeleccionada}>
                  <SelectTrigger id="patologia-ejemplo">
                    <SelectValue placeholder="Seleccionar patología" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Ritmo Sinusal Normal</SelectItem>
                    <SelectItem value="taquicardia">Taquicardia Sinusal</SelectItem>
                    <SelectItem value="bradicardia">Bradicardia Sinusal</SelectItem>
                    <SelectItem value="fibrilacion">Fibrilación Auricular</SelectItem>
                    <SelectItem value="bloqueo">Bloqueo AV de Primer Grado</SelectItem>
                    <SelectItem value="isquemia">Isquemia Miocárdica</SelectItem>
                    <SelectItem value="infarto">Infarto de Miocardio</SelectItem>
                  </SelectContent>
                </Select>
                {descripcionPatologia && <p className="text-sm text-gray-600 mt-1 italic">{descripcionPatologia}</p>}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="show-reference"
                  checked={showReferenceLine}
                  onChange={(e) => setShowReferenceLine(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="show-reference">Mostrar línea de referencia</Label>
              </div>

              {showReferenceLine && (
                <div className="space-y-2">
                  <Label htmlFor="reference-value">Valor de referencia</Label>
                  <Input
                    id="reference-value"
                    type="number"
                    step="0.1"
                    value={referenceValue}
                    onChange={(e) => setReferenceValue(e.target.value)}
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleGenerateChart} className="flex-1 mr-2">
                Generar Gráfico
              </Button>
              {chartData.length > 0 && (
                <Button variant="outline" onClick={handleClearData} className="flex-1 ml-2">
                  Limpiar datos
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Modificar la sección del gráfico para ajustar el espacio y añadir botón de limpiar */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Visualización del EKG</CardTitle>
              <CardDescription>Representación gráfica de los datos ingresados</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {chartData.length > 0 ? (
                <div className="w-full" style={{ height: chartData.length > 0 ? "300px" : "auto" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      {showReferenceLine && (
                        <ReferenceLine
                          y={Number.parseFloat(referenceValue)}
                          stroke="#888"
                          strokeDasharray="3 3"
                          label={{ value: `Ref: ${referenceValue}`, position: "right" }}
                        />
                      )}
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ r: 1 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <p className="text-gray-500 mb-4">No hay datos para visualizar</p>
                  <Button variant="outline" onClick={() => generateSampleData()}>
                    Cargar datos de ejemplo
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-gray-500">
                <p>Esta visualización es una representación de los datos ingresados.</p>
                <TooltipProvider>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                        <HelpCircle className="h-4 w-4" />
                        <span className="sr-only">Aviso médico</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Para un análisis médico preciso, consulte con un profesional de la salud. Esta herramienta es
                        solo para fines informativos.
                      </p>
                    </TooltipContent>
                  </UITooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Sección de Análisis */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Análisis de Datos Cardíacos</h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="input">Ingresar Datos</TabsTrigger>
            <TabsTrigger value="results" disabled={!showResults}>
              Resultados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="input">
            <Card>
              <CardHeader>
                <CardTitle>Ingrese sus datos de salud cardíaca</CardTitle>
                <CardDescription>
                  Introduzca los valores obtenidos de su dispositivo para realizar un análisis detallado.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="heart-rate">Frecuencia Cardíaca (BPM)</Label>
                    <Input
                      id="heart-rate"
                      type="number"
                      placeholder="Ej: 75"
                      value={heartRate}
                      onChange={(e) => setHeartRate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="oxygen-level">Nivel de Oxígeno (%)</Label>
                    <Input
                      id="oxygen-level"
                      type="number"
                      placeholder="Ej: 98"
                      value={oxygenLevel}
                      onChange={(e) => setOxygenLevel(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ekg-data-analysis">Datos del Gráfico de Pulso (Opcional)</Label>
                    <p className="text-sm text-gray-500">
                      Ingrese los valores separados por comas (ej: 1.2, 1.5, 0.8, 1.7, ...)
                    </p>
                    <Input
                      id="ekg-data-analysis"
                      placeholder="Ej: 1.2, 1.5, 0.8, 1.7, 2.1, 1.9, 1.2, 0.7"
                      value={ekgData}
                      onChange={(e) => setEkgData(e.target.value)}
                    />
                    <div className="mt-2">
                      <Label>O seleccione un patrón de ejemplo:</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {Object.entries(DATOS_EJEMPLO).map(([key, value]) => (
                          <Button
                            key={key}
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setPatologiaSeleccionada(key)
                              generateSampleData(key)
                            }}
                          >
                            {value.nombre}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="submit" className="flex-1 mr-2">
                    Analizar Datos
                  </Button>
                  <Button type="button" variant="outline" onClick={handleClearAnalysisData} className="flex-1 ml-2">
                    Limpiar datos
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="results">
            {analysisResult && (
              <div className="space-y-6">
                <Alert
                  variant={
                    analysisResult.status === "normal"
                      ? "default"
                      : analysisResult.status === "warning"
                        ? "default"
                        : "destructive"
                  }
                >
                  {analysisResult.status === "normal" ? (
                    <ThumbsUp className="h-4 w-4" />
                  ) : analysisResult.status === "warning" ? (
                    <AlertTriangle className="h-4 w-4" />
                  ) : (
                    <AlertTriangle className="h-4 w-4" />
                  )}
                  <AlertTitle>
                    {analysisResult.status === "normal"
                      ? "Estado Normal"
                      : analysisResult.status === "warning"
                        ? "Precaución"
                        : "Atención Requerida"}
                  </AlertTitle>
                  <AlertDescription>
                    {analysisResult.status === "normal"
                      ? "Sus valores están dentro de los rangos normales."
                      : analysisResult.status === "warning"
                        ? "Algunos valores requieren atención y seguimiento."
                        : "Se recomienda buscar atención médica para evaluar estos valores."}
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <HeartPulse className="mr-2 h-5 w-5 text-red-500" />
                      Análisis de Frecuencia Cardíaca
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{analysisResult.heartRateAnalysis}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Análisis de Nivel de Oxígeno</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{analysisResult.oxygenAnalysis}</p>
                  </CardContent>
                </Card>

                {chartData.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Visualización del Pulso</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="w-full" style={{ height: "300px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="#10b981"
                              strokeWidth={2}
                              dot={{ r: 1 }}
                              activeDot={{ r: 5 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Info className="mr-2 h-5 w-5 text-blue-500" />
                      Recomendaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center text-sm text-gray-500 italic">
                      <p>Recuerde: Esta información es solo orientativa.</p>
                      <TooltipProvider>
                        <UITooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                              <HelpCircle className="h-4 w-4" />
                              <span className="sr-only">Aviso médico</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              Siempre consulte con un profesional médico. Esta herramienta no sustituye el consejo,
                              diagnóstico o tratamiento médico profesional.
                            </p>
                          </TooltipContent>
                        </UITooltip>
                      </TooltipProvider>
                    </div>
                    <Button variant="outline" onClick={handleClearAnalysisData}>
                      Nuevo análisis
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Sección de Interpretación de EKG */}
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Interpretación de Gráficos EKG</CardTitle>
          <CardDescription>
            Información básica sobre cómo interpretar los patrones en un electrocardiograma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Componentes principales de un EKG</h3>
              <p className="text-sm text-gray-600 mt-1">
                Un electrocardiograma (EKG) registra la actividad eléctrica del corazón y muestra varios componentes
                clave:
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                <li>
                  <strong>Onda P:</strong> Representa la despolarización auricular (contracción de las aurículas).
                </li>
                <li>
                  <strong>Complejo QRS:</strong> Representa la despolarización ventricular (contracción de los
                  ventrículos).
                </li>
                <li>
                  <strong>Onda T:</strong> Representa la repolarización ventricular (relajación de los ventrículos).
                </li>
                <li>
                  <strong>Intervalo PR:</strong> Tiempo desde el inicio de la onda P hasta el inicio del complejo QRS.
                </li>
                <li>
                  <strong>Intervalo QT:</strong> Tiempo desde el inicio del complejo QRS hasta el final de la onda T.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">Patrones comunes</h3>
              <p className="text-sm text-gray-600 mt-1">
                Algunos patrones comunes que pueden observarse en un EKG incluyen:
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                <li>
                  <strong>Ritmo sinusal normal:</strong> Patrón regular con ondas P seguidas de complejos QRS.
                </li>
                <li>
                  <strong>Taquicardia:</strong> Frecuencia cardíaca elevada (más de 100 latidos por minuto).
                </li>
                <li>
                  <strong>Bradicardia:</strong> Frecuencia cardíaca baja (menos de 60 latidos por minuto).
                </li>
                <li>
                  <strong>Arritmias:</strong> Irregularidades en el ritmo cardíaco.
                </li>
                <li>
                  <strong>Elevación del segmento ST:</strong> Puede indicar un infarto de miocardio (ataque cardíaco).
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-sm text-gray-500 italic">
            <p>
              Nota: Esta información es solo educativa. La interpretación precisa de un EKG requiere formación médica
              especializada.
            </p>
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                    <HelpCircle className="h-4 w-4" />
                    <span className="sr-only">Aviso médico</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>
                    Esta información es únicamente con fines educativos. Siempre consulte con un profesional de la salud
                    calificado para la interpretación de resultados médicos.
                  </p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
