export class Project {

    constructor(
        projectId: string, 
        projectName: string, 
        projectStartDate: Date,
        projectEndDate: Date,
        projectCollabrators: Array<string>,
        projectFav: boolean) {
            this.projectCollabrators = projectCollabrators;
            this.projectEndDate = projectEndDate;
            this.projectStartDate = projectStartDate;
            this.projectId = projectId;
            this.projectName = projectName;
            this.projectFav = projectFav;
        }

    projectId: string;

    projectName: string;

    projectStartDate: Date;

    projectEndDate: Date;

    projectCollabrators: Array<string>;

    projectFav: boolean;
}