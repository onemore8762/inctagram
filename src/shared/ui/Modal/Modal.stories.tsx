import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})

Light.args = {
    title: 'Light  Modal',
    isOpen: true
}

export const Dark = Template.bind({})

Dark.args = {
    title: 'Dark Modal',
    isOpen: true
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
