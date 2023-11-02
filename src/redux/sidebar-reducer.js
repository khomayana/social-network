let initialState = {
    friendsData: [
        { id: 1, name: 'Taylor', link: "https://as2.ftcdn.net/v2/jpg/02/95/06/79/1000_F_295067932_x7oZygYQwtXwnPm1ft5aGf3iZltAGZB4.jpg" },
        { id: 2, name: 'Mira', link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsphtyprjy1ud4YyV_WRpr3nbuoaSy2My1yd2ffVRWWm1ZxvchMOc9o0PTWqGD9melDCc&usqp=CAU" },
        { id: 3, name: 'Tom', link: "https://media.istockphoto.com/id/1227618769/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=pBMC1If8XkbJnBRYR9JLC9gsPdJDCq0bSZXDzm6zB2w=" }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;