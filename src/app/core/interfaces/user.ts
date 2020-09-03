/**
|--------------------------------------------------
| All the interfaces !!
|--------------------------------------------------
*/
export interface UserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface AdData {
    company: string;
    url: string;
    text: string;
}

export interface UserListData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserData[];
    ad: AdData;
}

