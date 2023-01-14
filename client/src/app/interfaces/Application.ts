export interface Application {
    _id: string
    companyName: string
    position: string
    location: string
    jobNature: string
    employmentType: string
    salary: number
    details: string
    appliedDate?: Date
    interviewDate: Date
    status: string
    jobLink: string
    user : string
}