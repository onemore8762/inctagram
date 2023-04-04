import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const DefaultModal = Template.bind({})

DefaultModal.args = {
    title: 'Default Modal',
    isOpen: true
}
