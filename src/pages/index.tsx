import styled, { css } from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main.color};
  ${({ theme }) =>
    css`
      ${theme.typographyVariants.title}
    `}
`;

export default function Home() {
  return <Title>My page</Title>;
}
