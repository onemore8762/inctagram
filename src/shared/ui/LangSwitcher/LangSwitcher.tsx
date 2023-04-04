import React, { memo } from 'react'
import { Button } from 'shared/ui/Button/Button'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()
    const router = useRouter()

    const toggleLanguage = () => {
        const { pathname, asPath, query } = router
        void router.push({ pathname, query }, asPath, { locale: i18n.language === 'ru' ? 'en' : 'ru' })
    }
    return (
        <Button
                theme={'clear'}
                onClick={toggleLanguage}
                className={clsx('', {}, [className])}>
            {t(i18n.language === 'ru' ? 'EN' : 'RU')}
        </Button>
    )
}
)
