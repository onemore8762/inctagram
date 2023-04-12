import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from '../../assets/tests/storybook.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})

Primary.args = {
    size: 192,
    src: AvatarImg
}

export const Small = Template.bind({})

Small.args = {
    size: 36,
    src: AvatarImg
}

export const PrimarySrcNone = Template.bind({})

PrimarySrcNone.args = {
    size: 192
}
