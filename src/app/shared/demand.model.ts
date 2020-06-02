export class DemandDetails {
    demandid: number;
    skills: string;
    start: string;
    status: string;
    location: string;
    count: number;
    empid: number;
    constructor(demandid: number, skills: string, start: string, status: string, location: string, count: number, empid: number) {
        this.demandid = demandid;
        this.skills = skills;
        this.start = start;
        this.status = status;
        this.location = location;
        this.count = count;
        this.empid = empid;
    }


}