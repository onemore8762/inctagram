import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Skeleton } from './Skeleton'

export default {
    title: 'shared/Skeleton',
    component: Skeleton
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args}/>

export const DefaultSkeleton = Template.bind({})
DefaultSkeleton.args = {
    width: 200,
    height: 300,
    borderRadius: 4
}
