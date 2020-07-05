import * as S from './styles'

interface Props {
  title?: string
  description?: string
}

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}: Props) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logomarca do site" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a uma tela com código"
    />
  </S.Wrapper>
)

export default Main
