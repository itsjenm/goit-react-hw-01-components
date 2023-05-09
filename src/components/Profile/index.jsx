import styled from './style.module.css'

export default function Profile(props) {
    // console.log(props)
    return (
        <div className={styled.profile}>
           <div className={styled.description}>
            <img src={props.data.avatar} alt="User avatar" className={styled.avatar}/>
            <p className={styled.name}>{props.data.username}</p>
            <p className={styled.tag}>{props.data.tag}</p>
            <p className={styled.location}>{props.data.location}</p>
           </div>
           <ul className={styled.stats}>
                <li className={styled.list}>
                    <span className='label'>Followers</span>
                    <span className={styled.quantity}>{props.data.stats.followers}</span>
                </li>
                <li className={styled.list}>
                    <span className='label'>Views</span>
                    <span className={styled.quantity}>{props.data.stats.views}</span>
                </li>
                <li className={styled.list}>
                    <span className='label'>Likes</span>
                    <span className={styled.quantity}>{props.data.stats.likes}</span>
                </li>
           </ul>
        </div>
    )
}