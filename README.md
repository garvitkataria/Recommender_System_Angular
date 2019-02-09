# RecommendationSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Setup

1. Install Dependencies though package.json

           npm install package.json

2. Run the server

            ng serve


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## DEMO
1. <h5>Step 1</h5>
Enter your email and Phone no. to get started.

![alt text](https://github.com/garvitkataria/Recommender_System_Django/blob/master/Demo_Images/step1.png)

2. <h5>Step 2</h5>
Rate atleast 10 movies to unlock recommendation feature button.

![alt text](https://github.com/garvitkataria/Recommender_System_Django/blob/master/Demo_Images/step2.png)

3. <h5>Step 3</h5>
You can check the movie recommendations by these 3 Algorithms.
<ul>
<li> Item-Item Collaborative Filtering</li>
<li> User-User Collaborative Filtering</li>
<li> Single Value Decomposition</li>
</ul>

4. <h5>Step 4</h5>
Click on finish button to go back to the welcome page.

![alt text](https://github.com/garvitkataria/Recommender_System_Django/blob/master/Demo_Images/step3.png)

## Directory Structure (of src directory)

├── app
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── customer-dashboard
│   │   └── customer-dashboard.module.ts
│   ├── data.service.spec.ts
│   ├── data.service.ts
│   ├── movie
│   │   ├── movie.component.css
│   │   ├── movie.component.html
│   │   ├── movie.component.spec.ts
│   │   └── movie.component.ts
│   ├── recommendation
│   │   ├── recommendation.component.css
│   │   ├── recommendation.component.html
│   │   ├── recommendation.component.spec.ts
│   │   └── recommendation.component.ts
│   └── welcome
│       ├── welcome.component.css
│       ├── welcome.component.html
│       ├── welcome.component.spec.ts
│       └── welcome.component.ts
├── assets
├── browserslist
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── karma.conf.js
├── main.ts
├── polyfills.ts
├── styles.css
├── test.ts
├── tsconfig.app.json
├── tsconfig.spec.json
└── tslint.json
