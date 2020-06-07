export class DemandputDetails{
    skills: string;
    start: string;
    status: string;
    location: string;
    count: number;
    empid: number;
    empName: string
   public scount: number;
    constructor(skills: string, start: string, status: string, location: string, count: number, empid: number,empName: string,scount: number) {
        this.skills = skills;
        this.start = start;
        this.status = status;
        this.location = location;
        this.count = count;
        this.empid = empid;
        this.empName = empName;
        this.scount = scount;
    }

}