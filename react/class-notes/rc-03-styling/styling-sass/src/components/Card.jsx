import CardStyle from "../scss/card.module.scss";

const Card = ({ name, job, img, comment }) => {
    return (
        <div className={CardStyle.container}>
            <div className={CardStyle.card}>
                <h1>{name}</h1>
                <h3>{job}</h3>
                <p>{comment}</p>
                <img src={img} alt="user" />
                <div className={CardStyle.buttons}>
                    <button className={CardStyle.small}>Small</button>
                    <button className={CardStyle.large}>Large</button>
                </div>
            </div>
        </div>
    );
};
export default Card;
