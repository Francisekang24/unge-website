import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "wouter";

export default function Academics() {
  return (
    <div className="min-h-screen py-8">
      <div className="flex flex-col items-stretch mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Asuntos Académicos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ">
          <Card>
            <CardHeader>
              <CardTitle>Calendario Académico</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Ver fechas y plazos importantes para el año académico.</p>
              <Button asChild>
                <Link href="/academics/calendar">Ver Calendario</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Catálogo de Cursos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Explora nuestra lista completa de cursos y programas.</p>
              <Button asChild>
                <Link href="/academics/courses">Explorar Cursos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Políticas Académicas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Conoce nuestras políticas y procedimientos académicos.</p>
              <Button asChild>
                <Link href="/academics/policies">Ver Políticas</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recursos Académicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Asesoramiento Académico</h3>
                <p className="mb-4">
                  Nuestros asesores académicos están aquí para ayudarte a planificar tu trayectoria académica y alcanzar tus objetivos educativos.
                </p>
                <Button variant="outline">Programar Cita</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Servicios de Tutoría</h3>
                <p className="mb-4">
                  Servicios de tutoría gratuitos están disponibles para todos los estudiantes en varias materias.
                </p>
                <Button variant="outline">Encontrar un Tutor</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Programas Académicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Programas de Pregrado</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Licenciatura en Artes</li>
                  <li>Licenciatura en Ciencias</li>
                  <li>Licenciatura en Ingeniería</li>
                </ul>
                <Button variant="link">Más Información →</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programas de Posgrado</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Maestrías</li>
                  <li>Programas Doctorales</li>
                  <li>Certificados Profesionales</li>
                </ul>
                <Button variant="link">Más Información →</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Oportunidades de Investigación</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Centros de Investigación</li>
                  <li>Proyectos de Facultad</li>
                  <li>Investigación Estudiantil</li>
                </ul>
                <Button variant="link">Más Información →</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
