import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Link } from "wouter";

export default function Business() {
    return (
        <div className="min-h-screen py-8">
            <div className="flex flex-col items-stretch mx-auto px-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Inicio</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Asuntos Administrativos</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl font-bold mt-6 mb-8">Asuntos Administrativos</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Servicios Financieros</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 mb-4">
                                <li>Cuentas de Estudiantes</li>
                                <li>Planes de Pago</li>
                                <li>Ayuda Financiera</li>
                                <li>Becas</li>
                            </ul>
                            <Button variant="outline">Aprender Más</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recursos Humanos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 mb-4">
                                <li>Empleo</li>
                                <li>Beneficios</li>
                                <li>Capacitación</li>
                                <li>Políticas</li>
                            </ul>
                            <Button variant="outline">Ver Oportunidades</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Operaciones del Campus</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 mb-4">
                                <li>Gestión de Instalaciones</li>
                                <li>Seguridad y Protección</li>
                                <li>Servicios de Estacionamiento</li>
                                <li>Servicios de Comedor</li>
                            </ul>
                            <Button variant="outline">Acceder a Servicios</Button>
                        </CardContent>
                    </Card>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Enlaces Rápidos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Para Estudiantes</h3>
                                <ul className="space-y-2 mb-4">
                                    <li>Matrícula y Tarifas</li>
                                    <li>Fechas Límite de Pago</li>
                                    <li>Empleo Estudiantil</li>
                                    <li>Asesoramiento Financiero</li>
                                </ul>
                                <Button>Portal del Estudiante</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Para Profesores y Personal</h3>
                                <ul className="space-y-2 mb-4">
                                    <li>Servicios de Nómina</li>
                                    <li>Viajes y Gastos</li>
                                    <li>Adquisiciones</li>
                                    <li>Recursos Presupuestarios</li>
                                </ul>
                                <Button>Portal del Empleado</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Contactar Asuntos Empresariales</h2>
                    <Card>
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Horario de Oficina</h3>
                                    <p className="mb-2">Lunes - Viernes: 8:00 AM - 5:00 PM</p>
                                    <p>Sábado - Domingo: Cerrado</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                                    <p className="mb-2">Teléfono: (555) 123-4567</p>
                                    <p className="mb-2">Correo Electrónico: business@university.edu</p>
                                    <p>Ubicación: Edificio de Administración, Sala 200</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}
