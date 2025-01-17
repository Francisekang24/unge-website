import React from "react";
import { Link } from "wouter";
import { cn } from "../../lib/utils";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink
} from "../ui/navigation-menu";


const faculties = [
    { title: "Facultad de Ciencias", href: "/departments/sciences" },
    { title: "Facultad de Ciencias Sociales", href: "/departments/social-sciences" },
    { title: "Facultad de Derecho", href: "/departments/law" },
    { title: "Facultad de Economía", href: "/departments/economics" },
    { title: "Facultad de Educación", href: "/departments/education" },
    { title: "Facultad de Ingeniería", href: "/departments/engineering" },
    { title: "Facultad de Medicina", href: "/departments/medicine" },
    { title: "Facultad de Humanidades", href: "/departments/humanities" },
]


const resources = [
    { title: "Calendario Académico", href: "/academics/calendar" },
    { title: "Catálogo de Cursos", href: "/academics/courses" },
    { title: "Biblioteca", href: "/library" },
    { title: "Investigación", href: "/research" },
    { title: "Directorio de Profesores", href: "/faculty" },
    { title: "Calendario de Eventos", href: "/events" },
]
export default function Navbar() {

    return (
        <header className="sticky top-0 z-50 w-full p-4 border-b bg-green-950 bg-opacity-90">
            <div className="container flex h-20 items-end justify-between">
                <Link href="/">
                    <a className="mr-8 flex flex-col items-start space-x-2 bg-green-950 rounded-[10px] p-2">
                        <div className="ml-2 flex items-center justify-center gap-2">
                            <img src="/logo.png" alt="UNGE" className="w-12 h-12" />
                            <span className="text-xl text-center font-bold text-primary">UNGE</span>
                        </div>
                        <span className="text-md font-bold text-primary">Universidad Nacional De Guinea Ecuatorial</span>
                    </a>
                </Link>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Facultades</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-green-900">
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <li className="col-span-2">
                                        <Link href="/Departments">
                                            <a className={cn(
                                                "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                            )}>
                                                Departamentos
                                            </a>
                                        </Link>
                                    </li>
                                    {faculties.map((facultie) => (
                                        <ListItem
                                            key={facultie.title}
                                            title={facultie.title}
                                            href={facultie.href}
                                        >
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/academics">
                                <a className={cn(
                                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                )}>
                                    Asuntos Academicos
                                </a>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/business">
                                <a className={cn(
                                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                )}>
                                    Administracion
                                </a>
                            </Link>
                        </NavigationMenuItem>



                        <NavigationMenuItem>
                            <Link href="/faculty">
                                <a className={cn(
                                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                )}>
                                    Actualidad
                                </a>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/registrar">
                                <a className={cn(
                                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                )}>
                                    Oficina de Registro
                                </a>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-green-900">
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {resources.map((resource) => (
                                        <ListItem
                                            key={resource.title}
                                            title={resource.title}
                                            href={resource.href}
                                        >
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"