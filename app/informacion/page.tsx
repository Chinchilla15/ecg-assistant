import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Activity, Brain } from "lucide-react"
import { HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function InformacionPage() {
  return (
    <div className=" py-10" id="top">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Información sobre Salud Cardíaca</h1>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto justify-start md:grid md:grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="factores">Factores de Riesgo</TabsTrigger>
          <TabsTrigger value="prevencion">Prevención</TabsTrigger>
          <TabsTrigger value="sintomas">Síntomas</TabsTrigger>
          <TabsTrigger value="diagnostico">Diagnóstico</TabsTrigger>
          <TabsTrigger value="glosario">Glosario</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-red-500" />
                Información General sobre Salud Cardíaca
              </CardTitle>
              <CardDescription>Conceptos básicos sobre el corazón y su funcionamiento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">El Corazón: El Motor de la Vida</h3>
                <p className="text-gray-700">
                  El corazón es un órgano muscular del tamaño aproximado de un puño que bombea sangre a través del
                  sistema circulatorio. Está ubicado en el centro del pecho, ligeramente inclinado hacia la izquierda.
                  El corazón late aproximadamente 100,000 veces al día, bombeando alrededor de 7,500 litros de sangre.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Estructura del Corazón</h3>
                <p className="text-gray-700">
                  El corazón está dividido en cuatro cámaras: dos aurículas (superior) y dos ventrículos (inferior). La
                  aurícula y el ventrículo derechos reciben sangre desoxigenada del cuerpo y la envían a los pulmones.
                  La aurícula y el ventrículo izquierdos reciben sangre oxigenada de los pulmones y la bombean al resto
                  del cuerpo.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">El Sistema Eléctrico del Corazón</h3>
                <p className="text-gray-700">
                  El corazón tiene su propio sistema eléctrico que controla el ritmo de los latidos. Este sistema
                  comienza en el nódulo sinoauricular (SA), conocido como el marcapasos natural del corazón. Las señales
                  eléctricas viajan desde el nódulo SA a través de las aurículas hasta el nódulo auriculoventricular
                  (AV), y luego a los ventrículos, causando que el corazón se contraiga y bombee sangre.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Frecuencia Cardíaca</h3>
                <p className="text-gray-700">
                  La frecuencia cardíaca normal en reposo para adultos varía entre 60 y 100 latidos por minuto. Los
                  atletas bien entrenados pueden tener frecuencias cardíacas en reposo más bajas, a veces incluso por
                  debajo de 40 latidos por minuto. Durante el ejercicio, la frecuencia cardíaca puede aumentar
                  significativamente, dependiendo de la intensidad del ejercicio y la condición física de la persona.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Presión Arterial</h3>
                <p className="text-gray-700">
                  La presión arterial es la fuerza que ejerce la sangre contra las paredes de las arterias. Se mide en
                  milímetros de mercurio (mmHg) y se registra como dos números: presión sistólica (cuando el corazón
                  late) y presión diastólica (cuando el corazón descansa entre latidos). Una presión arterial normal es
                  generalmente menor a 120/80 mmHg.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-gray-500 italic">
                <p>Esta información es solo educativa.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                        <HelpCircle className="h-4 w-4" />
                        <span className="sr-only">Aviso médico</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Esta información es únicamente con fines educativos. Siempre consulte con un profesional de la
                        salud calificado para obtener asesoramiento médico personalizado.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="factores">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-orange-500" />
                Factores de Riesgo Cardiovascular
              </CardTitle>
              <CardDescription>Factores que aumentan el riesgo de desarrollar enfermedades cardíacas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Factores de Riesgo No Modificables</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Edad:</strong> El riesgo de enfermedad cardíaca aumenta con la edad. Aproximadamente el 80%
                    de las personas que mueren de enfermedad coronaria tienen 65 años o más.
                  </li>
                  <li>
                    <strong>Sexo:</strong> Los hombres tienen un mayor riesgo de enfermedad cardíaca que las mujeres
                    premenopáusicas. Después de la menopausia, el riesgo de las mujeres se acerca al de los hombres.
                  </li>
                  <li>
                    <strong>Antecedentes familiares:</strong> Si sus padres u otros familiares cercanos desarrollaron
                    enfermedad cardíaca a una edad temprana, usted puede tener un mayor riesgo.
                  </li>
                  <li>
                    <strong>Etnia:</strong> Algunas etnias tienen mayores riesgos de desarrollar enfermedades cardíacas.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Factores de Riesgo Modificables</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Tabaquismo:</strong> El consumo de tabaco aumenta significativamente el riesgo de enfermedad
                    cardiovascular. La nicotina estrecha los vasos sanguíneos y el monóxido de carbono daña su
                    revestimiento interno.
                  </li>
                  <li>
                    <strong>Presión arterial alta:</strong> La hipertensión arterial no controlada puede dañar las
                    arterias, el corazón y otros órganos.
                  </li>
                  <li>
                    <strong>Colesterol alto:</strong> Niveles elevados de colesterol pueden llevar a la acumulación de
                    placa en las arterias, estrechándolas y aumentando el riesgo de enfermedad cardíaca.
                  </li>
                  <li>
                    <strong>Diabetes:</strong> La diabetes aumenta el riesgo de enfermedad cardíaca. Los niveles altos
                    de glucosa en sangre pueden dañar los nervios y vasos sanguíneos.
                  </li>
                  <li>
                    <strong>Obesidad:</strong> El exceso de peso aumenta la carga de trabajo del corazón y puede llevar
                    a hipertensión, colesterol alto y diabetes.
                  </li>
                  <li>
                    <strong>Inactividad física:</strong> La falta de ejercicio regular contribuye a la obesidad y
                    aumenta el riesgo de presión arterial alta, colesterol alto y diabetes.
                  </li>
                  <li>
                    <strong>Estrés:</strong> El estrés crónico puede aumentar la presión arterial y dañar las arterias.
                  </li>
                  <li>
                    <strong>Dieta poco saludable:</strong> Una dieta alta en grasas saturadas, grasas trans, sodio y
                    azúcares añadidos puede aumentar el riesgo de enfermedad cardíaca.
                  </li>
                  <li>
                    <strong>Consumo excesivo de alcohol:</strong> Beber demasiado alcohol puede aumentar la presión
                    arterial y los niveles de triglicéridos.
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-gray-500 italic">
                <p>Esta información es solo educativa.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                        <HelpCircle className="h-4 w-4" />
                        <span className="sr-only">Aviso médico</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Esta información es únicamente con fines educativos. Siempre consulte con un profesional de la
                        salud calificado para obtener asesoramiento médico personalizado.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="prevencion">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-green-500" />
                Prevención de Enfermedades Cardíacas
              </CardTitle>
              <CardDescription>Estrategias para mantener un corazón saludable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Alimentación Saludable</h3>
                <p className="text-gray-700 mb-2">
                  Una dieta equilibrada es fundamental para la salud del corazón. Considere estas recomendaciones:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Consuma abundantes frutas, verduras, granos enteros y legumbres.</li>
                  <li>Elija proteínas magras como pescado, aves sin piel y legumbres.</li>
                  <li>Limite el consumo de carnes rojas y procesadas.</li>
                  <li>Reduzca el consumo de alimentos ricos en grasas saturadas y trans.</li>
                  <li>Disminuya el consumo de sal (sodio) a menos de 5 gramos diarios.</li>
                  <li>Limite el consumo de azúcares añadidos.</li>
                  <li>Considere seguir patrones alimentarios como la dieta mediterránea.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Actividad Física Regular</h3>
                <p className="text-gray-700 mb-2">
                  El ejercicio regular fortalece el corazón y mejora la circulación. Se recomienda:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    Realizar al menos 150 minutos de actividad aeróbica moderada o 75 minutos de actividad intensa a la
                    semana.
                  </li>
                  <li>Incluir ejercicios de fortalecimiento muscular al menos dos días a la semana.</li>
                  <li>Reducir el tiempo sedentario, levantándose y moviéndose cada hora.</li>
                  <li>Encontrar actividades que disfrute para mantener la constancia.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Control de Factores de Riesgo</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    <strong>No fumar:</strong> Si fuma, busque ayuda para dejarlo. Evite también la exposición al humo
                    de segunda mano.
                  </li>
                  <li>
                    <strong>Controle su presión arterial:</strong> Mida su presión regularmente y siga las
                    recomendaciones médicas si es alta.
                  </li>
                  <li>
                    <strong>Mantenga el colesterol bajo control:</strong> Realice análisis periódicos y siga el
                    tratamiento prescrito si es necesario.
                  </li>
                  <li>
                    <strong>Controle la diabetes:</strong> Si tiene diabetes, mantenga sus niveles de glucosa dentro de
                    los rangos recomendados.
                  </li>
                  <li>
                    <strong>Mantenga un peso saludable:</strong> El sobrepeso aumenta el riesgo de problemas cardíacos.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Manejo del Estrés</h3>
                <p className="text-gray-700 mb-2">
                  El estrés crónico puede contribuir a la hipertensión y otros factores de riesgo. Algunas estrategias
                  incluyen:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Practicar técnicas de relajación como meditación, yoga o respiración profunda.</li>
                  <li>Dormir suficientes horas (7-8 horas para adultos).</li>
                  <li>Mantener conexiones sociales positivas.</li>
                  <li>Buscar ayuda profesional si el estrés es abrumador.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Chequeos Médicos Regulares</h3>
                <p className="text-gray-700">
                  Las revisiones médicas periódicas son esenciales para detectar factores de riesgo temprano. Consulte
                  con su médico sobre la frecuencia recomendada para su edad y perfil de riesgo.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-gray-500 italic">
                <p>Esta información es solo educativa.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                        <HelpCircle className="h-4 w-4" />
                        <span className="sr-only">Aviso médico</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Esta información es únicamente con fines educativos. Siempre consulte con un profesional de la
                        salud calificado para obtener asesoramiento médico personalizado.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="sintomas">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-red-500" />
                Síntomas de Problemas Cardíacos
              </CardTitle>
              <CardDescription>Señales de advertencia que no debe ignorar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Síntomas de Ataque Cardíaco</h3>
                <p className="text-gray-700 mb-2">
                  Los síntomas pueden variar entre hombres y mujeres, y algunas personas pueden no experimentar síntomas
                  evidentes. Los signos comunes incluyen:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    <strong>Dolor o malestar en el pecho:</strong> Puede sentirse como presión, opresión, dolor,
                    sensación de plenitud o dolor que va y viene.
                  </li>
                  <li>
                    <strong>Malestar en otras áreas del cuerpo:</strong> Dolor o malestar en uno o ambos brazos, la
                    espalda, el cuello, la mandíbula o el estómago.
                  </li>
                  <li>
                    <strong>Dificultad para respirar:</strong> Puede ocurrir con o sin malestar en el pecho.
                  </li>
                  <li>
                    <strong>Otros signos:</strong> Sudor frío, náuseas, mareos, fatiga inusual.
                  </li>
                </ul>
                <p className="text-gray-700 mt-2">
                  <strong>Importante:</strong> Las mujeres son más propensas a experimentar síntomas como dificultad
                  para respirar, náuseas/vómitos y dolor de espalda o mandíbula.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Síntomas de Insuficiencia Cardíaca</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    <strong>Dificultad para respirar:</strong> Durante la actividad, en reposo o al acostarse.
                  </li>
                  <li>
                    <strong>Fatiga y debilidad:</strong> Sensación de cansancio constante.
                  </li>
                  <li>
                    <strong>Hinchazón:</strong> En piernas, tobillos y pies debido a la acumulación de líquido.
                  </li>
                  <li>
                    <strong>Pulso rápido o irregular:</strong> Sensación de latidos cardíacos acelerados o irregulares.
                  </li>
                  <li>
                    <strong>Tos persistente:</strong> Especialmente con mucosidad blanca o rosada.
                  </li>
                  <li>
                    <strong>Aumento de la necesidad de orinar:</strong> Especialmente por la noche.
                  </li>
                  <li>
                    <strong>Aumento repentino de peso:</strong> Debido a la retención de líquidos.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Síntomas de Arritmias</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    <strong>Palpitaciones:</strong> Sensación de latidos rápidos, fuertes o irregulares.
                  </li>
                  <li>
                    <strong>Sensación de aleteo en el pecho.</strong>
                  </li>
                  <li>
                    <strong>Latidos cardíacos acelerados (taquicardia).</strong>
                  </li>
                  <li>
                    <strong>Latidos cardíacos lentos (bradicardia).</strong>
                  </li>
                  <li>
                    <strong>Dolor en el pecho.</strong>
                  </li>
                  <li>
                    <strong>Dificultad para respirar.</strong>
                  </li>
                  <li>
                    <strong>Mareos o aturdimiento.</strong>
                  </li>
                  <li>
                    <strong>Desmayos o casi desmayos.</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Síntomas de Enfermedad de las Válvulas Cardíacas</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    <strong>Fatiga.</strong>
                  </li>
                  <li>
                    <strong>Dificultad para respirar, especialmente durante el esfuerzo o al acostarse.</strong>
                  </li>
                  <li>
                    <strong>Hinchazón de tobillos y pies.</strong>
                  </li>
                  <li>
                    <strong>Mareos o desmayos.</strong>
                  </li>
                  <li>
                    <strong>Soplo cardíaco</strong> (detectado por un médico durante un examen).
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="text-lg font-medium text-red-700 mb-2">¿Cuándo buscar atención médica de emergencia?</h3>
                <p className="text-gray-700 mb-2">Busque atención médica inmediata si experimenta:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Dolor o malestar en el pecho que dura más de unos minutos o que va y viene.</li>
                  <li>Dolor severo, repentino, que se extiende al brazo, mandíbula, espalda o estómago.</li>
                  <li>Dificultad para respirar severa y repentina.</li>
                  <li>Desmayos, mareos severos o confusión repentina.</li>
                  <li>
                    Latidos cardíacos rápidos o irregulares acompañados de debilidad, dificultad para respirar o mareos.
                  </li>
                </ul>
                <p className="text-gray-700 mt-2 font-bold">
                  Recuerde: Es mejor buscar ayuda y descubrir que no es nada grave, que ignorar síntomas potencialmente
                  mortales.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-gray-500 italic">
                <p>Esta información es solo educativa.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                        <HelpCircle className="h-4 w-4" />
                        <span className="sr-only">Aviso médico</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Esta información es únicamente con fines educativos. Siempre consulte con un profesional de la
                        salud calificado para obtener asesoramiento médico personalizado.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="diagnostico">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-blue-500" />
                Métodos de Diagnóstico Cardíaco
              </CardTitle>
              <CardDescription>Pruebas y procedimientos para evaluar la salud del corazón</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Electrocardiograma (ECG o EKG)</h3>
                <p className="text-gray-700">
                  El electrocardiograma registra la actividad eléctrica del corazón. Es una prueba no invasiva que
                  utiliza electrodos colocados en el pecho, brazos y piernas. El ECG puede detectar arritmias, daño
                  cardíaco previo, problemas de flujo sanguíneo al corazón y otros trastornos cardíacos. Es rápido,
                  indoloro y proporciona resultados inmediatos.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Ecocardiograma</h3>
                <p className="text-gray-700">
                  El ecocardiograma utiliza ondas sonoras (ultrasonido) para crear imágenes detalladas del corazón en
                  movimiento. Muestra el tamaño, la estructura y el movimiento del corazón, incluyendo las cámaras,
                  válvulas y grandes vasos sanguíneos. Puede evaluar la función cardíaca, detectar anomalías
                  estructurales, problemas valvulares y determinar la fracción de eyección (qué tan bien bombea el
                  corazón).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Prueba de Esfuerzo</h3>
                <p className="text-gray-700">
                  La prueba de esfuerzo evalúa cómo responde el corazón durante el ejercicio. El paciente camina en una
                  cinta rodante o pedalea en una bicicleta estática mientras se monitorea su ritmo cardíaco, presión
                  arterial y actividad eléctrica del corazón. Esta prueba puede detectar enfermedad coronaria, evaluar
                  la capacidad de ejercicio y ayudar a determinar un plan de tratamiento adecuado.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Monitoreo Holter</h3>
                <p className="text-gray-700">
                  El monitor Holter es un dispositivo portátil que registra la actividad eléctrica del corazón
                  continuamente durante 24-48 horas o más. El paciente lleva el dispositivo mientras realiza sus
                  actividades diarias normales. Es útil para detectar arritmias que ocurren intermitentemente y que
                  podrían no aparecer durante un ECG regular.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Angiografía Coronaria</h3>
                <p className="text-gray-700">
                  La angiografía coronaria es un procedimiento invasivo que utiliza rayos X y un medio de contraste para
                  visualizar las arterias coronarias. Se inserta un catéter delgado a través de una arteria en la ingle
                  o la muñeca y se guía hasta el corazón. Esta prueba puede identificar bloqueos o estrechamientos en
                  las arterias coronarias y ayudar a planificar tratamientos como angioplastia o cirugía de bypass.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Tomografía Computarizada Cardíaca</h3>
                <p className="text-gray-700">
                  La tomografía computarizada (TC) cardíaca utiliza rayos X para crear imágenes detalladas del corazón y
                  sus vasos sanguíneos. La TC de calcio coronario puede detectar depósitos de calcio en las arterias
                  coronarias, un signo temprano de enfermedad coronaria. La angiografía por TC coronaria puede
                  visualizar las arterias coronarias de manera no invasiva.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Resonancia Magnética Cardíaca</h3>
                <p className="text-gray-700">
                  La resonancia magnética cardíaca (RMC) utiliza campos magnéticos y ondas de radio para crear imágenes
                  detalladas del corazón. Proporciona información sobre la estructura, función, perfusión y viabilidad
                  del tejido cardíaco. Es especialmente útil para evaluar cardiomiopatías, inflamación del corazón
                  (miocarditis), daño por infarto y enfermedades congénitas del corazón.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Análisis de Sangre</h3>
                <p className="text-gray-700">Varios análisis de sangre pueden ayudar a evaluar la salud cardíaca:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    <strong>Troponina:</strong> Proteína liberada cuando hay daño en el músculo cardíaco, útil para
                    diagnosticar ataques cardíacos.
                  </li>
                  <li>
                    <strong>BNP (Péptido Natriurético Cerebral):</strong> Niveles elevados pueden indicar insuficiencia
                    cardíaca.
                  </li>
                  <li>
                    <strong>Perfil lipídico:</strong> Mide colesterol total, HDL, LDL y triglicéridos para evaluar el
                    riesgo de enfermedad coronaria.
                  </li>
                  <li>
                    <strong>Proteína C-reactiva:</strong> Marcador de inflamación que puede indicar riesgo de enfermedad
                    cardíaca.
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-medium text-blue-700 mb-2">Importancia del Diagnóstico Temprano</h3>
                <p className="text-gray-700">
                  El diagnóstico temprano de las enfermedades cardíacas puede marcar una gran diferencia en el
                  pronóstico y las opciones de tratamiento. Si tiene factores de riesgo para enfermedades cardíacas o
                  experimenta síntomas preocupantes, consulte con un profesional de la salud para determinar qué pruebas
                  diagnósticas son apropiadas para usted.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-gray-500 italic">
                <p>Esta información es solo educativa.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                        <HelpCircle className="h-4 w-4" />
                        <span className="sr-only">Aviso médico</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Esta información es únicamente con fines educativos. Siempre consulte con un profesional de la
                        salud calificado para obtener asesoramiento médico personalizado.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="glosario">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5 text-purple-500" />
                Glosario de Términos Cardíacos
              </CardTitle>
              <CardDescription>Definiciones de términos comunes relacionados con la salud cardíaca</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Angina</h3>
                  <p className="text-sm text-gray-600">
                    Dolor o malestar en el pecho que ocurre cuando una parte del corazón no recibe suficiente sangre
                    oxigenada.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Arritmia</h3>
                  <p className="text-sm text-gray-600">
                    Latido cardíaco irregular, demasiado rápido o demasiado lento.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Aterosclerosis</h3>
                  <p className="text-sm text-gray-600">
                    Acumulación de placa (compuesta principalmente de grasa, colesterol y calcio) en las paredes de las
                    arterias.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Bradicardia</h3>
                  <p className="text-sm text-gray-600">
                    Frecuencia cardíaca anormalmente baja, generalmente menos de 60 latidos por minuto.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Cardiomiopatía</h3>
                  <p className="text-sm text-gray-600">
                    Enfermedad del músculo cardíaco que dificulta que el corazón bombee sangre al resto del cuerpo.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Colesterol HDL</h3>
                  <p className="text-sm text-gray-600">
                    Colesterol &quot;bueno&quot; que ayuda a eliminar el colesterol LDL del torrente sanguíneo.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Colesterol LDL</h3>
                  <p className="text-sm text-gray-600">
                    Colesterol &quot;malo&quot; que puede acumularse en las paredes de las arterias y formar placa.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Electrocardiograma (ECG/EKG)</h3>
                  <p className="text-sm text-gray-600">Prueba que registra la actividad eléctrica del corazón.</p>
                </div>

                <div>
                  <h3 className="font-medium">Embolia</h3>
                  <p className="text-sm text-gray-600">
                    Bloqueo de un vaso sanguíneo por un coágulo u otra sustancia que viaja a través del torrente
                    sanguíneo.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Endocardio</h3>
                  <p className="text-sm text-gray-600">
                    Capa interna del corazón que recubre las cámaras y válvulas cardíacas.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Estenosis</h3>
                  <p className="text-sm text-gray-600">
                    Estrechamiento anormal de un vaso sanguíneo o válvula cardíaca.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Fibrilación auricular</h3>
                  <p className="text-sm text-gray-600">
                    Tipo común de arritmia caracterizada por latidos auriculares rápidos e irregulares.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Hipertensión</h3>
                  <p className="text-sm text-gray-600">
                    Presión arterial alta, generalmente definida como 130/80 mmHg o superior.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Infarto de miocardio</h3>
                  <p className="text-sm text-gray-600">
                    Ataque cardíaco; ocurre cuando el flujo sanguíneo a una parte del músculo cardíaco se bloquea.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Insuficiencia cardíaca</h3>
                  <p className="text-sm text-gray-600">
                    Condición en la que el corazón no puede bombear suficiente sangre para satisfacer las necesidades
                    del cuerpo.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Isquemia</h3>
                  <p className="text-sm text-gray-600">
                    Reducción del suministro de sangre a un órgano o tejido, generalmente debido a un bloqueo de las
                    arterias.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Miocardio</h3>
                  <p className="text-sm text-gray-600">
                    Músculo cardíaco; la capa media y más gruesa de la pared del corazón.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Pericardio</h3>
                  <p className="text-sm text-gray-600">Saco de doble pared que rodea el corazón.</p>
                </div>

                <div>
                  <h3 className="font-medium">Soplo cardíaco</h3>
                  <p className="text-sm text-gray-600">
                    Sonido anormal durante el latido cardíaco, causado por flujo sanguíneo turbulento.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Taquicardia</h3>
                  <p className="text-sm text-gray-600">
                    Frecuencia cardíaca anormalmente rápida, generalmente más de 100 latidos por minuto en reposo.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Trombosis</h3>
                  <p className="text-sm text-gray-600">
                    Formación de un coágulo sanguíneo dentro de un vaso sanguíneo.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Válvula cardíaca</h3>
                  <p className="text-sm text-gray-600">
                    Estructura que controla el flujo de sangre entre las cámaras del corazón o entre el corazón y los
                    grandes vasos.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-gray-500 italic">
                <p>Esta información es solo educativa.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                        <HelpCircle className="h-4 w-4" />
                        <span className="sr-only">Aviso médico</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Esta información es únicamente con fines educativos. Siempre consulte con un profesional de la
                        salud calificado para obtener asesoramiento médico personalizado.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
