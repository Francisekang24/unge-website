

interface Department {
    name: string;
    image: string;
    presentation: string;
    description: string;
    programs: string[];
}

interface Faculty {
    title: string;
    id: number;
    name: string;
    department: string;
    email: string;
    phone: string | null;
    office: string | null;
    bio: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
}

export const faculties: Faculty[] = [
    {
        title: "Dr.",
        id: 1,
        name: "Juan Micha",
        department: "Ciencias de la Información y Filología Lingüística",
        email: "juan.micha@unge.gq",
        phone: "123-456-7890",
        office: "Building A, Room 101",
        bio: "Dr. Juan Micha is a professor of Filología Lingüística with over 20 years of experience.",
        imageUrl: "/faculties/juan_micha.webp",
        createdAt: new Date("2020-01-15")
    },
    {
        title: "Prof.",
        id: 2,
        name: "Maria Asumu",
        department: "Derecho y Ciencias Políticas",
        email: "maria.asumu@unge.gq",
        phone: "098-765-4321",
        office: "Building B, Room 202",
        bio: "Prof. Maria Asumu specializes in international law and political science.",
        imageUrl: "/faculties/maria_asumu.webp",
        createdAt: new Date("2019-03-22")
    },
    {
        title: "Dr.",
        id: 3,
        name: "Carlos Nguema",
        department: "Pedagogía y Ciencias de la Educación",
        email: "carlos.nguema@unge.gq",
        phone: null,
        office: "Building C, Room 303",
        bio: "Dr. Carlos Nguema has a PhD in Education and focuses on educational psychology.",
        imageUrl: "/faculties/carlos_nguema.webp",
        createdAt: new Date("2018-07-10")
    },
    {
        title: "Prof.",
        id: 4,
        name: "Ana Mangue",
        department: "Humanidades y Ciencias Religiosas",
        email: "ana.mangue@unge.gq",
        phone: "321-654-0987",
        office: null,
        bio: "Prof. Ana Mangue is an expert in religious studies and humanities.",
        imageUrl: "/faculties/ana_mangue.webp",
        createdAt: new Date("2021-05-05")
    },
    {
        title: "Dr.",
        id: 5,
        name: "Luis Esono",
        department: "Ingeniería y Tecnología",
        email: "luis.esono@unge.gq",
        phone: "456-789-0123",
        office: "Building D, Room 404",
        bio: "Dr. Luis Esono is a leading researcher in mechanical engineering.",
        imageUrl: "/faculties/luis_esono.webp",
        createdAt: new Date("2017-11-30")
    }
]

interface Departments {
    [key: string]: Department[];
}

export const Departments: Departments = {
    Malabo: [
        {
            name: "Ciencias de la Información y Filología Lingüística",
            image: "/departments/CIFL.webp",
            presentation: "La Facultad de Ciencias de la Información y Filología Lingüística de la Universidad Nacional de Guinea Ecuatorial se creó por acuerdo unánime en la Junta de Gobierno celebrada en la ciudad de Bata en el año 2016. Sin embargo, su estructura funcional toma posesión en el mes de octubre de 2020, mediante Resolución Rectoral Nº 009/2020, de fecha 30 de septiembre, en la cual se recoge el nombramiento de su directiva: Decano, Vicedecano y Secretario. Posterior a esto, celebra su primera junta reestructurando el antiguo Departamento de Comunicación convirtiéndose en dos departamentos: Departamento de Filología, Dpto. de Periodismo y Comunicación Audiovisual, y se crea el Departamento de Lenguas Modernas.",
            description: "El departamento de lenguas modernas de la Facultad de Ciencias de la información y Filología Hispánica de la Universidad Nacional de Guinea Ecuatorial, ofrece a los estudiantes extranjeros de programas de intercambio, y todas las demás personas interesadas a nuestros cursos anuales y verano. El departamento de lenguas modernas, ofrece dos tipos de cursos a lo largo del año: cursos anuales, de octubre a julio y curso de verano, julio, agosto y septiembre. Se recomienda que los estudiantes con escaso o nulo conocimiento de español, tomen un curso de un año de español antes del comienzo de sus clases universitarias. Todos los estudiantes comenzarían los cursos en el nivel inicial, para luego presentarse a un test de nivel tras finalizar con éxito los ocho ciclos que forman los cuatro niveles A1, A2 y B1.1, B1.2. Aquellos que superen el test en el mes de julio se les otorgará un certificado de ELE con el que se matricularán para sus estudios universitarios, y para aquellos que no superen el test, se presentarían a una segunda prueba en el mes de septiembre o se les ofrecerá un certificado pero a sabiendas que no podrán presentar sus TFG hasta aprobar el test de nivel de ELE. Estos cursos, de 180 horas; de 126 horas presenciales y 60 horas de trabajo y actividades extraescolares, están adaptados a los niveles del Marco europeo común de referencia. El objetivo de los cursos se centra en el desarrollo de las seis destrezas comunicativas, tanto las receptivas como las productivas.",
            programs: ["Filología hispánica, Periodismo y Comunicación Audiovisual, Lenguas modernas"],
        },

        {
            name: "Derecho y Ciencias Políticas",
            image: "/departments/DCP.webp",
            presentation: "La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas. La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas. La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas.",
            description: "La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas. La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas. La Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo del derecho y las ciencias políticas.",
            programs: ["Derecho, Ciencias Políticas"],
        },

        {
            name: "Pedagogía y Cienicas de la Educación",
            image: "/departments/PCE.webp",
            presentation: "La Facultad de Pedagogía y Ciencias de la Educación de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de la pedagogía y las ciencias de la educación. La Facultad de Pedagogía y Ciencias de la Educación de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de la pedagogía y las ciencias de la educación.",
            description: "La Facultad de Pedagogía y Ciencias de la Educación de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de la pedagogía y las ciencias de la educación. La Facultad de Pedagogía y Ciencias de la Educación de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de la pedagogía y las ciencias de la educación.",
            programs: ["Pedagogía, Ciencias de la Educación"],
        },

        {
            name: "Humanidades y Ciencias Religiosas",
            image: "/departments/HCR.webp",
            presentation: "La Facultad de Humanidades y Ciencias Religiosas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de las humanidades y las ciencias religiosas. La Facultad de Humanidades y Ciencias Religiosas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de las humanidades y las ciencias religiosas.",
            description: "La Facultad de Humanidades y Ciencias Religiosas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de las humanidades y las ciencias religiosas. La Facultad de Humanidades y Ciencias Religiosas de la Universidad Nacional de Guinea Ecuatorial, es una institución académica que se encarga de la formación de profesionales en el campo de las humanidades y las ciencias religiosas.",
            programs: ["Humanidades, Ciencias Religiosas"],
        },

        {
            name: "Ingeniería y Tecnología",
            image: "/departments/IYT.webp",
            presentation: "La Facultad de Ingenierías y Tecnologías, su origen se remonta desde 1988 fecha en que se crea la Escuela Nacional de Agricultura (ENA) Obiang Nguema Mbasogo, con vocación Subregional y rango universitario que posteriormente con el decreto  Ley Nº 12 de fecha 6 de enero /1995 que crea la Universidad Nacional de Guinea Ecuatorial en anagrama UNGE, se adhiere a la red de Facultades y Escuela Universitarias según reza el Articulo 11 de los Estatutos de la UNGE, pasando a ser uno de los primeros centros  integrantes de esta magna institución universitaria nacional, con el nombre de Escuela Universitaria de Estudios Agrpecuarios Pesca y Forestal. Con el desarrollo de la institución universitaria, en el Consejo de Gobierno de la Universidad Nacional de Guinea Ecuatorial se dictó la resolución número 11/2016 de fecha 20 de mayo del mismo año, este centro pasó a ser promovido al rango de Facultad, cuya denominación oficial actual es Facultad de Ingenierías y Tecnologías.",
            description: "La  misión, visión y objetivos son los recogidos en los Estatutos de la institución, idea original y motor de su creación que descansa sobre tres pilares fundamentales, Docencia, Investigación y extensión. Docencia para enseñar ( Formar RR.HH cualificados y diversificados) Investigación para formar, descubrir, actualizar e innovar Extensión para hacer llegar nuestros conocimientos a la sociedad para adquirir nuevos conocimientos y experiencias a través de intercambios con otras instituciones afines.",
            programs: ["Ingeniería Agroalimentaría, Ingeniería agrónoma, Geología, Ingeniería en Mecánica, Ingeniería de metalurgia, Ingeniería de minas, Tecnología del petróleo"],
        }
        
    ]
};
