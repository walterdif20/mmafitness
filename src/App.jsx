const WHATSAPP_URL = 'https://wa.me/5492262495716?text=Hola%20MMAFitness%2C%20quiero%20consultar%20por%20clases%20y%20horarios'

const activities = [
  ['Kickboxing', 'Entrenamiento técnico y físico en kickboxing en Necochea para principiantes y niveles avanzados.'],
  ['Boxeo', 'Clases de boxeo en Necochea enfocadas en condición física, técnica y confianza personal.'],
  ['MMA Recreativo', 'MMA para adultos y jóvenes que quieren entrenar de forma real, segura y progresiva.'],
  ['CrossFitness', 'Entrenamiento funcional tipo CrossFitness para mejorar resistencia, fuerza y movilidad.'],
  ['Musculación', 'Sala de musculación para complementar rendimiento deportivo y objetivos de salud.'],
  ['Clases infantiles', 'Clases de kickboxing para niños desde 5 años con disciplina, juego y respeto.'],
]

const faq = [
  ['¿Necesito experiencia previa para empezar?', 'No. Hay grupos para principiantes y una progresión adaptada a tu nivel.'],
  ['¿Hay clases para niños?', 'Sí, hay clases infantiles desde los 5 años con enfoque técnico y formativo.'],
  ['¿Dónde queda MMAFitness Necochea?', 'En Calle 61 Nº 2972, 2º piso, Galería Huracán, Necochea.'],
  ['¿Puedo entrenar boxeo sin competir?', 'Sí. Podés entrenar boxeo recreativo para mejorar estado físico y técnica sin competir.'],
  ['¿Qué actividades ofrece el gimnasio?', 'Kickboxing, boxeo, MMA recreativo, CrossFitness, musculación y clases para niños.'],
  ['¿Cómo consulto horarios y precios?', 'Escribinos por WhatsApp y te compartimos los horarios y opciones vigentes.'],
]

const SectionTitle = ({ children }) => <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{children}</h2>

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <header className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,.22),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300">MMAFitness Necochea</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white">Kickboxing, Boxeo y MMA en Necochea</h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-zinc-300">Entrená en MMAFitness Necochea: clases para principiantes, niños, adultos y competidores, con la dirección de Luis Carabajal, Entrenador Clase B WKN Argentina.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-glow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">Consultar por WhatsApp</a>
            <a href="#actividades" className="rounded-lg border border-zinc-600 px-6 py-3 font-semibold text-zinc-100 hover:border-red-500">Ver actividades</a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 md:grid-cols-4">
        {['+10 años de trayectoria', 'Entrenamiento para niños y adultos', 'Kickboxing, Boxeo, MMA y Musculación', 'Ubicación céntrica en Galería Huracán'].map((item) => (
          <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm font-medium text-zinc-200">{item}</div>
        ))}
      </section>

      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-20">
        <section id="actividades" className="space-y-6">
          <SectionTitle>Actividades</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activities.map(([title, desc]) => (
              <article key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:-translate-y-1 hover:border-red-500/70">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle>¿Para quién es MMAFitness?</SectionTitle>
          <div className="grid gap-3 md:grid-cols-2">
            {['Si nunca entrenaste', 'Si querés mejorar tu estado físico', 'Si buscás defensa personal y disciplina', 'Si querés competir', 'Si buscás clases para tu hijo/a'].map((item) => (
              <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">{item}</div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <SectionTitle>Luis Carabajal</SectionTitle>
          <p className="mt-4 text-zinc-300">Luis Carabajal, director de MMAFitness Necochea, cuenta con trayectoria en kickboxing, formación WKN Argentina, graduación 4º Dan y experiencia formando alumnos recreativos y competitivos.</p>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <SectionTitle>Ubicación</SectionTitle>
            <p>Calle 61 Nº 2972, 2º piso, Galería Huracán, Necochea.</p>
            <a href="https://maps.google.com/?q=Calle+61+2972+Necochea" target="_blank" rel="noreferrer" className="inline-flex rounded-lg bg-zinc-100 px-5 py-3 font-semibold text-zinc-950">Cómo llegar</a>
            {/* TODO: Reemplazar por iframe real de Google Maps al confirmar embed oficial del negocio. */}
          </div>
          <div className="space-y-4">
            <SectionTitle>Consultá los horarios actualizados</SectionTitle>
            <p>Los horarios pueden variar según actividad, edad y nivel. Escribinos por WhatsApp y te indicamos el mejor grupo para empezar.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-lg bg-red-600 px-5 py-3 font-semibold text-white">Consultar horarios por WhatsApp</a>
          </div>
        </section>

        <section className="space-y-6">
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
          <SectionTitle>SEO local en Necochea y Quequén</SectionTitle>
          <p className="mt-3 text-zinc-200">MMAFitness está ubicado en el centro de Necochea, en Galería Huracán, y recibe alumnos de Necochea, Quequén y alrededores que buscan entrenar kickboxing, boxeo, MMA, musculación o mejorar su condición física en un ambiente de respeto, disciplina y progreso.</p>
        </section>

        <section className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8 text-center">
          <h2 className="text-3xl font-black text-white">Empezá a entrenar en MMAFitness Necochea</h2>
          <p className="mx-auto mt-3 max-w-2xl">Escribinos por WhatsApp y te ayudamos a elegir la clase ideal para tu edad, nivel y objetivo.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-glow">Ir a WhatsApp</a>
        </section>
      </main>
    </div>
  )
}
