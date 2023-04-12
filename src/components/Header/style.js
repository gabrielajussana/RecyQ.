import styled from 'styled-components/macro';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex items-center justify-around`}
`;

const Logo = styled.h2`
 ${tw`font-noto-serif text-2xl font-bold text-lime-900`}
 `;

const MenuList = styled.div`
  ${tw`flex gap-10`}
`;



export { Container, MenuList, Logo};