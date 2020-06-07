export class DemandDetails {
    demandid: number;
    skills: string;
    start: string;
    status: string;
    location: string;
   public count: number;
    empid: number;
    empName: string;
   public scount: number;
    constructor(demandid: number, skills: string, start: string, status: string, location: string, count: number, empid: number,empName: string,scount: number) {
        this.demandid = demandid;
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