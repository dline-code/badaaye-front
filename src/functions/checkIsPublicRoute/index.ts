import { APP_ROUTES } from 'src/constants/app-routes'

export const checkIsPublicRoute = (pathname: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public)

  return appPublicRoutes.some(route => route.startsWith(pathname))
}
