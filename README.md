<div align="center">
<img width="200px" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTVjYzA5YWEzNWUwMzQ5NWI5NzEwNTc4MTQ0NzhkNTE1MTg1ODBmMCZjdD1z/CEHtFH3rJ6xdhBUKIT/giphy.gif" >


# Style Dictionary Library 
Este repositório possui uma estrutura base de testes realizados para criação de uma biblioteca de design tokens utilizando o Style Dictionary junto da biblioteca Material-ui para disponibilização de componentes personalizados.

A estrutura base aqui possui 2 exemplos, na raiz da aplicação há as configurações de tokens e construção dos tokens em ts/js para serem reaproveitados nas aplicações. 

Dentro da pasta exemplos é possível ver dois exemplos de aplicação desses tokens gerados com o script de build da aplicação. Estes exemplos contemplam dois tipos diferentes de abordagem. 

O primeiro é `basic-template-usage` que tem a configuração de uma aplicação react typescript simples utilizando vite e material ui. Nela será possível encontrar na pasta Providers um componente que permite utilizar os tokens gerados na raiz no provedor de tema do próprio Material UI, o que permite que com alterações nos tokens e a realização de nova build se tenha retorno visual imediato na aplicação com hot reload.

O segundo é `basic-library-usage` que utiliza da mesma abordagem do anterior, contudo com a exportação de componente como library, possuindo uma pasta examples que contém uma aplicação `basic` que utiliza de referência de seus componentes para a aplicação final.

</div>

----- 
## Pontos não resolvidos ainda:
* Adesão de scripts de build e publicação no NPM
* Testes e pipeline para validação de código 
* Regras de eslint com foco também em validação de usabilidade nos componentes
* Colocação de exemplo de uso do storybook para a *library*
* Storybook para documentação dos tokens do DS



<img width="200px" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjZkM2M5NGQ1Mjk4ZDEyNWExYzhkMDU3MTIwMWEwMGE4OTNhNWU3NyZjdD1n/W9wHF6yVazlrW/giphy.gif" />


___

## Autor:

Paulo H. V. Cândido

* Github: [@paulhenrique](https://github.com/paulhenrique)
* Linkedin: [@paulhenriquev](https://www.linkedin.com/in/paulhenriquev/)



## Referências: 

* https://amzn.github.io/style-dictionary/#/README
* https://didoo.medium.com/measuring-the-impact-of-a-design-system-7f925af090f7
* https://didoo.medium.com/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa

