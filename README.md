![bandeiras-lgbtqia+](https://i1.wp.com/psicologopauloalencar.com.br/wp-content/uploads/2020/06/LGBTQIA1-1.jpg?fit=600%2C404&ssl=1)


> Banco de dados com leis para a comunidade lgbtqia+ com o intuito de facilitar o acesso aos direitos da população LGBTQIA+. A ideia é propor uma base de conhecimento para que a população LGBTQIA+ ao saber de seus direitos, consigam reinvidica-los.

> Status: **Em andamento** :heavy_check_mark:

## **Sumário**

- [Apresentação](#apresentação)
- [Contextualização](#contextualização)
- [Tecnologias, dependências e bibliotecas](#tecnologias-dependências-e-bibliotecas)
- [Instruções para instalação e contribuições no projeto](#instruções-para-instalação-e-contribuições-no-projeto)
- [Informações adicionais](#informações-adicionais)
- [Referências](#referências)

## **Apresentação**

O projeto "Mãos Dadas" foi desenvolvido para a conclusão do bootcamp de Back-end da [{reprograma}](https://reprograma.com.br/), em parceria com o [Accenture](https://www.accenture.com/br-pt). Essa é uma API que tem por objetivo reunir informações sobre legislações federais e estaduais, separadas por regiões do Brasil, a partir de categorias temáticas.

A ideia é vencer uma das principais barreiras ao conhecimento e ao acesso a esses direitos fundamentais que seria justamente a falta de conhecimento que tais leis existem. A linguagem jurídica também dificulta a compreensão, assim como inúmeras normas, sendo assim, pretende-se reverter esse cenário.

## **Contextualização**

A saúde é um direito garantido por lei na Constituição de 1988. Sendo assim, serviços de saúde públicos e particulares deveriam oferecer atendimento humanizado e igual para todos os indivíduos, porém há o distanciamento da comunidade de Lésbicas, Gays, Bissexuais e Travestis e Transsexuais (LGBT) desse direito e a resultante condução à vulnerabilidade e a ausência da integridade. Portanto, as principais adversidades enfrentadas por essa população são a desinformação, o estigma e a desarticulação da sociedade e políticas públicas condizentes com o cenário de discriminação que ainda atinge os serviços de saúde. Longe disso, há a normatização do direito ao uso do nome social pelos trans, ainda que a prática não seja reflexo da legislação vigente. (Fonte: LIMA, M.D.A.; SOUZA, A.S.; DANTAS, M.F. Os desafios a garantia de direitos da população LGBT no sistema único de saúde (SUS). Revista Interfaces: Saúde, Humanas e Tecnologia, v. 3, n. 11, 2016.)

## **Tecnologias, dependências e bibliotecas**


| Ferramenta      | Descrição                                                    |
| --------------- | ------------------------------------------------------------ |
| `javascript`    | Linguagem de programação                                     |
| `nodejs`        | Ambiente de execução do javascript                           |
| `express`       | Framework NodeJS                                             |
| `dotenv`        | Dependência para proteger dados sensíveis do projeto         |
| `mongoose`      | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections |
| `nodemon`       | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente |
| `npm `          | Gerenciador de pacotes                                       |
| `MongoDb Atlas` | Banco de dado não relacional orietado a documentos em nuvem  |
| `Postman`       | Interface gráfica para realizar os testes                    |


## **Instruções para instalação e contribuições no projeto**

- Faça um `fork` do projeto através do link (<https://github.com/Larissamrs99/projetofinal-reprograma/fork>);

- Copie o código do _fork_ realizado e, no _prompt de comando_ da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma _branch_ para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `8080`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o _commit_ com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo _Pull Request_ com as contribuições para o projeto original.

## **Informações adicionais**

Esta API está sendo escutada na `porta 8080` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:8080/` antes dos endpoints de requisição.

## **Referências**

[{reprograma} - Projeto Final](https://github.com/reprograma/on7-porto-s17-s18-projeto-livre)

[Inspiração: Pretitudes (autoria: @priscilaestevao)](https://github.com/priscilaestevao/pretitudes-project-reprograma)

<hr>

Criado com :black_heart: por **Larissa Maria**

[Linkedin - Larissa Maria](https://www.linkedin.com/in/lmrs99/)

