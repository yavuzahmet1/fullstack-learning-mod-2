import React from 'react'
// import PropTypes from "prop-types"

function User({ name, surname, isLoggedIn, age, friends }) {
    // console.log(friends[2].id)
    return (
        <>
            <h1>
                {isLoggedIn ? `${name} ${surname} ${age}` : `Not Found a info`}
            </h1>
            {
                friends.map((friend) => (
                    <h3 key={friend.id}>{friend.id}-{friend.name}</h3>
                ))
            }
        </>
    )
}

// User.propTypes = {
//     name: PropTypes.string,
//     surname: PropTypes.string,
//     isLoggedIn: PropTypes.bool,
//     age: PropTypes.number,
//     friends: PropTypes.array,
// };

export default User