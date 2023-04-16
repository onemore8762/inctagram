import cls from 'widgets/Sidebar/ui/Sidebar/Sidebar.module.scss'
import clsx from 'clsx'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import HomeIcon from 'shared/assets/icons/light/home.svg'
import CreateIcon from 'shared/assets/icons/light/plus-square.svg'
import ProfileIcon from 'shared/assets/icons/light/person.svg'
import StatisticsIcon from 'shared/assets/icons/general/trending-up.svg'
import FavoritesIcon from 'shared/assets/icons/light/bookmark.svg'
import { AppRoutes } from '@/shared/config/routeConfig/path'
import { useTranslation } from 'next-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props
    const { t } = useTranslation()
    return (
        <div className={clsx(cls.Sidebar, [className])}>
            <AppLink
                href={AppRoutes.HOME}
                className={cls.item}>
                <HomeIcon className={cls.icon}/>
                <span className={cls.link}>
                    {t('Home')}
                </span>
            </AppLink>
            <AppLink
                href={AppRoutes.CREATE}
                className={cls.item}>
                <CreateIcon className={cls.icon}/>
                <span className={cls.link}>
                    {t('Create')}
                </span>
            </AppLink>
            <AppLink
                href={AppRoutes.STATISTICS}
                className={cls.item}>
                <StatisticsIcon className={cls.icon}/>
                <span className={cls.link}>
                    {t('Statistics')}
                </span>
            </AppLink>
            <AppLink
                href={AppRoutes.FAVORITES}
                className={cls.item}>
                <HomeIcon className={cls.icon}/>
                <span className={cls.link}>
                    {t('Favorites')}
                </span>
            </AppLink>
        </div>
    )
}
