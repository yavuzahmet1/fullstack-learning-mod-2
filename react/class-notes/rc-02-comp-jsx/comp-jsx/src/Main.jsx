import "./Main.css";
import sunset from "./images/light.webp"


const headerStyle = {
    color: "teal",
    backgroundColor: "lightGray",
    fontWeight: "bold"
}

const Main = () => {
    return (
        <main>
            <h2 style={
                {
                    color: "red",
                    backgroundColor: "gray"
                }
            }>
                Main Section
            </h2>
            <h3 style={headerStyle}>Other Header</h3>
            <p className="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam facilis quia ab dolorem molestiae eum perspiciatis, facere nostrum illum impedit accusantium dignissimos quisquam natus numquam nemo vero necessitatibus reprehenderit libero laborum? Earum modi ut porro explicabo quibusdam similique numquam pariatur eaque exercitationem facere dignissimos atque sed quasi, est nihil assumenda.</p>
            <p className="par2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quisquam officiis esse nemo? Quasi ullam commodi corporis similique recusandae nisi ex doloremque voluptate quaerat cupiditate sed sint, laborum vero laboriosam eius culpa inventore aperiam eos eligendi reprehenderit rerum totam dolor doloribus! Nihil nisi officia, iusto necessitatibus est, omnis deserunt debitis, error iste quas eligendi voluptatum delectus. Labore, esse suscipit exercitationem, velit numquam magnam nam accusantium hic doloremque non, blanditiis totam iste aspernatur optio reprehenderit. Quidem ipsa quaerat mollitia fuga autem ab dolorem voluptate. Animi eos cumque dolorem corporis recusandae quis, provident enim perspiciatis possimus obcaecati, non laborum ipsum similique quas.</p>
            <img className="img" src="https://cdn.pixabay.com/photo/2020/12/05/15/55/christmas-tree-5806329_1280.jpg" alt="imag" />
            <img className="img" src={sunset} alt="" />
            <img className="img" src="./leaf.jpg" alt="" />
        </main>

    )
}

export default Main