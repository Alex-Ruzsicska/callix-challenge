export default function normalizeLaunch(data: any): Launch | undefined {
    if(data?.id && data?.name && data?.date){
        const launch = {
            id: data.id,
            name: data.name,
            date: data.date,
            imageUrl: data?.imageUrl,
            webcastUrl: data?.webcastUrl
        } as Launch

        return launch
    }
}

export type Launch = {
    id: string;
    date: string;
    name: string;
    imageUrl?: string;
    webcastUrl?: string;
}