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

const departments = [
  {
    name: "Ciencias de la Información y Filología Lingüística",
    image: "/departments/CIFL.webp",
    presentation: "La Facultad de Ciencias de la Información y Filología Lingüística de la Universidad Nacional de Guinea Ecuatorial se creó por acuerdo unánime en la Junta de Gobierno celebrada en la ciudad de Bata en el año 2016. Sin embargo, su estructura funcional toma posesión en el mes de octubre de 2020, mediante Resolución Rectoral Nº 009/2020, de fecha 30 de septiembre, en la cual se recoge el nombramiento de su directiva: Decano, Vicedecano y Secretario. Posterior a esto, celebra su primera junta reestructurando el antiguo Departamento de Comunicación convirtiéndose en dos departamentos: Departamento de Filología, Dpto. de Periodismo y Comunicación Audiovisual, y se crea el Departamento de Lenguas Modernas.",
    description: "El departamento de lenguas modernas de la Facultad de Ciencias de la información y Filología Hispánica de la Universidad Nacional de Guinea Ecuatorial, ofrece a los estudiantes extranjeros de programas de intercambio, y todas las demás personas interesadas a nuestros cursos anuales y verano. El departamento de lenguas modernas, ofrece dos tipos de cursos a lo largo del año: cursos anuales, de octubre a julio y curso de verano, julio, agosto y septiembre. Se recomienda que los estudiantes con escaso o nulo conocimiento de español, tomen un curso de un año de español antes del comienzo de sus clases universitarias. ",
    programs: ["Filología hispánica", "Periodismo y Comunicación Audiovisual", "Lenguas modernas"]
  },
  {
    name: "Derecho y Ciencias Políticas",
    image: "/departments/DCP.jpeg",
    presentation: "La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas. La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas. La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas.",
    description: "La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas. La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas. La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas.",
    programs: ["Derecho", "Ciencias Políticas"]
  },
  {
    name: "Pedagogía y Cienicas de la Educación",
    image: "/departments/PCE.jpg",
    presentation: "La Facultad de Pedagogía y Ciencias de la Educación de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de la pedagogía y las ciencias de la educación. La Facultad de Pedagogía y Ciencias de la Educación de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de la pedagogía y las ciencias de la educación.",
    description: "La Facultad de Pedagogía y Ciencias de la Educación de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de la pedagogía y las ciencias de la educación. La Facultad de Pedagogía y Ciencias de la Educación de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de la pedagogía y las ciencias de la educación.",
    programs: ["Pedagogía", "Ciencias de la Educación"]
  },
  {
    name: "Humanidades y Ciencias Religiosas",
    image: "/departments/HCR.webp",
    presentation: "La Facultad de Humanidades y Ciencias Religiosas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de las humanidades y las ciencias religiosas. La Facultad de Humanidades y Ciencias Religiosas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de las humanidades y las ciencias religiosas.",
    description: "La Facultad de Humanidades y Ciencias Religiosas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de las humanidades y las ciencias religiosas. La Facultad de Humanidades y Ciencias Religiosas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de las humanidades y las ciencias religiosas.",
    programs: ["Humanidades", "Ciencias Religiosas"]
  },
  {
    name: "Ingeniería y Tecnología",
    image: "/departments/IYT.jpg",
    presentation: "La Facultad de Ingenierías y Tecnologías, su origen se remonta desde 1988 fecha en que se crea la Escuela Nacional de Agricultura (ENA) Obiang Nguema Mbasogo, con vocación Subregional y rango universitario que posteriormente con el decreto  Ley Nº 12 de fecha 6 de enero /1995 que crea la Universidad Nacional de Guinea Ecuatorial en anagrama UNGE, se adhiere a la red de Facultades y Escuela Universitarias según reza el Articulo 11 de los Estatutos de la UNGE, pasando a ser uno de los primeros centros  integrantes de esta magna institución universitaria nacional, con el nombre de Escuela Universitaria de Estudios Agrpecuarios Pesca y Forestal. Con el desarrollo de la institución universitaria, en el Consejo de Gobierno de la Universidad Nacional de Guinea Ecuatorial se dictó la resolución número 11/2016 de fecha 20 de mayo del mismo año, este centro pasó a ser promovido al rango de Facultad, cuya denominación oficial actual es Facultad de Ingenierías y Tecnologías.",
    description: "La  misión, visión y objetivos son los recogidos en los Estatutos de la institución, idea original y motor de su creación que descansa sobre tres pilares fundamentales, Docencia, Investigación y extensión. Docencia para enseñar ( Formar RR.HH cualificados y diversificados) Investigación para formar, descubrir, actualizar e innovar Extensión para hacer llegar nuestros conocimientos a la sociedad para adquirir nuevos conocimientos y experiencias a través de intercambios con otras instituciones afines.",
    programs: ["Ingeniería Agroalimentaría", "Ingeniería agrónoma", "Geología", "Ingeniería en Mecánica", "Ingeniería de metalurgia", "Ingeniería de minas", "Tecnología del petróleo"]
  }
];

export default function Departments() {
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
              <BreadcrumbPage>Departamentos Académicos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mt-6 mb-8">Departamentos Académicos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {departments.map((dept) => (
            <Card key={dept.name} className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${dept.image})` }}
              />
              <CardHeader>
                <CardTitle>{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{dept.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Programas Ofrecidos:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {dept.programs.map((program) => (
                      <li key={program}>{program}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <Button asChild>
                    <Link href={`/departments/${dept.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Saber Más
                    </Link>
                  </Button>
                  <Button variant="outline">
                    Contactar Departamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recursos del Departamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Directorio de la Facultad</h3>
                <p className="mb-4">Encuentra información de contacto para el personal y la facultad del departamento.</p>
                <Button variant="outline">Buscar en el Directorio</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Centros de Investigación</h3>
                <p className="mb-4">Explora nuestras instalaciones y proyectos de investigación de vanguardia.</p>
                <Button variant="outline">Ver Centros</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Eventos del Departamento</h3>
                <p className="mb-4">Mantente actualizado con seminarios, talleres y conferencias.</p>
                <Button variant="outline">Ver Calendario</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
