import {Link} from "wouter"
import { X } from 'lucide-react'
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  faculties: { title: string; href: string }[]
  resources: { title: string; href: string }[]
}

export function MobileMenu({ isOpen, setIsOpen, faculties, resources }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetHeader> 
        <nav className="mt-6 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faculties">
              <AccordionTrigger>Facultades</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-4 space-y-2">
                  {faculties.map((faculty) => (
                    <li key={faculty.title}>
                      <Link
                        href={faculty.href}
                        className="text-sm hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        {faculty.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources">
              <AccordionTrigger>Resources</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-4 space-y-2">
                  {resources.map((resource) => (
                    <li key={resource.title}>
                      <Link
                        href={resource.href}
                        className="text-sm hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ul className="mt-6 space-y-2">
            <li>
              <Link
                href="/academics"
                className="text-sm hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Asuntos Academicos
              </Link>
            </li>
            <li>
              <Link
                href="/business"
                className="text-sm hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Administracion
              </Link>
            </li>
            <li>
              <Link
                href="/faculty"
                className="text-sm hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Actualidad
              </Link>
            </li>
            <li>
              <Link
                href="/registrar"
                className="text-sm hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Oficina de Registro
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

