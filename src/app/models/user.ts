export interface User {
    _id?: string
    token: string
    civility: string
    email: string
    firstname: string
    lastname: string
    password?: string
    dayBirth?: number
    monthBirth?: number
    yearBirth?: number
}
