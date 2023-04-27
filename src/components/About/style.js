import styled from 'styled-components/macro';
import tw from 'twin.macro';

const Main = styled.div`
    ${tw`flex flex-row justify-center px-10 py-4 items-center bg-lime-100`}
`

const Column = styled.div`
    ${tw`flex flex-col items-center justify-center px-6`}
`

const Title = styled.h1`
    ${tw`text-4xl text-lime-900	leading-tight`}
`
const Text = styled.p`
    ${tw`text-base  font-medium text-center`}
`

export { Main, Column, Title, Text};