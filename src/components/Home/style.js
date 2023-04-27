import styled from 'styled-components/macro';
import tw from 'twin.macro';

const Main = styled.div`
${tw`grid grid-cols-2 gap-4 h-98`}
`

const Column = styled.div`
    ${tw`flex flex-col justify-center px-10`}
`

const Title = styled.h1`
    ${tw`text-5xl text-lime-900	leading-tight`}
`
const Text = styled.p`
    ${tw`text-base font-medium`}
`

export { Main, Column, Title, Text};