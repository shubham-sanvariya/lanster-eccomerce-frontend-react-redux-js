
import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative; // since parent 
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; // this kind of maintains the qulaity of image
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
    position: absolute; // since child
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; // this will show shop now in the next column or in the next line for you 
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    border-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        {/* // using back ticks becuase calling a prop  */}
        <Link to={`/products/${item.cat}`}>
            <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem