import React from 'react'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { useGetProfileData } from 'app/hooks/useGetProfileData'

import cls from './ProfilePage.module.scss'

export const ProfilePage = () => {
    const { userData, response } = useGetProfileData()
    return (
        <div className={cls.container}>
            <div className={cls.flex}>
                <div className={cls.avatar}>
                    <Avatar size={192} src={userData ? userData.avatarUrl : undefined} />
                </div>
                <div>
                    <div className={cls.userName}>{userData?.userName}</div>
                    <div className={cls.info}>
                        <div>
                            <div className={cls.subscribe}>2 218</div>
                            <div>Subscriptions</div>
                        </div>
                        <div>
                            <div className={cls.subscribe}>2358</div>
                            <div>Subscribers</div>
                        </div>
                        <div>
                            <div className={cls.subscribe}>2764</div>
                            <div>Publications</div>
                        </div>
                    </div>
                    <div className={cls.aboutMe}>{userData?.aboutMe}</div>
                </div>
            </div>
            <div className={cls.cardsList}>
                <div className={cls.card}>
                    <Card src={''} alt={''}/>
                </div>
            </div>
        </div>
    )
}
