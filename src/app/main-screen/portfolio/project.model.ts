export interface Project_ {
    title: string,
    description: string,
    guide: string,
    image: string,
    link: string,
    link_source: string,
    date_start: string,
    date_end: string,
    exist: boolean,
    typeIndex: number
}
export interface Project extends Partial<Project_> {

}
