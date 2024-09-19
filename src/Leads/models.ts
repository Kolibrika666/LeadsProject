export interface IDataLeads {
    _embedded: ILeads; 
}

export interface IFilterLeads {
    id?: number,
    page?: number;
    limit?: number;
}
export interface ILeads {
    leads: ILead[];
}

export interface ILead {
    id: number,
    name: string,
    price: number,
    closest_task_at: number,
}
