const getOtherMember = (members, userId) => {
    return members.find(mem => mem.toString() !== userId.toString())
}

export {getOtherMember}