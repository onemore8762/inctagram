export interface UserAuthModel {
    email: string
    login: string
    userId: string
}

export interface UserLoginModel {
    email: string
    password: string
}

export interface UserRegistrationModel {
    login: string
    email: string
    password: string
    frontendLink: string
}

export interface UserRegistrationError {
    errorsMessages: Array<{
        field: string
        message: string
    }>
}
