import { useRouter } from "next/router";
import {ReactNode, useEffect} from "react"

import { APP_ROUTES } from "src/constants/app-routes";
import { checkIsUserAuthenticated } from "src/functions/checkIsUserAuthenticated";

type PrivateRouteProps = {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isUserAuthenticated = checkIsUserAuthenticated();
    const route  = useRouter()

    useEffect(() => {
        if (!isUserAuthenticated) {
            route.push(APP_ROUTES.public.login)
        }
    }, [isUserAuthenticated, route.push]);

    return (
        <>
            {!isUserAuthenticated && null}
            {isUserAuthenticated && children}
        </>
    )
}
export default PrivateRoute;