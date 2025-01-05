function Course({ course }) {
    const { title, description, price, link, image } = course;
    return (
        <div className='course'>
            <img src={image} width={220} height={110} alt="img" />
            <h4 className='course-title'>{title}</h4>
            <p className='course-desc'>{description}</p>
            <h3 className='course-price'>{price} ₺</h3>
            <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>satın almak için</a></div>

        </div>
    )
}

export default Course