import { setCookie, getCookie } from "react-use-cookie"

export function checkIsUserAuthenticated() {
    const isUserAuthenticated = getCookie("baadaye-token")
    
    if (isUserAuthenticated)
        return true
    else
        return false
}