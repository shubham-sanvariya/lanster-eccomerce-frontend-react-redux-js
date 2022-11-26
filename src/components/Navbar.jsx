import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    align-items: center;
    display: flex; // for horizontal
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;
 
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end; // at the end of the flex box
  ${mobile({ flex:2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", margineLeft: "10px" })}

`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer; // is used for hand index finger sign
  ${mobile({display: "none" })}
`;

const SerachContiner = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
  border: none;
`;



const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <Container>
        <Wrapper>
          <Left>
          <Language>EN</Language>
          <SerachContiner>
          <Input placeholder='Search' />
          <Search style={{color: "gray", fontSize:16 }} /> 
          </SerachContiner>
          </Left>
          <Center>
          <Logo>LANSTERS.</Logo>
          </Center>
          <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
          <MenuItem>
           <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
           </Badge>
          </MenuItem>
          </Link>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar