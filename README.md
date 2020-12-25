# candidate-apollo-app

candidate-apollo-app is a simple CRUD capable mobile app powered by [React Native] with [Apollo GraphQL] x [Express] backend server.

It's essentially two applications:
  - Frontend mobile app (`./client`)
  - Backend server (`./server`)

### Installation

candidate-apollo-app requires [Node.js] and a mobile phone or emulator (preferably Android) to run.

Run `start_project.bat` if you're using Windows, or open your favorite Terminal and run these commands. (every terminal is starting from root directory!)

Client First Tab:
```sh
$ cd client
$ yarn start
```

Client Second Tab:
```sh
$ cd client
$ npx react-native run-android/run-ios
```

(optional) If you're running on an Android emulator:
```sh
$ cd client
$ adb reverse tcp:8080 tcp:8080
```
> Note that the server uses port 8080!

Server:
```sh
$ cd server
$ npm run start
```


### Development

Want to contribute? Great! But we are not currently accepting any contributors as this is a short-sighted program requested by a company for me to test my programming prowessness!

Just fork it if you want!

License
----

GNU General Public License v3.0

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [express]: <http://expressjs.com>
   [react native]: <https://reactnative.dev/>
   [apollo graphql]: <https://www.apollographql.com/>
   [node.js]: <https://nodejs.org/>
