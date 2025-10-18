import { Heart, Stethoscope, Pill, Scissors } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Consulta General",
    description: "Revisión completa de la salud de tu mascota con diagnóstico profesional.",
  },
  {
    icon: Pill,
    title: "Vacunación",
    description: "Programas de vacunación completos para proteger a tu mascota.",
  },
  {
    icon: Scissors,
    title: "Cirugía",
    description: "Procedimientos quirúrgicos con equipamiento de última generación.",
  },
  {
    icon: Heart,
    title: "Cuidado Preventivo",
    description: "Planes de prevención para mantener a tu mascota saludable.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios veterinarios para el bienestar de tu mascota
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-6 hover:shadow-lg transition-shadow border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
