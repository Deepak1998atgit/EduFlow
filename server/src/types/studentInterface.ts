// export interface StudentInterface {
//     _id: string;
//     name: string;
//     email: string;
//     mobile: number;
//     password: string;
//     isBlocked: boolean;
// }
export interface StudentInterface {
    _id: string;
    name: string;
    profilePic?: {
        key?: string;
        name: string;
        url?: string;
    };
    email: string;
    mobile: number;
    password: string;
    isGoogleUser: boolean;
    isBlocked: boolean
    profileUrl: string;
}

export interface StudentUpdateInfo {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    profilePic?: {
        name: string;
        key?: string;
        url?: string;
    };
}
