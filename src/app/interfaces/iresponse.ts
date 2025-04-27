import { Iuser } from "./iuser.interface";
export interface Iresponse {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    results: Iuser [] // la api devuelve results no data
}
