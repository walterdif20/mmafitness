const WHATSAPP_URL = 'https://wa.me/5492262495716?text=Hola%20MMAFitness%2C%20quiero%20consultar%20por%20clases%20y%20horarios'
const MAPS_URL = 'https://maps.google.com/?q=Calle+61+2972+Necochea'

const activities = [
  {
    title: 'Kickboxing',
    desc: 'Entrenamiento técnico y físico en kickboxing en Necochea para principiantes y niveles avanzados.',
  },
  {
    title: 'Boxeo',
    desc: 'Clases de boxeo en Necochea enfocadas en condición física, técnica y confianza personal.',
  },
  {
    title: 'MMA Recreativo',
    desc: 'MMA para adultos y jóvenes que quieren entrenar de forma real, segura y progresiva.',
  },
  {
    title: 'CrossFitness',
    desc: 'Entrenamiento funcional tipo CrossFitness para mejorar resistencia, fuerza y movilidad.',
  },
  {
    title: 'Musculación',
    desc: 'Sala de musculación para complementar rendimiento deportivo y objetivos de salud.',
  },
  {
    title: 'Clases infantiles',
    desc: 'Clases de kickboxing para niños desde 5 años con disciplina, juego y respeto.',
  },
]

const audience = [
  'Si nunca entrenaste',
  'Si querés mejorar tu estado físico',
  'Si buscás defensa personal y disciplina',
  'Si querés competir',
  'Si buscás clases para tu hijo/a',
]

const faq = [
  ['¿Necesito experiencia previa para empezar?', 'No. Hay grupos para principiantes y una progresión adaptada a tu nivel.'],
  ['¿Hay clases para niños?', 'Sí, hay clases infantiles desde los 5 años con enfoque técnico y formativo.'],
  ['¿Dónde queda MMAFitness Necochea?', 'En Calle 61 Nº 2972, 2º piso, Galería Huracán, Necochea.'],
  ['¿Puedo entrenar boxeo sin competir?', 'Sí. Podés entrenar boxeo recreativo para mejorar estado físico y técnica sin competir.'],
  ['¿Qué actividades ofrece el gimnasio?', 'Kickboxing, boxeo, MMA recreativo, CrossFitness, musculación y clases para niños.'],
  ['¿Cómo consulto horarios y precios?', 'Escribinos por WhatsApp y te compartimos los horarios y opciones vigentes.'],
]

const benefits = [
  ['+10 años de trayectoria', 'Escuela consolidada en la escena local de Necochea.'],
  ['Entrenamiento para niños y adultos', 'Desde 5 años hasta adultos de todos los niveles.'],
  ['Kickboxing, Boxeo, MMA y Musculación', 'Todo en un solo lugar para progresar de verdad.'],
  ['Ubicación céntrica en Galería Huracán', 'Fácil acceso para Necochea y Quequén.'],
]

const SectionTitle = ({ children }) => <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">{children}</h2>

const SectionIntro = ({ children }) => <p className="max-w-3xl text-zinc-300">{children}</p>

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <a href="#inicio" className="sr-only focus:not-sr-only">Saltar al contenido</a>
      <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <p className="font-black tracking-wide text-white">MMAFitness <span className="text-red-500">Necochea</span></p>
          <div className="hidden items-center gap-5 text-sm md:flex">
            <a href="#actividades" className="hover:text-white">Actividades</a>
            <a href="#ubicacion" className="hover:text-white">Ubicación</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <a href={WHATSAPP_URL} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500">WhatsApp</a>
        </div>
      </nav>

      <header id="inicio" className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,.22),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300">Escuela de artes marciales y fitness</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white">Kickboxing, Boxeo y MMA en Necochea</h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-zinc-300">Entrená en MMAFitness Necochea: clases para principiantes, niños, adultos y competidores, con la dirección de Luis Carabajal, Entrenador Clase B WKN Argentina.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-glow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">Consultar por WhatsApp</a>
            <a href="#actividades" className="rounded-lg border border-zinc-600 px-6 py-3 font-semibold text-zinc-100 hover:border-red-500">Ver actividades</a>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800">
            {/* Placeholder visual: reemplazar por foto real del entrenamiento */}
            <img src="/images/hero-training.svg" alt="Entrenamiento de kickboxing y boxeo en MMAFitness Necochea" className="h-52 w-full object-cover md:h-72" loading="eager" />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-3 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([title, desc]) => (
          <div key={title} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
            <p className="font-semibold text-zinc-100">{title}</p>
            <p className="mt-1 text-xs text-zinc-400">{desc}</p>
          </div>
        ))}
      </section>

      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-20">
        <section id="actividades" className="space-y-6">
          <SectionTitle>Actividades</SectionTitle>
          <SectionIntro>Programas pensados para rendimiento, salud y progreso real en un gimnasio de kickboxing y boxeo en Necochea con enfoque técnico.</SectionIntro>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activities.map(({ title, desc }) => (
              <article key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:-translate-y-1 hover:border-red-500/70">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionTitle>¿Para quién es MMAFitness?</SectionTitle>
            <div className="grid gap-3">
              {audience.map((item) => (
                <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-red-500/40 bg-gradient-to-b from-red-950/30 to-zinc-900 p-6">
            <h3 className="text-xl font-bold text-white">Plan de inicio recomendado</h3>
            <ol className="mt-4 space-y-3 text-sm text-zinc-300">
              <li><strong className="text-zinc-100">1.</strong> Contacto por WhatsApp para objetivo y nivel.</li>
              <li><strong className="text-zinc-100">2.</strong> Asignación al grupo ideal (niños, principiantes o intermedio).</li>
              <li><strong className="text-zinc-100">3.</strong> Primera clase de adaptación técnica y física.</li>
            </ol>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-lg bg-red-600 px-5 py-3 font-semibold text-white">Quiero empezar</a>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <SectionTitle>Luis Carabajal</SectionTitle>
          <div className="mt-4 grid gap-5 md:grid-cols-[1.25fr_.75fr] md:items-center">
            <p className="text-zinc-300">Luis Carabajal, director de MMAFitness Necochea, cuenta con trayectoria en kickboxing, formación WKN Argentina, graduación 4º Dan y experiencia formando alumnos recreativos y competitivos.</p>
            {/* Placeholder visual: reemplazar por foto real de Luis Carabajal */}
            <img src="/images/coach-luis.svg" alt="Entrenador Luis Carabajal en MMAFitness Necochea" className="h-48 w-full rounded-xl border border-zinc-800 object-cover" loading="lazy" />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div id="ubicacion" className="space-y-4">
            <SectionTitle>Ubicación</SectionTitle>
            <p>Calle 61 Nº 2972, 2º piso, Galería Huracán, Necochea.</p>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-lg bg-zinc-100 px-5 py-3 font-semibold text-zinc-950">Cómo llegar</a>
            {/* TODO: Reemplazar por iframe real de Google Maps al confirmar embed oficial del negocio. */}
            <img src="/images/gym-location.svg" alt="Referencia de ubicación de MMAFitness Necochea" className="mt-2 h-44 w-full rounded-xl border border-zinc-800 object-cover" loading="lazy" />
          </div>
          <div className="space-y-4">
            <SectionTitle>Consultá los horarios actualizados</SectionTitle>
            <p>Los horarios pueden variar según actividad, edad y nivel. Escribinos por WhatsApp y te indicamos el mejor grupo para empezar.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-lg bg-red-600 px-5 py-3 font-semibold text-white">Consultar horarios por WhatsApp</a>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <SectionTitle>Preguntas frecuentes</SectionTitle>
          <div className="space-y-3">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                <summary className="cursor-pointer font-semibold text-white">{q}</summary>
                <p className="mt-2 text-sm text-zinc-300">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-950/50 to-zinc-900 p-6">
          <SectionTitle>MMAFitness en el centro de Necochea</SectionTitle>
          <p className="mt-3 text-zinc-200">MMAFitness está ubicado en el centro de Necochea, en Galería Huracán, y recibe alumnos de Necochea, Quequén y alrededores que buscan entrenar kickboxing, boxeo, MMA, musculación o mejorar su condición física en un ambiente de respeto, disciplina y progreso.</p>
        </section>

        <section className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8 text-center">
          <h2 className="text-3xl font-black text-white">Empezá a entrenar en MMAFitness Necochea</h2>
          <p className="mx-auto mt-3 max-w-2xl">Escribinos por WhatsApp y te ayudamos a elegir la clase ideal para tu edad, nivel y objetivo.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-glow">Ir a WhatsApp</a>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MMAFitness Necochea.</p>
          <p>Calle 61 Nº 2972, 2º piso, Galería Huracán · Necochea · Buenos Aires</p>
        </div>
      </footer>
    </div>
  )
}
