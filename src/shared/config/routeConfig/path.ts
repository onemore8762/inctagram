export const AppRoutes = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTRATION: '/auth/registration',
        NEW_PASSWORD: '/auth/create-new-password',
        FORGOT_PASSWORD: '/auth/forgot-password',
        CONGRATULATIONS: '/auth/congratulations',
        VERIFICATION: '/auth/verification'
    },
    PROFILE: {
        MYPROFILE: '/profile/myprofile',
        UPDATEPROFILE: '/profile/create-profile'
    },
    HOME: '/home',
    CREATE: '/create',
    STATISTICS: '/statistics',
    FAVORITES: '/favorites'
} as const
