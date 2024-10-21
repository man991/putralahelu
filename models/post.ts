export interface Post {
    postID: string
    userID: string
    title: string
    totalUpvotes: number
    totalDownvotes: number
    totalComments: number
    createTime: number
    feed: number
    searchVector: string
    mediaWidth: number
    mediaHeight: number
    media: string
    mediaThumbnail: string
    sensitive: boolean
    mediaType: number
    hashtags: string[]
    totalCoins: number
    ageTime: number
    userUsername: string
    userAvatar: string
    userPrivilege: number
    userPlusTime: number
  }