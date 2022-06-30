import {  } from 'http-proxy'
import http1 from 'http'
import http2 from 'node:http'

export const hostApi = "http://localhost:3210"
export const word = "The word";

export function Say()
{
   return "Return de Say() function"
}

export class Db {
   a = "asd";
   b = "asd"
}
