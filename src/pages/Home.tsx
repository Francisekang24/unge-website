import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import { Link } from 'wouter'


export default function Home() {


    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1590579491624-f98f36d4c763")',
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            >
                <div className="container text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">Bienvenido a Nuestra Universidad</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Empoderando mentes, inspirando futuros y fomentando la innovación a través de la excelencia en la educación.
                    </p>
                    <div className="space-x-4">
                        <Button className="bg-green-950 hover:bg-green-950/90" size="lg" asChild>
                            <Link href="/admissions">Aplica Ahora</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-green/60 hover:text-bg-green-950">
                            <Link href="/about">Más Información</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* News & Announcements */}
            <section className="py-16 bg-background">
                <div className="flex flex-col items-stretch px-3">
                    <h2 className="text-3xl font-bold mb-8">Últimas Noticias y Anuncios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Apertura del Nuevo Centro de Investigación</h3>
                                <p className="text-muted-foreground mb-4">
                                    Instalación de vanguardia para avanzar en la investigación científica...
                                </p>
                                <Button variant="outline">Leer más →</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Registro de Semestre de Otoño</h3>
                                <p className="text-muted-foreground mb-4">
                                    La inscripción para los cursos de semestre de otoño ya está abierta...
                                </p>
                                <Button variant="outline">Leer más →</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Serie de Oradores Distinguidos</h3>
                                <p className="text-muted-foreground mb-4">
                                    Únase a nosotros para nuestra próxima serie de conferencias invitadas...
                                </p>
                                <Button variant="outline">Leer más →</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-muted">
                <div className="flex flex-col items-stretch px-3">
                    <h2 className="text-3xl font-bold mb-8">Enlaces Rápidos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Link href="/academics">
                                    <Button variant="ghost" className="w-full h-full">Programas Academicos</Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Link href="/registrar">
                                    <Button variant="ghost" className="w-full h-full">Oficina del Registrador</Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Link href="/library">
                                    <Button variant="ghost" className="w-full h-full">Recursos de la Biblioteca</Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Link href="/campus-life">
                                    <Button variant="ghost" className="w-full h-full">Campus Vida</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}