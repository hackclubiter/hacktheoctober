interface eventDataType{
    name:String,
    description:String,
    startTime:String,
    endTime:String,
    link:String
}
export const EVENT_DATA:eventDataType[] = [
    {
        name:'Opening Ceremony',
        description:'Opening Ceremony of Hack the October.🚀',
        startTime:'oct 1, 2022',
        endTime:'07:00 pm ist',
        link:'#',
    },
    {
        name:'Git & GitHub',
        description:'Know about how to contribute to open-sourced projects through GitHub.',
        startTime:'oct 6, 2022',
        endTime:'07:00 pm ist',
        link:'#',
    },
    {
        name:'What is Hacktoberfest?',
        description:'Learn more about Hacktoberfest and how to create PRs.',
        startTime:'oct 16, 2022',
        endTime:'07:00 pm ist',
        link:'#',
    },
]