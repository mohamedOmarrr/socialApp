export interface createPostsData {
    body?:string
    image?:File
}

export interface createPostOutput{
    message:string;
}

export interface CommentCreator {
  _id: string;
  name: string;
  photo: string;
}

export interface Comment {
  _id: string;
  content: string;
  commentCreator: CommentCreator;
  post: string; 
  createdAt: string;
}

export interface PostUser {
  _id: string;
  name: string;
  photo: string;
}

export interface Post {
  _id: string;
  body: string;
  image:string
  user: PostUser;
  createdAt: string;
  comments: Comment[];
}

export interface PaginationInfo {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
  total: number;
}

export interface PostsResponse {
  message?: string;
  paginationInfo: PaginationInfo;
  posts: Post[];
}

export interface PostDetails {
  message?: string;
  post: Post;
}

