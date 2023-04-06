import {setCookie, getCookie} from "react-use-cookie"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";


export function middleware(req:any) {
    const verifyToken = getCookie("baadaye-token");
    const url = req.url

    if (!verifyToken){
        return NextResponse.redirect(`${url}/login`)
    }
    if (!verifyToken && url === "http://localhost:3000") {
        return NextResponse.redirect(`${url}/tela-principal-estudante`)
    }
}