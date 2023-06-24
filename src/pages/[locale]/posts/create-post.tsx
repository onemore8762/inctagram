import React, { type ChangeEvent, useRef } from 'react'

const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
    const reader = new FileReader()
    reader.onloadend = () => {
        const file64 = reader.result as string
        callBack(file64)
    }
    reader.readAsDataURL(file)
}

const CreatePost = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef?.current?.click()
    }

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            const file = e.target.files[0]
            console.log('file: ', file)

            if (file.size < 4000000) {
                convertFileToBase64(file, (file64: string) => {
                    console.log('file64: ', file64)
                    // createPost({
                    //     description: "Zhanat's post",
                    //     files: file64
                    // })
                })
            } else {
                console.error('Error: ', 'Файл слишком большого размера')
            }
        }
    }

    return (
        <div>
            <button type="button" onClick={selectFileHandler}>Create post</button>
            <input
                style={{ display: 'none' }}
                ref={inputRef}
                type="file"
                onChange={uploadHandler}
            />
        </div>
    )
}

export default CreatePost
