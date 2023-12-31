# Kanban Restaurant
<a name="readme-top"></a>

<div align="center">
  <img src="./porag-logo.png" alt="logo" width="140"  height="auto" />
  <br/>
  <h3><b>Kanban Restaurant</b></h3>
  <h5>The **Kanban Restaurant** is a JavaScript capstone project: A fancy web application based on 2 external APIs with 3 user interfaces that shows food items and have the option to like, comment and order those items. The project is implemented following GitFlow using HTML, CSS, modular JS. Webpack is used as bundler and Jest for Unit testing.<h5>
</div>


# 📗 Table of Contents

- [Kanban Restaurant](#kanban-restaurant)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Kanban Restaurant](#-kanban-restaurant)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [To add dependencies and run linter tests](#to-add-dependencies-and-run-linter-tests)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
    - [Authors](#authors)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)


# 📖 Kanban Restaurant<a name="about-project"></a>

This project **Kanban Restaurant** is a project that demonstrates the use of **HTML & CSS and Javascript Moduler development**.

With External **API consumption**, it also demonstrates the proper use of **Async and Await** to send and receive **data**.

Built using **WEBPACK** following **GitFlow** it is  very simple yet powerful project served by **WEBPACK DEV SERVER** . Along with dynamic modification of the DOM with Events including all the coding best practices. 

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>

   <ul>
    <li>webpack</li>
  </ul>
</details>
  
  <!-- - **WEBPACK BASICS HIGHLIGHTS**
   <img src="./WebpackBasicByPorag.png" alt="webpack basics config highlights" width="auto"  height="auto" /> -->
 

<details>
  <summary>Server</summary>
  <ul>
    <li>Local webpack dev server</li>
    <li>Optionally can be Deployed Using GitHub Pages</li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li>N/A</li>
  </ul>
</details>

### Key Features <a name="key-features"></a>
- **Use of callbacks and promises.**
- **Use of async and await.**
- **Use proper ES6 syntax and ES6 modules to write modular JavaScript.**


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

> Please follow the link for a live demo.

- [The Kanban Restaurant]([https://github.com/porag-m06/Kanban-Restaurant](https://porag-m06.github.io/Kanban-Restaurant/dist/))

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- Git.
- An IDE (e.g. VS Code)
- Browser to run. 

### Setup

Clone this repository to your desired folder:
 - Using Git Bash or any integrated terminal of you choice.
 - Open with code editor (e.g. VS Code).
 - Open the index.html file using any local server (e.g. live server extension in VS Code)

### Usage

To run the project, execute the following command:
- Open the index.html file on a local server on your browser. 

### To add dependencies and run linter tests 

Follow the following:

**************
Initial Step:
**************
- mkdir .github/workflows
- copy the **linters.yml** file to the directory created above.
- touch .gitignore if not created already and add **node_modules/** to it.
- initialize npm to create package.json file by running the command: 
> $ npm i -y      

(here i for install & -y for saying yes to all)

*************
For Webpack:
*************
- To install **Webpack and Webpack CLI**:
> $ npm install webpack webpack-cli --save-dev

- To optaionally install a JS library as an example (e.g. **Lodash**)
> $ npm install --save lodash (optional)

- To install the **HtmlWebpackPlugin** plugin.
> $ npm install --save-dev html-webpack-plugin

- To install **style-loader and css-loader** 
> $ npm install --save-dev style-loader css-loader

- To install the **webpack-dev-server** as a dev dependency (to use live reloading)
> $ npm install --save-dev webpack-dev-server

- List of the commands to run the build (with all the alternatives).

To build and run with the webpack dev server:
> $ npm start

(Will be served at: http://localhost:8080/)

- To build only :
> $ npm run build

(and then may be served using a local server e. g. Live Server in VS Code)

- (Optional Alternatives)
> $ npm run webpack or, $ npm run webpack --mode production

> $ npx webpack

> $ npx webpack --mode production

> $ npx webpack --config webpack.config.js

************************
For Webhint (optional):
************************
- Run
> npm install --save-dev hint@7.x
- To fix validation errors run: 
> npx hint .

**************
For Stylelint
**************
- Run 
> npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
- Copy **.stylelintrc.json** to the root directory of your project.

- Run 
> npx stylelint "**/*.{css,scss}" 
on the root of your directory of your project.
- Fix linter errors.

*******
ESLint
*******
- Run 
> npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
- Copy **.eslintrc.json** to the root directory of your project.

- Run 
> npx eslint .  
on the root of your directory of your project.
- Fix linter errors.

### Deployment
You can deploy this project using:
- GitHub Pages for the main branch. A deployed version can be found here:
https://...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="authors"></a>

> Developed by: 

### Authors
- GitHub: [@porag-m06](https://github.com/porag-m06)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/muhammad-porag-nsu-cse/)

 GitHub: [ghermaico135](https://github.com/ghermaico135)
- Twitter: [@Mikidarling3](https://twitter.com/@Mikidarling3)
- LinkedIn: [Michael okbamichael](https://www.linkedin.com/in/michael-okbamichael-966106263/)

 GitHub: [maryam0007](https://github.com/maryam0007)
- Twitter: [@maryam5905](https://twitter.com/maryam5905)
- LinkedIn: [Maryam Bakhtawar](https://www.linkedin.com/in/maryam-bakhtawar-516603267/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Improve Aesthetics & Design**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/porag-m06/Porag-s-Awesome-Leaderboard/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

As a tech enthusiast, your support is always appreciated. If you like this project please do let me know with your support in any way you see fit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>
I would like to thank  [Microverse](https://github.com/microverseinc) for this project & project guidelines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>
- **Can I fork this project?**
  - Yes, feel free to fork and knock yourself out :) . 

- **Can I share this project with others?**
  - Yes, you can share this project for any educational purposes. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 📝 License <a name="license"></a>
This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
