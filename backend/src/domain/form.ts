export interface Form {
    id?: number;
    name: string;
    email: string;
    message: string;
    createdAt?: string;
}

export interface IFormRepository {
    create(form: Form): Promise<void>;
}