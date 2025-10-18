export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PetCare Vet</h3>
            <p className="text-sm opacity-80">Cuidado veterinario de calidad para tus mascotas.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Consulta General
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Vacunación
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Cirugía
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#location" className="hover:opacity-100 transition-opacity">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 info@petcarevet.com</li>
              <li>Disponible 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 PetCare Vet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
