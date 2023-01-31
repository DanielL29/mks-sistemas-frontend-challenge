<div align="center">
    <img src="https://user-images.githubusercontent.com/80372095/215819712-08251aba-9aed-4001-bee5-b31f03408631.png" />
</div>

  <div align="center">
    <br />
    MKS Sistemas Frontend Challenge
    <br />
  </div>
  <div align="center">
    SSR application of a simple e-commerce, add products to a cart and finish purchase
    <br />
  </div>
</div>

<div align="center">
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" height="30px" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" height="30px" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="30px" />

  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<div align="center" style="margin-top: 50px">
    <h1> Project Guide</h1>
</div>

<h3>The project has only one homepage. When it starts, the products that came from the mks api are shown</h3>

<img src="https://user-images.githubusercontent.com/80372095/215824810-9e23e2c7-a456-413f-914e-556e4f7029da.png" />

<h3>The product component has two states, it stays in a loading skeleton until gets the data from api and after received, shows the content.</h3>

<div align="center">
  <img src="https://user-images.githubusercontent.com/80372095/215827864-b60b8822-bb0a-478d-9bfc-622bb9b0ca3e.png" />
  <img src="https://user-images.githubusercontent.com/80372095/215827899-7f56afdf-1a7b-4d48-aab4-445ec3c88525.png" />
</div>

<h3>Clicking in "COMPRAR" button in the product component, the cart updates and it value change. The cart content is saved on localStorage until it purchase get finished</h3>

<div align="center">
  <image src="https://user-images.githubusercontent.com/80372095/215829383-1883f468-0aca-44a8-8bcb-ee46cc4be639.png" />
</div>

<h3>Opening the cart the products are there, in the cart it's possible to do: </h3>
<li>Close the cart clicking in other part of screen or clicking in close icon </li>
<li>Increment or decrement product quantity</li>
<li>Remove a product of cart</li>
<li>See the amount value changing</li>
<li>Finish purchase</li>

<h3>Also, all the functionalities of app are shown in the video below: </h3>

https://user-images.githubusercontent.com/80372095/215836395-d68606d7-00c5-4756-8b20-c78289f7d3b0.mp4

<div align="center">
  <h1>Installing and using the project</h1>
</div>

<h3>First of all the project is working in the following deploy link at vercel: https://mks-sistemas-frontend-challenge.vercel.app</h3>

<h3>But to use in a local machine follow the steps. To install and use the project download the zip or clone the repository, to download the zip go to the CODE and click in Download ZIP or use the commands below in the terminal to clone the project: </H3>

SSH

```
  git clone git@github.com:DanielL29/mks-sistemas-frontend-challenge.git
```

or

HTTPS

```
  git clone https://github.com/DanielL29/mks-sistemas-frontend-challenge.git
```

<h3>After take the repo install the libraries, execute this command in terminal: </h3>

```
  npm i
```

<h3>And to finish the installation create the .env file to set the env variables of project, the variables can also be found in .env.example with it value already filled</h3>

```
  NEXT_PUBLIC_BASE_API_URL=https://mks-challenge-api-frontend.herokuapp.com/api/v1
```

<h3>Now, its time to run the project, it will run in localhost at the port 3000, so, use the follow command in the terminal to get started:</h3>

```
  npm run dev
```

<h3>And to see the tests of app, just have to run: </h3>

```
  npm run test
```

## Applied Skills

- API consumption
- TypeScript interfaces
- TypeScript types
- Redux Toolkit
- React Hooks
- Styled-components
- Flexbox/Grid
- Clean code
- Jest
- Testing Libraries
- Unit Tests
- Local Storage

## Author

- Daniel Lucas Ederli
