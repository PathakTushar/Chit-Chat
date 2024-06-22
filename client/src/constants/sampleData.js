export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "21",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "31",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "41",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "101",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "51",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "61",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "71",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "81",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: [
            "https://www.w3schools.com/howto/img_avatar.png",
            "https://www.w3schools.com/howto/img_avatar.png",
            "https://www.w3schools.com/howto/img_avatar.png",
        ],
        name: "Ravin",
        _id: "2",
        groupChat: true,
        members: ["1", "2"],
    },
];

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "1",
    },
    {
        avatar: [
            "https://www.w3schools.com/howto/img_avatar.png",
            "https://www.w3schools.com/howto/img_avatar.png",
            "https://www.w3schools.com/howto/img_avatar.png",
        ],
        name: "Ravin",
        _id: "2",
    },
];

export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Tushar",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: [
                "https://www.w3schools.com/howto/img_avatar.png",
                "https://www.w3schools.com/howto/img_avatar.png",
                "https://www.w3schools.com/howto/img_avatar.png",
            ],
            name: "Ravin",
        },
        _id: "2",
    },
];

export const sampleMessages = [
    {
        attachments: [
            {
                public_id: "asdf",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "Hi there, how are you doing!!",
        _id: "5",
        sender: {
            _id: "user._id",
            name: "john",
        },
        chat: "chatId",
        createdAt: "2024-03-12T00:00:00.000Z",
    },
    {
        attachments: [
            {
                public_id: "asdf",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "Hi there, how are you doing!!",
        _id: "9",
        sender: {
            _id: "hdasfh",
            name: "john",
        },
        chat: "chatId",
        createdAt: "2024-03-12T00:00:00.000Z",
    },
];

export const dashboardData = {
    users: [
        {
            name: "tushar",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "1",
            username: "tushar",
            friends: 20,
            groups: 5,
        },
        {
            name: "ravin",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "2",
            username: "ravin",
            friends: 20,
            groups: 14,
        },
    ],
    chats: [
        {
            name: "tushar",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members: [{_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"}, {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "ravin",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
        {
            name: "group2",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: false,
            members: [{_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"}, {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "tushar",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
    ],
    messages: [
        {
            attachments: [],
            content: "Hi there, how are you doing!!",
            _id: "5",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "john",
            },
            chat: "chatId",
            groupChat: false,
            createdAt: "2024-03-12T00:00:00.000Z",
        },
        {
            attachments: [
                {
                    public_id: "asdf",
                    url: "https://www.w3schools.com/howto/img_avatar.png",
                },
            ],
            content: "Hi there, how are you doing!!",
            _id: "9",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "john",
            },
            chat: "chatId",
            groupChat: true,
            createdAt: "2024-03-12T00:00:00.000Z",
        },
    ],
};
