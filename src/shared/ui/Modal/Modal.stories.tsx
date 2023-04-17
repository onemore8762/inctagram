import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

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
