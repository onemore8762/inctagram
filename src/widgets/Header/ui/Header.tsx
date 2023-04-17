import clsx from 'clsx'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Container } from 'shared/ui/Container/Container'
import { Button } from 'shared/ui/Button/Button'
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthService } from 'features/authorization'
import cls from './Header.module.scss'
import IconLogOut from 'shared/assets/icons/general/log-out.svg'
import { useAuth } from 'entities/User'
interface HeaderProps {
    className?: string
}

export const Header = (props: HeaderProps) => {
    const { className } = props
    const { isAuth } = useAuth()
    const queryClient = useQueryClient()

    const { mutate: logout, isLoading, isError } = useMutation({
        mutationFn: AuthService.logout,
        onSuccess: async () => {
            await queryClient.invalidateQueries(['me'])
        }
    })
    const clickHandler: () => void = () => {
        logout()
    }
    return (
        <header className={clsx(cls.Header, [className])}>
            <Container className={cls.container}>
                <AppLink className={cls.HeaderText} href={'/'}>Inctagram</AppLink>
                {isAuth &&
                    <Button theme={'clear'}
                            disabled={isLoading}
                            className={cls.button}
                            style={{ color: 'white' }}
                            onClick={clickHandler}>
                        <IconLogOut className={cls.icon} />
                        Log Out
                    </Button>
                }
            </Container>
        </header>
    )
}
