import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, ChevronDown, Clock, Lightbulb, MapPin, Shield, TrendingUp, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const WHATSAPP_URL = 'https://wa.me/51933477243?text=Hola%21%F0%9F%91%8B%F0%9F%8F%BB%20Deseo%20inscribirme%20al%20workshop%20Anticonfort%20Financiero%20%F0%9F%93%88';

// Reemplaza VIDEO_ID por el ID real del video de YouTube.
// Ejemplo: https://www.youtube.com/watch?v=ABC123XYZ
// El ID sería: ABC123XYZ
const YOUTUBE_VIDEO_ID = 'WxBrxPEeM6o';
const eventDetails = [{
  icon: Calendar,
  text: 'Sábado 28 de noviembre'
}, {
  icon: Clock,
  text: '8:30 a. m. · 4 horas'
}, {
  icon: MapPin,
  text: 'JWork · Jockey Plaza'
}, {
  icon: Users,
  text: 'Cupos Limitados'
}];
const objections = [{
  icon: Clock,
  title: 'Llevas tiempo postergándolo',
  description: 'Siempre dices que empezarás el próximo mes, pero ese momento nunca llega.'
}, {
  icon: Shield,
  title: 'Te preocupa equivocarte',
  description: 'Tienes capital para invertir, pero no quieres cometer errores al abrir, fondear o usar una cuenta.'
}, {
  icon: TrendingUp,
  title: 'No sabes qué comprar ni dónde hacer clic',
  description: 'Has visto contenido sobre bolsa, pero todavía no logras convertir esa información en una inversión real.'
}, {
  icon: Lightbulb,
  title: 'Los impuestos te generan dudas',
  description: 'No quieres invertir sin saber cómo calcular, declarar y pagar correctamente tus ganancias.'
}];
const results = [{
  title: 'Entender cómo funciona la bolsa',
  description: 'Aprenderás qué es una acción, qué es un ETF, cómo se mueve el mercado y qué debes evaluar antes de invertir.'
}, {
  title: 'Tener tu cuenta de XTB lista',
  description: 'Utilizaremos XTB como plataforma educativa para el ejemplo del taller. Antes del evento recibirás las indicaciones para registrarla, validarla y fondearla, en caso desees utilizar dicha plataforma.'
}, {
  title: 'Hacer tu primera inversión con dinero real',
  description: 'Ejecutarás una compra desde tu propia cuenta, acompañado paso a paso durante el workshop.'
}, {
  title: 'Aprender a repetir el proceso',
  description: 'No se trata de hacer una sola compra: comprenderás cómo volver a invertir por tu cuenta.'
}, {
  title: 'Calcular el impuesto de tus ganancias',
  description: 'Verás cómo identificar la ganancia, calcular el impuesto correspondiente y ordenar la información.'
}, {
  title: 'Declarar y pagar en SUNAT',
  description: 'Recorreremos la plataforma paso a paso: dónde ingresar, qué opción elegir, dónde colocar el monto y cómo pagarlo.'
}];
const agenda = [{
  number: '01',
  title: 'Entiende antes de invertir',
  description: 'Conceptos esenciales de acciones, ETF, riesgo y funcionamiento del mercado, explicados sin tecnicismos innecesarios.'
}, {
  number: '02',
  title: 'Revisa tu cuenta y prepárala para ejecutar',
  description: 'Confirmaremos que tu cuenta de broker (XTB en caso desees utilizarla) esté validada, fondeada y lista para realizar una operación.'
}, {
  number: '03',
  title: 'Analiza una inversión paso a paso',
  description: 'Verás qué revisar antes de comprar y cómo tomar una decisión con criterio, en lugar de seguir recomendaciones a ciegas.'
}, {
  number: '04',
  title: 'Haz tu primera inversión en vivo',
  description: 'Usarás dinero real desde tu propia cuenta. Renzo estará presente para responder tus preguntas durante la ejecución.'
}, {
  number: '05',
  title: 'Aprende a declarar tus ganancias',
  description: 'Calcularemos el impuesto y recorreremos SUNAT para que sepas exactamente qué hacer cuando obtengas ganancias.'
}];
const includedItems = ['Workshop presencial y práctico de 4 horas', 'Acompañamiento para hacer tu primera inversión en vivo', 'Guía previa por WhatsApp para registrar, validar y fondear tu cuenta', 'Explicación práctica del proceso de declaración en SUNAT', 'Acceso al grupo privado de WhatsApp de asistentes', 'Espacio para resolver preguntas directamente con Renzo'];
const requirements = ['DNI o documento de identidad vigente', 'Celular con acceso a internet y correo electrónico', 'Cuenta de broker registrada, validada y fondeada antes del evento', 'Un mínimo aproximado de USD 10 para ejecutar la inversión', 'Disposición real para invertir y participar activamente'];
const faqs = [{
  question: '¿Necesito experiencia previa?',
  answer: 'No. El workshop está diseñado para personas que nunca han invertido, pero que sí tienen la intención y la capacidad de empezar. Explicaremos la teoría necesaria antes de ejecutar.'
}, {
  question: '¿Cuánto dinero necesito para hacer la inversión?',
  answer: 'Usaremos aproximadamente USD 10 como monto mínimo de prueba. El dinero se moverá desde tu propia cuenta y la inversión se realizará con dinero real.'
}, {
  question: '¿Qué plataforma utilizaremos?',
  answer: 'Utilizaremos XTB como la plataforma educativa y de referencia para los ejemplos prácticos del taller. Antes del evento recibirás instrucciones por WhatsApp para registrar, validar y fondearla, en caso optes por utilizar esta alternativa.'
}, {
  question: '¿Todos harán su primera inversión durante el workshop?',
  answer: 'Ese es el objetivo. Para lograrlo, debes llegar con la cuenta validada y fondeada. Durante los primeros 30 minutos brindaremos asistencia técnica de apoyo a quienes tengan pendientes menores, sin que esto garantice la validación por parte del bróker, la cual es responsabilidad exclusiva del participante antes del evento.'
}, {
  question: '¿El workshop incluye coffee break, workbook o materiales físicos?',
  answer: 'No. La experiencia está enfocada en aprendizaje, ejecución y acompañamiento práctico. Debes llevar tu celular y todo lo necesario para operar desde tu cuenta.'
}, {
  question: '¿El grupo de WhatsApp continuará después del evento?',
  answer: 'Sí. El grupo se mantendrá como una comunidad privada de asistentes para compartir dudas académicas y aprendizajes. Está estrictamente prohibido solicitar o brindar recomendaciones específicas de compra o venta de activos, alertas de inversión o asesoría personalizada.'
}, {
  question: '¿Este evento es para alguien que todavía no quiere invertir?',
  answer: 'No. Anticonfort Financiero está pensado para personas que ya tomaron la decisión de invertir y necesitan acompañamiento para ejecutar correctamente su primer paso.'
}];
const HomePage = () => {
  const [isMuted, setIsMuted] = useState(true); // Controla el estado del audio
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleCTAClick = () => {
    window.location.href = WHATSAPP_URL;
  };
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 24
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      amount: 0.15
    },
    transition: {
      duration: 0.5
    }
  };
  return <>
      <Helmet>
        <title>
          Anticonfort Financiero | Haz tu primera inversión en vivo
        </title>
        <meta name="description" content="Workshop presencial de 4 horas para hacer tu primera inversión en bolsa con dinero real y aprender a declarar tus ganancias en SUNAT. Sábado 28 de noviembre, 8:30 a. m., JWork Jockey Plaza." />
        <meta property="og:title" content="Anticonfort Financiero" />
        <meta property="og:description" content="Deja de decir “algún día voy a invertir”. Haz tu primera inversión en vivo y aprende a declarar tus ganancias en SUNAT." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/b85fa9a3-40ea-4add-9fa4-e9cc054125ad/gemini_generated_image_vt7ht1vt7ht1vt7h-tBI7A.png" />
        <meta property="og:url" content="https://tallerbolsa.cuentasclaras.shop/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header fijo */}
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-black/20 backdrop-blur-[2px]'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className={`text-base font-bold sm:text-lg ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Anticonfort Financiero
            </span>
          </div>

          <Button onClick={handleCTAClick} className="bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90 sm:px-6">
            Reservar cupo
          </Button>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1605588722627-818efb8878b9)'
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 28
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-primary sm:text-base">
              Workshop presencial y práctico
            </p>

            <img src="https://horizons-cdn.hostinger.com/b85fa9a3-40ea-4add-9fa4-e9cc054125ad/logo-anticonfort-financiero-blanco-g8INQ.png" alt="Anticonfort Financiero" className="mx-auto mb-7 w-full max-w-2xl" />

            <h1 className="mx-auto mb-6 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              El workshop donde dejarás de decir:
              <span className="mt-2 block text-primary">
                “Algún día voy a empezar a invertir”
              </span>
            </h1>

            <motion.div {...fadeInUp} className="overflow-hidden rounded-2xl bg-black shadow-2xl">
              <div className="relative aspect-video">
                {YOUTUBE_VIDEO_ID === 'VIDEO_ID' ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                    <Video className="mb-4 h-12 w-12 text-primary" />
                    <p className="text-xl font-bold">Espacio reservado para tu VSL</p>
                    <p className="mt-2 max-w-xl text-sm text-white/70">
                      Reemplaza la constante YOUTUBE_VIDEO_ID por el ID de tu video de YouTube.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Iframe dinámico controlado por el estado isMuted */}
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&rel=0&playsinline=1`}
                      title="Anticonfort Financiero - Video de presentación"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Botón flotante para activar el sonido (solo visible si está muteado) */}
                    {isMuted && (
                      <button
                        onClick={() => setIsMuted(false)}
                        className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95 animate-bounce"
                        style={{ animationDuration: '2s' }}
                      >
                        <span>🔊 Activar Sonido</span>
                      </button>
                    )}
                  </>
                )}
              </div>
            </motion.div>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
              En cuatro horas harás tu primera inversión en bolsa con dinero
              real y aprenderás, paso a paso, cómo declarar tus ganancias en
              SUNAT.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 18
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.15
        }} className="mb-8 grid grid-cols-1 gap-3 text-white sm:grid-cols-2 lg:grid-cols-4">
            {eventDetails.map(item => <div key={item.text} className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <item.icon className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>)}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 18
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.25
        }}>
            <div className="mb-6 inline-flex items-center rounded-xl border-2 border-primary bg-primary/20 px-6 py-3 backdrop-blur-sm">
              <span className="text-2xl font-bold text-white">USD 97</span>
            </div>

            <div>
              <Button onClick={handleCTAClick} size="lg" className="h-auto bg-primary px-8 py-6 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-[0.98]">
                Reservar Cupo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="mt-4 text-sm font-medium text-white/75">
              Cupos Limitados · Experiencia presencial · Inversión con dinero
              real
            </p>
          </motion.div>

          <ChevronDown className="mx-auto mt-10 h-8 w-8 animate-bounce text-white/60" />
        </div>
      </section>

      {/* VSL 
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Video className="h-4 w-4" />
              Mira cómo será la experiencia
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Antes de seguir, mira este video
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Renzo te explica qué harás durante el workshop y por qué esta vez
              no te quedarás solo en la teoría.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="relative aspect-video">
              {YOUTUBE_VIDEO_ID === 'VIDEO_ID' ? <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <Video className="mb-4 h-12 w-12 text-primary" />
                  <p className="text-xl font-bold">
                    Espacio reservado para tu VSL
                  </p>
                  <p className="mt-2 max-w-xl text-sm text-white/70">
                    Reemplaza la constante YOUTUBE_VIDEO_ID por el ID de tu video
                    de YouTube. El reproductor ya está configurado para autoplay
                    sin sonido.
                  </p>
                </div> : <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=1&rel=0&playsinline=1`} title="Anticonfort Financiero - Video de presentación" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
            </div>
          </motion.div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            El autoplay comienza sin sonido por las restricciones de los
            navegadores. El usuario podrá activar el audio desde el reproductor.
          </p>
        </div>
      </section>

      {/* Identificación */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              ¿Qué te ha impedido invertir hasta hoy?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Probablemente no te falta dinero ni interés. Te falta convertir
              toda la información que ya viste en una acción concreta.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {objections.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.45,
            delay: index * 0.08
          }}>
                <Card className="h-full border-none shadow-sm transition-all hover:shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>

          <motion.div {...fadeInUp} className="mt-10 text-center">
            <p className="mb-5 text-xl font-bold text-foreground">
              Anticonfort Financiero fue creado para eliminar cada uno de esos
              obstáculos.
            </p>
            <Button onClick={handleCTAClick} size="lg" className="h-auto bg-primary px-8 py-5 font-bold text-primary-foreground hover:bg-primary/90">
              Quiero dejar de postergarlo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Promesa */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <p className="mb-3 font-bold uppercase tracking-[0.16em] text-primary">
              No vienes solo a aprender
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Vas a salir con tu primera inversión hecha
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Al terminar, tendrás el conocimiento y la experiencia para volver
              a invertir por tu cuenta y pensar: “Era más fácil de lo que
              imaginaba”.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {results.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.45,
            delay: index * 0.07
          }}>
                <Card className="h-full border-l-4 border-l-primary bg-card shadow-md transition-all hover:shadow-xl">
                  <CardContent className="p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                        <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Diferenciador */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              El problema nunca fue que no existiera información
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-secondary-foreground/85">
              El problema es que nadie estuvo sentado a tu lado diciéndote:
            </p>

            <div className="space-y-4 text-left">
              {['Ahora revisa esto.', 'Ahora haz clic aquí.', 'Ahora transfiere.', 'Ahora puedes comprar.', 'Ahora calcula y declara.'].map(text => <div key={text} className="flex items-center gap-3 rounded-xl bg-secondary-foreground/5 p-5">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-xl font-semibold">{text}</span>
                </div>)}
            </div>

            <p className="mt-8 text-2xl font-bold text-primary">
              Eso es exactamente lo que haremos durante cuatro horas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agenda */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Así será tu mañana
            </h2>
            <p className="text-lg text-muted-foreground">
              Aprendizaje, preparación y ejecución en una sola experiencia.
            </p>
          </motion.div>

          <div className="space-y-6">
            {agenda.map((item, index) => <motion.div key={item.number} initial={{
            opacity: 0,
            y: 18
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.45,
            delay: index * 0.08
          }} className="flex items-start gap-5 rounded-2xl border bg-card p-6 shadow-sm">
                <div className="text-4xl font-bold text-primary/30">
                  {item.number}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Preparación previa */}
      <section className="bg-muted py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div {...fadeInUp}>
            <p className="mb-3 font-bold uppercase tracking-[0.16em] text-primary">
              Antes del evento
            </p>
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              Llegarás preparado para invertir
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Al reservar tu cupo, ingresarás a un grupo privado de WhatsApp.
              Allí recibirás las indicaciones para registrar, validar y fondear
              tu cuenta de XTB antes del workshop, en caso optes por utilizarla.
            </p>
            <p className="text-lg font-semibold leading-relaxed text-foreground">
              Así podremos aprovechar el evento para aprender, resolver dudas y
              ejecutar tu primera inversión.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  Lo que debes llevar y tener listo
                </h3>
                <div className="space-y-4">
                  {requirements.map(item => <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="leading-relaxed text-foreground">
                        {item}
                      </span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Impuestos */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <Shield className="mx-auto mb-5 h-12 w-12 text-primary" />
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              Invertir sin entender los impuestos también puede frenarte
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Por eso no nos quedaremos en una explicación general. Verás el
              proceso práctico para saber qué calcular, dónde ingresar en SUNAT,
              qué información colocar y cómo realizar el pago.
            </p>

            <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
              {['Cuándo corresponde declarar', 'Cómo calcular la ganancia', 'Dónde ingresar en SUNAT', 'Cómo declarar y pagar'].map(item => <Card key={item} className="h-full">
                  <CardContent className="flex h-full items-start gap-3 p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-semibold text-foreground">{item}</span>
                  </CardContent>
                </Card>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformación */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Tu verdadera transformación
            </h2>
            <p className="text-lg text-muted-foreground">
              No es solo conocer más. Es comenzar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {[{
            from: '“Algún día invertiré”',
            to: '“Ya soy inversionista”'
          }, {
            from: 'Miedo a equivocarte',
            to: 'Claridad para ejecutar'
          }, {
            from: 'Depender de tutoriales',
            to: 'Saber repetir el proceso'
          }].map((item, index) => <motion.div key={item.from} initial={{
            opacity: 0,
            scale: 0.94
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.45,
            delay: index * 0.08
          }} className="text-center">
                <div className="rounded-2xl bg-background p-7 shadow-sm">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Antes
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {item.from}
                  </p>
                </div>
                <ArrowRight className="mx-auto my-4 h-8 w-8 rotate-90 text-primary" />
                <div className="rounded-2xl bg-primary p-7">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-primary-foreground/75">
                    Después
                  </p>
                  <p className="text-xl font-bold text-primary-foreground">
                    {item.to}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Docente */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Tendrás a Renzo a tu lado durante la ejecución
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.55
          }}>
              <img src="https://horizons-cdn.hostinger.com/b85fa9a3-40ea-4add-9fa4-e9cc054125ad/imagen-renzo-medidas-web-Ew0dV.png" alt="Renzo Peche, Papá Financiero" className="w-full rounded-2xl shadow-xl" />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.55
          }} className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Hola, soy Renzo Peche
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Educador financiero y creador de Papá Financiero y Cuentas
                Claras. Mi trabajo es traducir las finanzas y las inversiones
                en decisiones simples, prácticas y aplicables.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Durante este workshop no solo escucharás una exposición. Podrás
                hacer preguntas, revisar cada paso y ejecutar acompañado.
              </p>
              <p className="text-xl font-bold leading-relaxed text-foreground">
                Quiero que salgas pensando: “Era fácil. Ahora sé cómo volver a
                hacerlo”.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Precio */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <p className="mb-3 font-bold uppercase tracking-[0.16em] text-primary">
              Cupos limitados
            </p>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Reserva tu lugar en Anticonfort Financiero
            </h2>

            <div className="rounded-3xl border-2 border-primary/20 bg-background p-7 shadow-xl sm:p-12">
              <p className="mb-2 text-lg text-muted-foreground">
                Inversión por persona
              </p>
              <div className="mb-3 text-6xl font-bold text-primary">USD 97</div>
              <p className="mb-8 text-muted-foreground">
                Pago único · Workshop presencial
              </p>

              <div className="mx-auto mb-9 max-w-lg space-y-4 text-left">
                {includedItems.map(item => <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="leading-relaxed text-foreground">
                      {item}
                    </span>
                  </div>)}
              </div>

              <Button onClick={handleCTAClick} size="lg" className="h-auto w-full bg-primary px-6 py-6 text-base font-bold text-primary-foreground shadow-lg hover:bg-primary/90 sm:w-auto sm:text-lg">
                Quiero hacer mi 1era inversión
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="mt-5 text-sm text-muted-foreground">
                La reserva se coordina por WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Para quién sí/no */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div {...fadeInUp}>
            <Card className="h-full border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Este workshop es para ti si…
                </h2>
                <div className="space-y-4">
                  {['Tienes capital disponible, pero nunca te has atrevido a invertir.', 'Quieres entender el proceso completo antes de mover tu dinero.', 'Estás dispuesto a abrir, fondear y utilizar una cuenta de inversión.', 'Buscas acompañamiento para ejecutar tu primer paso correctamente.', 'Quieres aprender a invertir de forma recurrente, no depender siempre de alguien más.'].map(item => <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="h-full border-2 border-destructive/15">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Este workshop no es para ti si…
                </h2>
                <div className="space-y-4">
                  {['Solo quieres escuchar teoría y no tienes intención de invertir.', 'Buscas una recomendación que garantice ganancias.', 'Esperas hacerte rico rápidamente o evitar por completo el riesgo.', 'No estás dispuesto a preparar tu cuenta antes del evento.', 'No cuentas con capital disponible para comenzar.'].map(item => <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-bold text-destructive">
                        ×
                      </span>
                      <span className="text-foreground">{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que debes saber antes de reservar.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={faq.question} value={`item-${index + 1}`} className="rounded-xl border-none bg-background px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              El “algún día” puede terminar el 28 de noviembre
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Llega con tu cuenta preparada. Ten la oportunidad de salir con tu primera inversión hecha
            y con el conocimiento para volver a hacerlo.
            </p>
            <Button onClick={handleCTAClick} size="lg" variant="secondary" className="h-auto bg-white px-7 py-6 text-base font-bold text-primary shadow-xl hover:bg-white/90 sm:text-lg">
              El 28 de noviembre empiezo a invertir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-5 text-sm font-medium text-primary-foreground/80">
              Cupos Limitados
            </p>
          </motion.div>
        </div>
      </section>

      {/* Descargo */}
      <section className="bg-secondary py-8 text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs leading-relaxed text-secondary-foreground/65 sm:px-6 lg:px-8">
        Este workshop tiene fines exclusivamente educativos e ilustrativos y
        no constituye asesoría financiera, recomendación personalizada de inversión,
        ni consultoría tributaria. Toda inversión en el mercado de valores conlleva
        riesgos inherentes, incluyendo la pérdida del capital. Cada participante actúa
        de forma autónoma y es responsable exclusivo de sus decisiones operativas y
        del cumplimiento de sus obligaciones fiscales ante la SUNAT (Renta de Fuente Extranjera).
        La apertura, validación, fondeo y correcto funcionamiento de las cuentas dependen única
        y exclusivamente de la plataforma XTB, siendo ajenos al control de la organización.
        Para la atención de cualquier insatisfacción, ponemos a disposición nuestro
        Libro de Reclamaciones Virtual conforme a ley.
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-10 text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Anticonfort Financiero</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="opacity-80">© 2026 Renzo Peche</span>
            <span className="opacity-60">·</span>
            <span className="opacity-80">Política de privacidad</span>
            <span className="opacity-60">·</span>
            <span className="opacity-80">Términos y condiciones</span>
          </div>
        </div>
      </footer>

      {/* CTA móvil fijo */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden">
        <Button onClick={handleCTAClick} className="h-auto w-full bg-primary py-4 font-bold text-primary-foreground hover:bg-primary/90">
          Reservar mi cupo · USD 97
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </>;
};
export default HomePage;