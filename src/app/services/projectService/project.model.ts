export class Project {

    constructor(
        projectId: string, 
        projectName: string, 
        projectType: string,
        projectPriority: string,
        projectDescription: string,
        projectOwner: string,
        projectCreatedBy: string,
        projectStartTime: string,
        projectEndTime: string,
        projectDuration: string,
        projectStatus: string,
        projectPhases: Array<string>,
        projectCollabrators: Array<string>,
        projectFav: boolean) 
        {}
}