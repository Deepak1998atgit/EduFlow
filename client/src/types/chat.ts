export interface Chats {
    _id: string;
    members: string[];
    recentMessage: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface Messages {
    _id: string;
    conversationId: string;
    senderId: string;
    text: string;
    imageName: string;
    imageUrl: string;
    isRead: boolean;
    isDeleted: boolean;
    deletedIds: string[];
    emoji: string;
    createdAt: number;
}
