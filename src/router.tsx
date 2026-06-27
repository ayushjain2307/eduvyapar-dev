import { createRouter, createRoute, createRootRoute, redirect } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import SignIn from './routes/signin'
import Dashboard from './routes/dashboard'
import ModulesPage from './routes/modules'
import DepartmentsPage from './routes/departments'
import AdmissionPage from './routes/admission'
import BrochurePage from './routes/brochure'
import Shell from './components/layout/Shell'

const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => { throw redirect({ to: '/signin' }) },
})

const signinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signin',
  component: SignIn,
})

const shellRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'shell',
  component: Shell,
})

const dashboardRoute = createRoute({
  getParentRoute: () => shellRoute,
  path: '/dashboard',
  component: Dashboard,
})

const modulesRoute = createRoute({
  getParentRoute: () => shellRoute,
  path: '/modules',
  component: ModulesPage,
})

const departmentsRoute = createRoute({
  getParentRoute: () => shellRoute,
  path: '/departments',
  component: DepartmentsPage,
})

const admissionRoute = createRoute({
  getParentRoute: () => shellRoute,
  path: '/admission',
  component: AdmissionPage,
})

const brochureRoute = createRoute({
  getParentRoute: () => shellRoute,
  path: '/brochure',
  component: BrochurePage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  signinRoute,
  shellRoute.addChildren([
    dashboardRoute,
    modulesRoute,
    departmentsRoute,
    admissionRoute,
    brochureRoute,
  ]),
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
