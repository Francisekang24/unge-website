import { Link } from 'wouter'

export default function Footer() {

    return (
        <footer className="bg-green-950 text-primary-foreground">
            <div className="container py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                    <li><Link href="/academics"><a className="hover:underline">Programas Académicos</a></Link></li>
                    <li><Link href="/admissions"><a className="hover:underline">Admisiones</a></Link></li>
                    <li><Link href="/campus-life"><a className="hover:underline">Vida en el Campus</a></Link></li>
                    <li><Link href="/research"><a className="hover:underline">Investigación</a></Link></li>
                </ul>
                </div>

                <div>
                <h3 className="text-lg font-semibold mb-4">Recursos</h3>
                <ul className="space-y-2">
                    <li><Link href="/library"><a className="hover:underline">Biblioteca</a></Link></li>
                    <li><Link href="/career"><a className="hover:underline">Servicios de Carrera</a></Link></li>
                    <li><Link href="/it-services"><a className="hover:underline">Servicios de TI</a></Link></li>
                    <li><Link href="/directory"><a className="hover:underline">Directorio</a></Link></li>
                </ul>
                </div>

                <div>
                <h3 className="text-lg font-semibold mb-4">Acerca de</h3>
                <ul className="space-y-2">
                    <li><Link href="/about"><a className="hover:underline">Sobre Nosotros</a></Link></li>
                    <li><Link href="/contact"><a className="hover:underline">Contacto</a></Link></li>
                    <li><Link href="/news"><a className="hover:underline">Noticias</a></Link></li>
                    <li><Link href="/events"><a className="hover:underline">Eventos</a></Link></li>
                </ul>
                </div>

                <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <address className="not-italic">
                    <p>123 Avenida Universidad</p>
                    <p>Ciudad, Estado 12345</p>
                    <p className="mt-2">Teléfono: (555) 123-4567</p>
                    <p>Email: info@universidad.edu</p>
                </address>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-center text-sm">
                © {new Date().getFullYear()} Universidad Nacional De Guinea Ecuatorial. Todos los derechos reservados.
                </p>
            </div>
            </div>
        </footer>
    )
}