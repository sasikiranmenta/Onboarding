export class DemandputDetails{
    skills: string;
    start: string;
    status: string;
    location: string;
    count: number;
    empid: number;
    constructor(skills: string, start: string, status: string, location: string, count: number, empid: number) {
        this.skills = skills;
        this.start = start;
        this.status = status;
        this.location = location;
        this.count = count;
        this.empid = empid;
    }

}