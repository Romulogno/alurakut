
// importa o Componente Maingrid
import MainGrid from '../src/components/MainGrid'
// importa o Componente Box
import Box from '../src/components/Box'

import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

//  const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.secondary};
//`

function ProfileSidebar(propriedades){
  return(
    <Box >
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius:'8px'}}></img>
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'romulogno'; // variavel da imagem puxada do github
  const pessoasFavoritas = ['juunegreiros','omariosouto','peas','rafaballerini','marcobrunodev','felipefialho','romulogno']
  return (
  <> 
  <AlurakutMenu/> 
  <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={usuarioAleatorio}/>
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box >
          <h1 className="title">
            Bem vindo(a)
          </h1>
          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="relationArea" style={{gridArea: 'relationArea'}}>
        <Box >
          Comunidades
        </Box>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return(
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`}></img>
                  <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
  </MainGrid>
  </>
  )
}
