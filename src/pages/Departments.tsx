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
    name: "Computer Science",
    description: "Advancing technology through innovation and research",
    programs: ["B.S. in Computer Science", "M.S. in Computer Science", "Ph.D. in Computer Science"],
    image: "https://images.unsplash.com/photo-1617365227965-93f9b17832e1"
  },
  {
    name: "Business Administration",
    description: "Developing future business leaders and entrepreneurs",
    programs: ["BBA", "MBA", "Ph.D. in Business"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "Engineering",
    description: "Creating solutions for tomorrow's challenges",
    programs: ["B.S. in Engineering", "M.S. in Engineering", "Ph.D. in Engineering"],
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763"
  },
  {
    name: "Arts & Sciences",
    description: "Exploring human knowledge and creativity",
    programs: ["B.A. in Liberal Arts", "B.S. in Natural Sciences", "M.A. in Humanities"],
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290"
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
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Academic Departments</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mt-6 mb-8">Academic Departments</h1>

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
                  <h3 className="font-semibold mb-2">Programs Offered:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {dept.programs.map((program) => (
                      <li key={program}>{program}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <Button asChild>
                    <Link href={`/departments/${dept.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                    </Link>
                  </Button>
                  <Button variant="outline">
                    Contact Department
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Department Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Faculty Directory</h3>
                <p className="mb-4">Find contact information for department faculty and staff.</p>
                <Button variant="outline">Search Directory</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Research Centers</h3>
                <p className="mb-4">Explore our cutting-edge research facilities and projects.</p>
                <Button variant="outline">View Centers</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Department Events</h3>
                <p className="mb-4">Stay updated with seminars, workshops, and conferences.</p>
                <Button variant="outline">View Calendar</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
