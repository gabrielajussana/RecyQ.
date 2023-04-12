import styled from 'styled-components/macro';
import tw from 'twin.macro';


const Button = styled.button`
    ${tw`max-w-xs h-9 bg-lime-700 text-center px-8 py-2  rounded border-none drop-shadow-xl`}
`;
const Name = styled.span`
    ${tw`font-semibold text-white text-white`}
`;
export { Button, Name };