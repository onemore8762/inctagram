import { useState } from 'react'
import { Controller } from 'react-hook-form'

import { useConfirmModal } from 'features/authorization'
import { type IFormValidate, useValidationForm } from 'features/profile/model/hooks/useValidationForm'

import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Textarea } from 'shared/ui/Textarea/Textarea'
import { DatePicker } from 'shared/ui/DatePicker/DatePicker'
import { Button } from 'shared/ui/Button/Button'

import { AvatarModal } from '../AvatarModal/AvatarModal'

import cls from './UpdateProfilePage.module.scss'

export const UpdateProfilePage = () => {
    const [avatar, setAvatar] = useState<string>()
    const { setIsOpen } = useConfirmModal()
    const {
        register,
        control,
        handleSubmit,
        validErrors: {
            userNameError,
            firstNameError,
            lastNameError
        }
    } = useValidationForm(['userName', 'firstName', 'lastName'])

    const handlerPick = () => {
        setIsOpen(true)
    }

    const clickHandler = () => {
        setAvatar(undefined)
    }

    const onSubmit = (data: IFormValidate) => {
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <AvatarModal setAvatar={setAvatar} />
        <div className={cls.infoContainer}>
            <div className={cls.avatarContainer}>
                <div>
                    {avatar
                        ? <div className={cls.avatar}>
                            <Avatar size={192} src={avatar} />
                            <button className={cls.imageButton} onClick={clickHandler} type={'button'}></button>
                        </div>
                        : <Avatar size={192} src={avatar} />}

                </div>
                <Button theme={'outline'} onClick={handlerPick}>Add a profile photo</Button>
            </div>
            <div className={cls.formsContainer}>
                <Input
                    {...register('userName')}
                    id="userName"
                    type={'text'}
                    error={!!userNameError}
                    errorText={userNameError}
                    className={cls.wrapper}
                    label="Username"
                    labelClassName={cls.label}
                />

                <Input
                    {...register('firstName')}
                    id="firstName"
                    type={'text'}
                    label="First Name"
                    error={!!firstNameError}
                    errorText={firstNameError}
                    className={cls.wrapper}
                    labelClassName={cls.label}
                />

                <Input
                    {...register('lastName')}
                    id="lastName"
                    type={'text'}
                    label="Last Name"
                    error={!!lastNameError}
                    errorText={lastNameError}
                    className={cls.wrapper}
                    labelClassName={cls.label}
                />

                <Controller control={control}
                            name="dateOfBirth" render={({
                                field: { onChange, value }
                            }) => <div className={cls.wrapper}>
                                <label className={cls.label}>Date of birthday</label>
                                <DatePicker value={value} onChange={onChange} />
                            </div>} />

                <Input
                    {...register('city')}
                    id="city"
                    type={'text'}
                    label="City"
                    className={cls.wrapper}
                    labelClassName={cls.label}
                />

                <Textarea
                    {...register('aboutMe')}
                    id="aboutMe"
                    label="About me"
                    labelClassName={cls.label}
                    textareaClassName={cls.textarea}
                    className={cls.wrapper} />
            </div>
        </div>
        <hr className={cls.line} />
        <Button type="submit" theme={'primary'} className={cls.button}>Save Changes</Button>
    </form>
}
