# EgoStream
Welcome to EgoStream! This application is designed to offer a streamlined and efficient way to watch movie trailers. While it functions similarly to Netflix in terms of user interface and experience, EgoStream focuses exclusively on providing high-quality trailers rather than full-length movies.

## Table of contents
* Introduction
* Features
* Usage
* Challenges
* How to run this project
* Technologies used
* Live Demo
* contributions
* License

# Introduction
EgoStream is an innovative web application created to enhance your movie-watching experience by giving you easy access to the latest and most popular movie trailers. Whether you're looking for the next blockbuster to watch or just want to stay updated on upcoming releases, EgoStream is your go-to platform.

# Features

#### User-Friendly
* **React & Tailwind** : Built with React for a dynamic user experience and styled with Tailwind CSS for a clean, modern look.
* **Responsive Design** : Optimized for viewing on all devices, ensuring a seamless experience whether you're on a desktop, tablet, or mobile phone.

#### Extensive Trailer Library
* **The Movie Database (TMDB) Trailer Library** :  Utilizes The Movie Database (TMDB) API to fetch a wide array of movie trailers. Enjoy access to the latest and most popular trailers across various genres and categories.

#### Personalized User experience
* **Firebase Authentication** : Users can easily sign up and log in using Firebase Authentication.
* **Favourite Movies** : Logged-in users can add movies to their list of favorites. This feature allows you to keep track of the trailers that interest you the most.
* **User Profiles** : Store your favorite movies on your profile, making it easy to access and manage your list of top picks.

#### Seamless Integration
* **Firebase Database** : Uses Firebase Realtime Database to store user information and favorite movies. This ensures that your data is always up-to-date and easily accessible.
* **Real-Time Updates** : Enjoy real-time updates to your profile and favorite movies list, thanks to the robust integration with Firebase.

#### Easy Navigation
* **Intuitive Navigation** : Effortlessly browse through different movie categories and genres. The intuitive navigation helps you find trailers quickly and efficiently.

# Usage
When you first interact with the landing page, you will see various movies displayed with "Play" and "Watch Later" buttons.
* **Play Button** : Clicking on the "Play" button will redirect you to the trailer page for the movie displayed in the hero section, allowing you to enjoy the trailer.
* **Watch Later Button** : If you click on the "Watch Later" button and are not logged in, you will be redirected to the login page. If you do not have an account, you can click on the "Sign Up" button on the login form to create one.

Once logged in, you can save your favorite movie trailers to your profile and access them anytime. You will have various movies to choose from, and you can add your favorite movie trailers to your profile by selecting your favorite movie and clicking on the heart icon.

# Challenges
**Creating Netflix-like Sliders**
One of the primary challenges I encountered while developing EgoStream was creating sliders similar to those found on the Netflix application. As this was my first time implementing such sliders, I aimed to replicate the look and feel of Netflix's seamless and intuitive slider functionality.

**Solution: Tailwind Scroll Hide**
To achieve this, I utilized the tailwind-scroll-hide dependency. This dependency simplifies the process of hiding the default scrollbar while preserving the scroll functionality, providing a cleaner and more visually appealing slider experience.

**How It Works**
The tailwind-scroll-hide dependency works by adding utility classes that hide the scrollbar. This allows you to create horizontal and vertical sliders without the distraction of the default scrollbar, resulting in a smoother and more polished user interface.

# How To Run The project
1. **Clone the repository**: Clone this repository to your local machine using the following command:
```
 git Clone https://github.com/LesegoLSG/Netflix_Project.git
```
2. **Import project** : After cloning, import the cloned project to your preferred IDE (I used visual studio to develop this project).
3. **Navigate to the project directory:** : Now make sure you are on the 'Netflixproject' directory.
````
cd Netflixproject
````
4. **Install dependencies** : This project makes use of Node js.
````
npm install or yarn install
````
5. **Start the server** :Start the server using the following command:
```
npm run dev
```

## Live demo
```
Link to live demo: https://netflixproject-b30bf.web.app/
```
# Technologies Used
1. Html & classes
2. React Js
3. Tailwind classes
4. Firebase (For Authentication, storage and hosting)
5. The Movie Database API's

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch ( **git checkout -b feature** )
3. Make your changes and commit them (**git commit -am 'Add new feature'**)
4. Push to the branch (**git push origin feature**)
5. Create a pull request

# License
This project is a personal portfolio project and is not intended for commercial use or distribution. All rights reserved by the author.
