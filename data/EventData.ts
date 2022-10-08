interface eventDataType{
    name:string,
    description:string,
    date:string,
    startTime:string,
    link:string
}
export const EVENT_DATA:eventDataType[] = [
    {
        name:'Opening Ceremony',
        description:'Come and join us in the opening ceremony and get complete details about the event.',
        date:'9 oct 2022',
        startTime:'09:30 am',
        link:'https://iter.hackclub.com/register',
    },
    {
        name:'Git & GitHub',
        description:'Know about how to contribute to open-sourced projects through GitHub.',
        date:'TBD',
        startTime:'TBD',
        link:'https://iter.hackclub.com/register',
    },
    {
        name:'What is Hacktoberfest?',
        description:'Learn more about Hacktoberfest and how to create PRs.',
        date:'TBD',
        startTime:'TBD',
        link:'https://iter.hackclub.com/register',
    },
]