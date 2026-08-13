export interface Intern{
    id?: number;
    title: string;
    context: string;
    company_name: string;
    term: string;
    icon_url: string;
}

export interface IInternRepository {
    findAll():Promise<Intern[]>
}