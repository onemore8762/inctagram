import cls from 'widgets/Sidebar/ui/Sidebar/Sidebar.module.scss'
import clsx from 'clsx'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import HomeOutline from '@/shared/assets/icons/outline/home-outline.svg'
import Home from '@/shared/assets/icons/light/home.svg'
import CreateOutline from '@/shared/assets/icons/outline/plus-square-outline.svg'
import Create from '@/shared/assets/icons/light/plus-square.svg'
import ProfileOutline from '@/shared/assets/icons/outline/person-outline.svg'
import Profile from 'shared/assets/icons/light/person.svg'
import Statistics from 'shared/assets/icons/general/trending-up.svg'
import FavoritesOutline from '@/shared/assets/icons/outline/bookmark-outline.svg'
import Favorites from 'shared/assets/icons/light/bookmark.svg'
import IconLogOut from 'shared/assets/icons/general/log-out.svg'
import { AppRoutes } from '@/shared/config/routeConfig/path'
import { useTranslation } from 'next-i18next'
import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import { Button } from '@/shared/ui/Button/Button'
import React from 'react'
import { useRouter } from 'next/router'

interface SidebarProps {
    className?: string
    active?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { theme } = useTheme()
    const fill = theme === Theme.LIGHT ? '#000000' : '#ffffff'
    const { asPath } = useRouter()
    const currentPath = asPath.replace(/\/[a-z]*(?=\/)/g, '')

    return (
        <div className={clsx(cls.Sidebar, [className])}>
            <div className={cls.menu}>
                <AppLink
                    href={AppRoutes.HOME}
                    active={currentPath === AppRoutes.HOME}
                    className={clsx(cls.item, { [cls.active]: currentPath === AppRoutes.HOME })}
                >
                    {currentPath === AppRoutes.HOME
                        ? <Home className={cls.icon}/>
                        : <HomeOutline className={cls.icon} fill={fill}/>
                    }
                    <span className={cls.link}>
                        {t('Home')}
                    </span>
                </AppLink>
                <AppLink
                    href={AppRoutes.CREATE}
                    active={currentPath === AppRoutes.CREATE}
                    className={clsx(cls.item, { [cls.active]: currentPath === AppRoutes.CREATE })}
                >
                    {currentPath === AppRoutes.CREATE
                        ? <Create className={cls.icon}/>
                        : <CreateOutline className={cls.icon} fill={fill}/>}

                    <span className={cls.link}>
                        {t('Create')}
                    </span>
                </AppLink>
                <AppLink
                    href={AppRoutes.PROFILE}
                    active={currentPath === AppRoutes.PROFILE}
                    className={clsx(cls.item, { [cls.active]: currentPath === AppRoutes.PROFILE })}
                >
                    {currentPath === AppRoutes.PROFILE
                        ? <Profile className={cls.icon}/>
                        : <ProfileOutline className={cls.icon} fill={fill}/>
                    }

                    <span className={cls.link}>
                        {t('My Profile')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.extra}>
                <AppLink
                    href={AppRoutes.STATISTICS}
                    active={currentPath === AppRoutes.STATISTICS}
                    className={clsx(cls.item, { [cls.active]: currentPath === AppRoutes.STATISTICS })}
                >
                    <Statistics className={cls.icon} fill={fill}/>

                    <span className={cls.link}>
                        {t('Statistics')}
                    </span>
                </AppLink>
                <AppLink
                    href={AppRoutes.FAVORITES}
                    active={currentPath === AppRoutes.FAVORITES}
                    className={clsx(cls.item, { [cls.active]: currentPath === AppRoutes.FAVORITES })}
                >
                    {currentPath === AppRoutes.FAVORITES
                        ? <Favorites className={cls.icon}/>
                        : <FavoritesOutline className={cls.icon} fill={fill}/>
                    }

                    <span className={cls.link}>
                        {t('Favorites')}
                    </span>
                </AppLink>
            </div>
            <Button theme={'clear'}
                // disabled={isLoading}
                    className={cls.button}
                    style={{ color: 'white' }}
                // onClick={clickHandler}
            >
                <IconLogOut className={cls.logout} fill={fill} />
                <span className={cls.link}>
                    Log Out
                </span>

            </Button>
        </div>
    )
}
