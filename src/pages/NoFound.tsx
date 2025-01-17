// 1/14-2025 Francisco Ekang Mofuman

import { Card, CardContent } from "../components/ui/card";

export default function NoFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card>
            <CardContent>
                <article>
                    <h1 className="text-2xl font-bold text-center">404</h1>
                    <p className="text-center">Page not found</p>
                </article>
                <div>
                    <a href="/" className="block text-center mt-4 text-blue-600">Go to home</a>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}