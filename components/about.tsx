export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 sm:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden order-2 md:order-1">
            <img
              src="/professional-veterinary-clinic.jpg"
              alt="Clínica veterinaria profesional"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sobre Nosotros</h2>
            <p className="text-lg text-muted-foreground">
              PetCare Vet es una clínica veterinaria moderna con más de 15 años de experiencia en el cuidado de
              mascotas. Nuestro equipo está comprometido con proporcionar la mejor atención médica veterinaria.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Veterinarios Certificados</h3>
                  <p className="text-muted-foreground text-sm">Profesionales con certificación internacional</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Equipamiento Moderno</h3>
                  <p className="text-muted-foreground text-sm">
                    Tecnología de última generación para diagnósticos precisos
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Atención 24/7</h3>
                  <p className="text-muted-foreground text-sm">Disponibles para emergencias en cualquier momento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
