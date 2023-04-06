export interface UserAuthModel {
    email: string
    login: string
    userId: string
}

export interface UserLoginModel {
    loginOrEmail: string
    password: string
}

export interface UserRegistrationModel {
    login: string
    email: string
    password: string
}
