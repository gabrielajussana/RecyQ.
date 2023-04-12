import styled from 'styled-components/macro';
import tw from 'twin.macro';

const Main = styled.div`
${tw`grid grid-cols-2 gap-4 px-8`}
`

const Column = styled.div`
    ${tw`flex flex-col justify-center px-4 gap-y-4`}
`

const Title = styled.h1`
    ${tw`text-5xl text-lime-900	`}
`
export { Main, Column, Title};