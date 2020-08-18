export class UserDet {
    
    userName: string;
    userEmail: string;
    userId: string;
    userDetails: string;
    userIssues: string;

    public setUserName(userName: string) {
        this.userName = userName;
    }

    public setUserEmail(userEmail: string) {
        this.userEmail = userEmail;
    }

    public setUserId(userId: string) {
        this.userId = userId;
    }

    public setUserDetails(userDetails: string) {
        this.userDetails = userDetails;
    }

    public setUserIssues(userIssues: string) {
        this.userIssues = userIssues;
    }

    public getUserId(): string{
        return this.userId;
    }

    public getUserName(): string{
        return this.userName;
    }

    public getUserEmail(): string{
        return this.userEmail;
    }

}