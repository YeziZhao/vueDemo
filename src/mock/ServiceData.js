const list = [
    {
        id:1,
        value:'one app win'
    },
    {
        id:2,
        value:'one app mac'
    },
    {
        id:3,
        value:'one app webtalk'
    },
    {
        id:4,
        value:'one app screenshare'
    },
    {
        id:5,
        value:'one app office driver win'
    },
    {
        id:6,
        value:'one app office driver mac'
    },
    {
        id:7,
        value:'web service'
    }
    ];
export default {
    list: config => {
        console.log(list);
        return list;
    }
};