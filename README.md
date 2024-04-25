<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  
![logo](https://github.com/MatheusAquatico/Grocery_Store/assets/43749592/fa1c383a-9139-4f91-8f84-0ff9bc119981)

  <h3 align="center">Grocery Store</h3>

  <p align="center">
    A payment system for a nearby grocery store.
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The goal of this project was to develop a full-stack application that consumes a Wiremock, handles the contents, displays them on the screen, and manages operations to manipulate the data.

This project can:

* Request the list of products and display them on the screen.
* Allow users to see if there is a promotion to apply.
* Add and remove items from the cart.
* Show the number of items in the cart.
* Display the checkout, showing the subtotal, savings, and total.

This project was developed to adjust the layout for both computers and smartphones. Try it out!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


<div style="display: inline_block"><br>
 <img align="center" alt="Java" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg">
  <img align="center" alt="Spring" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg">
  <img align="center" alt="Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
</div>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

It is possible to run this project on your machine. Here's how:

### Prerequisites

To run the project locally, you must first set up your favorite IDE to run Java with Maven.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MatheusAquatico/Grocery_Store.git
   ```
2. Go to `mock-api/wiremock` and run the Wiremock using the start.sh
3. Go to `Grocery_Store_API/grocery_store` and install the dependencies of the Java project
4. Run the Java project
5. Go to `Grocery_Store_Front/grocery_store_front` and install NPM packages
   ```sh
   npm install
   ```
6. Configure the proxy in `vite.config.ts`
   ```js
   export default defineConfig({
      server: {
        proxy: {
          '/api': 'http://localhost:8080/'
        }
      },
      plugins: [react()],
    })
   ```
7. Run the React project with vite
    ```
      npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Features:

* List products:
  
![Grocery-Store-Google-Chrome-2024-04-25-20-15-27](https://github.com/MatheusAquatico/Grocery_Store/assets/43749592/ae7b96db-9106-4058-855c-74cf9c2f1508)

* Add and remove items from the cart:
  
![addRemove](https://github.com/MatheusAquatico/Grocery_Store/assets/43749592/25c9afd6-100b-4a3b-860d-e08fa80ac1a7)

* Check and add promotion:
  
![promotion](https://github.com/MatheusAquatico/Grocery_Store/assets/43749592/29d0e157-7a9f-4744-b18f-54a3eb2c790f)

* Go to checkout:
  
![checkout](https://github.com/MatheusAquatico/Grocery_Store/assets/43749592/774fe584-34de-4c0b-9320-1a46b91bfde5)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Matheus Marinho - mmml2@cin.ufpe.br

Project Link: [https://github.com/MatheusAquatico/Grocery_Store](https://github.com/MatheusAquatico/Grocery_Store)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Java.io]: [https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
[Java-url]: https://www.java.com
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
