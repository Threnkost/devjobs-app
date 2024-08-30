export type Company = {
    id            : number
    company       : string
    logo          : string
    logoBackground: string
    postedAt      : string
    contract      : string
    location      : string
    website       : string
    apply         : string
    description   : string
    position      : string
    requirements  : { 
        content: string
        items  : Array<string>
    }
    role: {
        content: string
        items  : Array<string>
    }
}