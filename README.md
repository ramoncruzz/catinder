# caTinder

## Branch: _After time_

caTinder App is a simple project that helps to understand important concepts on an React Native Project. Here you'll see How to:

- Implement a custom bottom bar using React Navigation;
- Implement a custom hook for applying the concept 'separetion of concerns';
- Implement view page without accomplement;
- Write some unit test in visual components;
- Write test to test a custom hook;
- Write a simple end-to-end test using React Native Detox.

I hope this help you in something

## Architecture

This project has been configured to use TypeScript and to get the best organization possible the `catinder` project contains the following directories:
[`components`](./components):

> Where are the codes referring to visual components.

[`src/hooks`](./src/hooks).

> In this directory is present the custom Hook useTheCat. Its use is a practical example of separation of responsibilities. In this project useTheCat is responsible for controlling the request for new products and paging.

> On larger projects a custom Hook may have more responsibility, such as processing data for screens and implementing business rules at the mobile level.

[`src/routes`](./src/routes).

> In this directory are the settings related to the application navigation. In this project, the `react-native-navigation` library was used because it is a consolidated library, with good documentation and good support for React Hooks.

[`src/screens`](./src/screens).

> In this directory are the three main screens of the project, Home, Chat and Profile.

[`src/services`](./src/services).

> This is one of the fundamental directories of this project. It contains the files: (i)`TheCat.service.ts` - responsible for providing an axios instance connected to the `api.thecatapi.com` domain, in this project the use of this file was minimal, but it can be used to intercept requests and inject information into the header, such as Bearer Token, custom attributes, among others; (ii)`TheCat.api.ts` - responsible for mapping the routes used by the project.

[`src/util`](./src/util).

> This directory contains the types used in the project and functions for inserting the TestID to do tests end-to-end.

## Dependencies

This project uses the follown dependencies

- React Navigation 6.x
- Axios
- React Native magnus
- git-cz
- Testing Library
- Detox

## Installing and running

## How to run the project

Clone the project `git clone -b chore/afterTime https://github.com/ramoncruzz/catinder/tree/chore/afterTime`

and execute: `yarn install`, `cd ios/`, `pod install`, `cd ..`

> [ios]: `yarn ios` > [android]: `yarn android`

## How to run the tests

For running the unit test you should run the follow command;

> ` yarn test`

For running the end-to-end tests you should to do a task first. (Please, use the iOS Project)

> `npm install -g detox-cli`

execute the follow command for build an artifact for testing:

> `yarn ios:e2e-build`

and last, execute this command for running the e-2-e test.

> `yarn ios:e2e`

You'll seen something like the one shown in the follow video:

[![IMAGE ALT TEXT HERE](https://i9.ytimg.com/vi/JaRvVk3W2mA/mq2.jpg?sqp=CKCt5ZMG&rs=AOn4CLBRyJEskxaa3DDYYPP6u1URinyFjQ)](https://youtu.be/JaRvVk3W2mA)
