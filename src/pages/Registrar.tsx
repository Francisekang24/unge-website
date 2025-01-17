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

export default function Registrar() {
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
                            <BreadcrumbPage>Oficina de Registro</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl font-bold mt-6 mb-8">Oficina de Registro</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registro</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 mb-4">
                                <li>Registro de Cursos</li>
                                <li>Agregar/Eliminar Clases</li>
                                <li>Fechas Límite de Registro</li>
                                <li>Requisitos Previos</li>
                            </ul>
                            <Button>Registrar Ahora</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Registros Estudiantiles</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 mb-4">
                                <li>Transcripciones</li>
                                <li>Verificación de Grado</li>
                                <li>Verificación de Inscripción</li>
                                <li>Informes de Calificaciones</li>
                            </ul>
                            <Button>Solicitar Documentos</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Graduación</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 mb-4">
                                <li>Solicitudes de Grado</li>
                                <li>Comienzo</li>
                                <li>Diplomas</li>
                                <li>Requisitos de Graduación</li>
                            </ul>
                            <Button>Aplicar para Graduación</Button>
                        </CardContent>
                    </Card>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Fechas Importantes</h2>
                    <Card>
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-2">Semestre de Otoño</h3>
                                    <ul className="space-y-2">
                                        <li>Registro: 1-15 de Agosto</li>
                                        <li>Inicio de Clases: 28 de Agosto</li>
                                        <li>Agregar/Eliminar: 28 de Agosto-11 de Septiembre</li>
                                        <li>Finales: 11-15 de Diciembre</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Semestre de Primavera</h3>
                                    <ul className="space-y-2">
                                        <li>Registro: 1-15 de Diciembre</li>
                                        <li>Inicio de Clases: 15 de Enero</li>
                                        <li>Agregar/Eliminar: 15-29 de Enero</li>
                                        <li>Finales: 6-10 de Mayo</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Sesión de Verano</h3>
                                    <ul className="space-y-2">
                                        <li>Registro: 15-30 de Abril</li>
                                        <li>Inicio de Clases: 20 de Mayo</li>
                                        <li>Agregar/Eliminar: 20-27 de Mayo</li>
                                        <li>Finales: 29 de Julio-2 de Agosto</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Fechas Límite</h3>
                                    <ul className="space-y-2">
                                        <li>Solicitud de Graduación: 1 de Marzo</li>
                                        <li>Solicitud de Transcripción: 5-7 días</li>
                                        <li>Retiro: Ver Calendario</li>
                                        <li>Apelaciones de Calificaciones: 30 días</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Formularios y Recursos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Formularios Comunes</h3>
                                <ul className="space-y-2 mb-4">
                                    <li>Formulario de Agregar/Eliminar Curso</li>
                                    <li>Formulario de Solicitud de Transcripción</li>
                                    <li>Solicitud de Graduación</li>
                                    <li>Formulario de Cambio de Nombre/Dirección</li>
                                </ul>
                                <Button variant="outline">Acceder a Formularios</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                                <div className="space-y-2 mb-4">
                                    <p>Email: registrar@university.edu</p>
                                    <p>Teléfono: (555) 123-4567</p>
                                    <p>Ubicación: Edificio de Administración, Sala 100</p>
                                    <p>Horario: Lunes-Viernes, 8:00 AM - 5:00 PM</p>
                                </div>
                                <Button variant="outline">Contáctenos</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}
