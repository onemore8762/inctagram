import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import HomeIcon from '../../assets/icons/dark/home-outline.svg'

import { AppLink } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        text: 'Home',
        href: '/',
        Icon: HomeIcon
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) =>
    <AppLink {...args}></AppLink>

export const Normal = Template.bind({})
Normal.args = {
}

export const Active = Template.bind({})
Active.args = {
    active: true
}
