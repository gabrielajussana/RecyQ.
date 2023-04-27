import styled from 'styled-components/macro';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex w-full items-center justify-around h-30`}
`;

const Logo = styled.h2`
 ${tw`font-noto-serif text-5xl font-bold text-lime-900`}
 `;

const MenuList = styled.div`
  ${tw`flex gap-10`}
`;

const MenuLink = styled.a`
  ${tw`no-underline text-xl font-semibold hover:cursor-pointer hover:text-lime-800 hover:underline`}
`


export { Container, MenuList, Logo, MenuLink};