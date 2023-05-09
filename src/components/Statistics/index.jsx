import styled from '../Statistics/style.module.css'


export default function Statistics(props) {


    return (
        <section className={styled.statistics}>
            {/* if conditionm do this, else do that */}
            {/* condition ? do this : else do that */}
            {/* && and = if true, render this*/}
            {/* condition && do this */}
            {props.title ? <h2 className={styled.title}>{props.title} Today</h2> : <></>}
            <ul className={styled.stats}>
                    {props.stats.map(stat => (
                        <>
                        <li key={stat.id} className={styled.item}>
                            <span className={styled.label}>{stat.label}</span>
                            <span className={styled.percentage}>{stat.percentage}</span>
                        </li>
                        </>
                    ))}
            </ul>
        </section>
    )
}