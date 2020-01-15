# Hilton React Native Challenge

### Install instructions

1. Ensure that you have followed the react native set outlined in the [Getting Started](https://facebook.github.io/react-native/docs/getting-started) guide in the docs.
2. Clone down the repo, cd into the project folder and run `yarn install`
3. cd into the ios folder and run `pod install`, then cd backing into the project root `cd ..`
4. Run `yarn start` to start the react native bundler.
5. To run the app on ios run `yarn ios`. To run the app on android first ensure that your android emulator is running, then run `yarn android`.
6. To run the testing suite run `yarn jest`.

### Architectural Overview

This project was created using the most recent version of react native (as of 1.15.20), apollo client, typescript, jest and enzyme. The entire application was created using only functional react components and the new hooks api. Client side state is managed with the apollo client-side state. The project was created using the WebStorm IDE and includes a .idea folder that contains various configurations for a better developer experience.

The project is a simple two-page application that lists reservations from a graphql server ordered by date modified, and allows the user to create a new reservation. There are two routes in the project currently; Reservations, and NewReservation. Routing was implemented using the `react-navigate` library.

I structured this project in a largely modular fashion. The src root contains all of the globally accessible components. All non-global component parts are included in an associated component directory. The routing structure provides the primary schema for splitting up the application. I like to create directories for every component, then use index files so that the component can be required directly by the directory. The files in the component directories all represent different component or route concerns. The component, container (hocs), queries, mutations, selectors, etc... are all broken into their own files. I have found this lead to much more manageable code bases.

Intelisense for qraphql queries is provided by the presence of .graphql files in WebStorm. Using the apollo cli I implemented a yarn script, `yarn apollo:download`, that will download the server schema file into the `src/store` directory. This directory contains all of the code pertaining to setup and shape of the apollo client cache. This file is saved as `shchema.graphql`. There is also `clientState.graphql` file in this directory that is manually maintained to enable intelisense and type generation for @client queries.

GraphQL query typescript types for server and client graph calls are automatically generated using the apollo-cli. run `yarn apollo:generate` to regenerate these files or `yarn apollo:update` to re-download the server schema and generate. Generated types will be placed inline with the component the query originated from in a `graphTypes` directory. Global graphTypes are placed in `types/GlobalGraphTypes.ts`. These are then used in various places for typechecking. The project is fully typed with no implicit or explicit any types. The project has been modified to use the "eslint stand react" styleguide, which is my preference. Run `yarn lint` to lint the project, and `yarn format` to automatically fix linting errors.

Unit tests are set using Jest and Enzyme and are located inline with the components they are testing. Tests should be created to correspond directly with a component module file by adding ".test" to the file name i.e. `Reservations.component.test.tsx` or `Reservations.selectors.test.ts`. Project scopes have been added to the shared .idea folder that allow you to view just the src folder (without the root resolving package.json files), the src directory with just tests, and the src directory without tests.

NOTE: If you are reading this as of 1.15.20 I am probably still adding more unit tests. It took me a while to get enzyme configured correctly with the newest versions of everything, but I wanted to get the repo in your hands sooner rather than later so that we can potentially start the interview process. Check back on 1.16.20 for more complete testing coverage.

Custom hooks were created for the graphql queries and mutations to allow for cleaner component files. The `withApolloWrapper` hoc even demonstrates how these calls, error, and loading state can all be abstracted into a shared container component allowing for minimal base component.

The fields on the NewReservation route are controlled through two way binding to the apollo client cache. In a real application I would probably keep this info in component state for performance and security purposes, but I wanted to demonstrate use of the apollo client cache. There is very basic form validation built in. The createReservation mutation directly modifies the cache on success to implement an optimistic UI pattern.

### Things I would change if this was a real application

I spent minimal time styling this application as I think the underlying code is probably more important for this exercise. There are also many styles that could use additional abstraction. With more time I would move more of this into base components, or the global styles (which I like to organize like a large sass project).

For a large application I usually create a set of modified base components (Text, H1, Button, etc...) that style and extend the react native base components. In this project they are styled without that abstraction.

The date picker library that I implemented appears to use an older version of the react api that is going to be depreciated. With more time I would research or hand-roll a more modern cross-device date picker. 

