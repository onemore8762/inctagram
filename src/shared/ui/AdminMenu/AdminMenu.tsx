import React, { type FC } from 'react'
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import cls from './AdminMenu.module.scss'
import { useRouter } from 'next/router'
import { Button } from '../Button/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthService } from '@/features/authorization'
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader'
const AdminMenu: FC = () => {
    const { pathname } = useRouter()
    const queryClient = useQueryClient()
    console.log(pathname.includes('/[locale]/auth'))
    const { mutate: logout, isLoading, isError } = useMutation({
        mutationFn: AuthService.logout,
        onSuccess: async () => {
            await queryClient.invalidateQueries(['me'])
        }
    })
    if (isLoading) return <PageLoader/>
    if (isError) return <div>{'Some error'}</div>
    const clickHandler: () => void = () => {
        logout()
    }
    return (
        <div className={cls.AdminMenu}>
            <ThemeSwitcher/>
            <LangSwitcher/>
            {!pathname.includes('/[locale]/auth') &&
                <Button theme={'textButton'}
                        size={'small'}
                        style={{ color: 'white' }}
                        onClick={clickHandler}>logout</Button>}
        </div>
    )
}

export default AdminMenu
