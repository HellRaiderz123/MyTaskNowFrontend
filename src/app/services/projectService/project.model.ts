export class Project {

    constructor(
        projectId: string, 
        projectName: string, 
        projectStartDate: Date,
        projectEndDate: Date,
        projectCollabrators: Array<string>) {
            this.projectCollabrators = projectCollabrators;
            this.projectEndDate = projectEndDate;
            this.projectStartDate = projectStartDate;
            this.projectId = projectId;
            this.projectName = projectName;
        }

    projectId: string;

    projectName: string;

    projectStartDate: Date;

    projectEndDate: Date;

    projectCollabrators: Array<string>;
}