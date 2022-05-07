# catinder
# Directories structure

This project has been configured to use TypeScript and to get the best organization possible the `catinder` project contains the following directories:
[`components`](./components):

> Where are the codes referring to visual components.

[`src/hooks`](./src/hooks).

> In this directory is present the custom Hook useTheCat. Its use is a practical example of separation of responsibilities. In this project useTheCat is responsible for controlling the request for new products and paging.

>  On larger projects a custom Hook may have more responsibility, such as processing data for screens and implementing business rules at the mobile level.

[`src/routes`](./src/routes).

> In this directory are the settings related to the application navigation. In this project, the `react-native-navigation` library was used because it is a consolidated library, with good documentation and good support for React Hooks.

[`src/screens`](./src/screens).

> In this directory are the three main screens of the project, Home, Chat and Profile.

[`src/services`](./src/services).

> This is one of the fundamental directories of this project. It contains the files: (i)`TheCat.service.ts` - responsible for providing an axios instance connected to the `api.thecatapi.com` domain, in this project the use of this file was minimal, but it can be used to intercept requests and inject information into the header, such as Bearer Token, custom attributes, among others; (ii)`TheCat.api.ts` - responsible for mapping the routes used by the project.

[`src/util`](./src/util).

> This directory contains the types used in the project and functions for inserting the TestID to do tests end-to-end.

# Dependencies

`@react-navigation `: Navigation Library
`axios`: Library to do http requests
`git-cz`: Library of commit support


# How to run the project

Clone the project and execute: `yarn install`, `cd ios/`, `pod install`, `cd ..`

> [ios]: `yarn ios` > [android]: `yarn android`


# Next steps 

Recently, in my work, I've created a structure to make mocks of http requests, this structure allows to vary the response of the requests.
With this, it is possible to do an end-to-end test without having to mess with the service layer. This made me want to write an article explaining how I did it, so the next step will be to complete this project and build all the end-to-end tests using detox, as well as the unit tests of visual components and custom hooks.
