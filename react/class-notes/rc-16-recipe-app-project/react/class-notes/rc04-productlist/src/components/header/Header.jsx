
import HeaederStyle from "./Header.module.scss"

const Header = ({categories,title}) =>{

//    console.log(categories)
    return(
        <div className={HeaederStyle.header}>
            <h1>{title}</h1>
            <div className={HeaederStyle.btn}>
                {
                  categories.map((item, index)=>(
                    <button key={index} >{item}</button>
                  ))  
                }
            </div>
        </div>
    )
}

export default Header