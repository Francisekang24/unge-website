
import './App.css'

import { Switch, Route } from 'wouter'
import NoFound from './pages/NoFound'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Academics from './pages/Academics'
import Business from './pages/Business'
import Departments from './pages/Departments'
import Registrar from './pages/Registrar'
import FacultyDirectory from './pages/FacultyDirectory'
import Footer from './components/layout/Footer'


function Router() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/academics" component={Academics} />
          <Route path="/business" component={Business} />
          <Route path="/departments" component={Departments} />
          <Route path="/registrar" component={Registrar} />
          <Route path="/faculty" component={FacultyDirectory} />
          {/* <Route path="/events" component={EventsCalendar} /> */}
          <Route component={NoFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}


function App() {
  

  return (
    <>
      <Router />
    </>
  )
}

export default App
