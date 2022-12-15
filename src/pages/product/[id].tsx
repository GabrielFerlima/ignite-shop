import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const {query} = useRouter()

    return(
     <ProductContainer>
        <ImageContainer>
          
        </ImageContainer>

        <ProductDetails>
            <h1>Camiseta x</h1>
            <span>R$ 79,98</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam nobis odio id velit corrupti quia magnam in, temporibus molestiae quidem, adipisci aliquid veritatis commodi voluptatibus sequi minima. Possimus, quos?</p>

            <button>
                Comprar agora
            </button>
        </ProductDetails>
     </ProductContainer>
    )
}