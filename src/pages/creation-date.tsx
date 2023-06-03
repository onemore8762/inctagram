import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'
import { Post } from 'entities/Post/index'

export default function CreationDatePage () {
    return (
        <Post actionSlot={<div style={{ height: '450px' }}>I am children!</div>} />
    )
}

CreationDatePage.getLayout = getAuthLayout
