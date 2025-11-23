export interface createCommentResponse {
    message: string,
    total?: number,
    comments: comments[]
}

export interface comments {
    _id: string,
    content: string,
    commentCreator: creator 
    post: string,
    createdAt: string,
    id: string
}

export interface creator { 
    _id: string,
    name: string,
    photo: string

}

export interface deleteComment {
    message: string
}
