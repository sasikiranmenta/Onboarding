
export class GradPutDetails{
    demandId: number;
    name: string;
    email: string;
    college: string;
    cgpa: number;
    personalNumber: number;
    permanentAddress: string;
    presentAddress: string;
    location: string;
    onboardingStart: string;
    eta: string;
    bgvCheck: string;
    onboardingStatus: string;
    skills: string
    constructor(demandId: number, name: string, email: string, college: string, cgpa: number, personalNumber: number,
                permanentAddress: string, presentAddress: string, location: string, onboardingStart: string, eta: string,
                bgvCheck: string, onboardingStatus: string,skills: string ){
                    this.demandId = demandId;
                    this.name = name;
                    this.email = email;
                    this.college = college;
                    this.cgpa = cgpa;
                    this.personalNumber = personalNumber;
                    this.permanentAddress = permanentAddress;
                    this.presentAddress = presentAddress;
                    this.location = location;
                    this.onboardingStart = onboardingStart;
                    this.eta = eta;
                    this.bgvCheck = bgvCheck;
                    this.onboardingStatus = onboardingStatus;
                    this.skills = skills;

                }
}
