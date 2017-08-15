function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return (yourLeft === friendsLeft && yourRight === friendsRight)
    || (yourLeft === friendsRight && yourRight === friendsLeft)
}
