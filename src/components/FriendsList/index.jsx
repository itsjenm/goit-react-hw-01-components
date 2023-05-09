import styled from './style.module.css'


export default function FriendsList(props) {
    // console.log(props)
    return (
        <ul className={styled.list}>
            {props.friends.map(friend => (
                <li key={friend.id} className={styled.item}>
                    {friend.isOnline ? <span className={styled.status_online}></span> : <span className={styled.status_offline}></span>}
                    <img className={styled.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={styled.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    )

}