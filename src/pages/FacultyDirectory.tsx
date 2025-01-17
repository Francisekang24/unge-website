import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Link } from "wouter";
import { faculties } from "../types/types";
import { Button } from "../components/ui/button";

export default function FacultyDirectory() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredFaculties = faculties.filter(faculty =>
        faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                            <BreadcrumbPage>Faculty Directory</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl font-bold mt-6 mb-8">Faculty Directory</h1>
                <div className="flex justify-start items-center mb-6">
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="border border-gray-300 rounded px-4 py-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <select className="border border-gray-300 rounded px-4 py-2">
                            <option value="">All Departments</option>
                            {/* Map through departments to create options */}
                        </select>
                    </div>
                    <Button>Filter</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFaculties.map((faculty) => (
                        <Card key={faculty.id}>
                            <CardHeader>
                                <img src={faculty.imageUrl || "/default-profile.png"} alt={faculty.name} className="w-full h-48 object-cover" />
                                <CardTitle>{faculty.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">{faculty.department}</p>
                                <p className="text-sm text-gray-600">{faculty.email}</p>
                                {faculty.phone && <p className="text-sm text-gray-600">{faculty.phone}</p>}
                                {faculty.office && <p className="text-sm text-gray-600">{faculty.office}</p>}
                                {faculty.bio && <p className="text-sm text-gray-600 mt-2">{faculty.bio}</p>}
                                <Button asChild>
                                    <Link href={`/faculty/${faculty.id}`}>View Profile</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}