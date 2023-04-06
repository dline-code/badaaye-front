import {setCookie, getCookie} from "react-use-cookie"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { useRouter } from "next/router";


export function middleware(event: any) {
    const router = useRouter()
    
    const token = getCookie("baadaye-token");
    console.log(token)

    if (false){
        return NextResponse.redirect('http://localhost:3000/login')
    }
}