export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Cuidado Veterinario de Calidad para tu Mascota
            </h1>
            <p className="text-lg text-muted-foreground">
              En PetCare Vet nos dedicamos a proporcionar el mejor cuidado médico y atención personalizada para tus
              mascotas. Con profesionales experimentados y equipamiento moderno.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Agendar Cita
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Conocer Más
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 sm:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img
              src="/veterinarian-with-happy-pets.jpg"
              alt="Veterinaria con mascotas"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
