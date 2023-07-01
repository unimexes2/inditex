# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Short description

I developed the project from scratch without using any pre-existing template. The project utilizes Redux to store the fetched data and also makes use of local storage. I aimed to follow the technical documentation as closely as possible to ensure proper implementation. Additionally, I addressed any design concerns by making necessary adjustments myself.

Also, even though it was not originally specified in the documentation, I have made the app 100% responsive. This means that the application automatically adjusts and adapts to different screen sizes, ensuring an optimal experience on both mobile devices and tablets.

# Deploy

It is avalible at

http://65.109.137.184:3005/ 


# IMPORTANT

Sometimes, when application attempts to fetch data for podcast details, you may notice a slight delay . This is a normal behavior caused by the CORS (Cross-Origin Resource Sharing) policy when interacting with an external service.

# The folder structure of the application is organized as follows:

"Layout": This folder contains the components related to the application layout, such as the main layout component.

"css": This folder holds the CSS files for styling the application.

"context": This folder includes the Redux store and related files for managing application state.

"pages": This folder contains the user views or pages of the application. Each page typically has its own folder with associated components, styles, and logic.

"router": This folder handles the app navigation and contains the routing configuration files.

"api": This folder houses the files responsible for making API calls to external services.

"helpers": This folder consists of utility functions or helper functions that can be used across the application.

The main executable file, "index.js", is the entry point of the application where the app is initialized and rendered.

This folder structure helps organize the codebase and separates different concerns for easier development and maintenance of the application.

# local environment

The application utilizes separate .env files for local environment configurations, distinguishing between production and development environments.

The .env files are used to store environment variables specific to each environment. There are separate .env.production and .env.development files for the production and development environments, respectively.

The purpose of these files is to provide a convenient way to manage environment-specific configurations without hardcoding values directly into the code. Environment variables can include things like API keys, database URLs, or any other configuration values that might differ between environments.

By using separate .env files, the application can easily switch between production and development environments by loading the appropriate file based on the build or runtime environment.

This approach allows for better flexibility and maintainability of the application, as it separates the environment-specific configurations from the codebase and provides an easy way to manage different configurations for different environments.

# Set up

To install and set up the application, it is required to have Node.js version 16 or higher installed on your computer. Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser.

Once you have Node.js installed, you can initialize the application by running the command npm install in your terminal. This command will install all the necessary dependencies listed in the package.json file.

After the installation is complete, you can run one of the scripts mentioned in the following section to start the application or perform other tasks. The available scripts can include commands like npm start to run the application in development mode, npm build to build the production-ready version of the application, or other custom scripts defined in the package.json file.

Running these scripts will execute the specified commands, such as starting a local development server, building the application, running tests, or performing other predefined tasks based on your project configuration.

Make sure to consult the project documentation or README file for specific instructions on which scripts are available and how to use them in your particular application setup.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
