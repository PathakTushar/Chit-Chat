export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tushar",
        _id: "1",
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
            }
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
            }
        ],
        content: "Hi there, how are you doing!!",
        _id: "9",
        sender: {
            _id: "hdasfh",
            name: "john",
        },
        chat: "chatId",
        createdAt: "2024-03-12T00:00:00.000Z",
    }
]
