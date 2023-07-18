export interface NewPostType {
    description: string
    files: string
}

interface NewestLikes {
    userId: string
    login: string
    addedAt: string
}

interface LikesInfoType {
    likesCount: number
    dislikesCount: number
    myStatus: string
    newestLikes: NewestLikes[]
}

export interface PostResponseType {
    id: string
    photos: string
    description: string
    createdAt: string
    updatedAt: string
    extendedLikesInfo: LikesInfoType
}

export interface Post {
    id: string
    photos: string
    description: string
    createdAt: string
    updatedAt: string
}

export interface PostImage {
    url: string
    width: number
    height: number
    fileSize: number
    uploadId: string
}

export interface PostsImage {
    images: PostImage[]
}

export interface NewPost {
    description: string
    childrenMetadata:
    Array<{
        uploadId: string
    }>
}

export interface PostResponse {
    id: number
    description: string
    location: string
    images: PostImage[]
    createdAt: string
    updatedAt: string
}

export interface GetPostsResponse {
    totalCount: number
    pagesCount: number
    page: number
    pageSize: number
    items: PostResponse[]
}
