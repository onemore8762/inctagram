import { useMutation, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import { AuthService } from 'features/authorization'
import { useAuth } from 'entities/User'
import IconLogOut from 'shared/assets/icons/general/log-out.svg'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { Container } from 'shared/ui/Container/Container'
import cls from './Header.module.scss'
interface HeaderProps {
    className?: string
}

export const Header = (props: HeaderProps) => {
    const { className } = props
    const { isAuth } = useAuth()
    const queryClient = useQueryClient()

    const { mutate: logout, isLoading } = useMutation({
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
                            onClick={clickHandler}>
                        <IconLogOut className={cls.icon} />
                        Log Out
                    </Button>
                }
            </Container>
        </header>
    )
}
