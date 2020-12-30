# candidate-apollo-app 🤵

candidate-apollo-app is a simple CRUD (Create Read Update Delete) capable mobile app powered by [React Native] with [Apollo GraphQL] x [Express] as backend server and [MongoDB] x [mongoose] as database.
(aka [MERN] stack)

It's essentially two applications:
  - Frontend mobile app (`./client`)
  - Backend server (`./server`)

### Documentation
You can find the docs (like app structure, features and notes) at `./docs`

### Installation

candidate-apollo-app requires [Node.js] and a mobile phone or emulator (preferably Android) to run.

Run `start_project.bat` if you're using Windows, or open your favorite Terminal and run these commands. (every terminal is starting from root directory!)
> Before running `start_project.bat` be sure to create `mongodb_path.txt` that contains the directory of your MongoDB database in the first line

Start up MongoDB:
```sh
$ mongod --dbpath="path"
```

Server:
```sh
$ cd server
$ npm run start
```

Client First Terminal:
```sh
$ cd client
$ yarn start
```

Client Second Terminal:
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


### Development

Want to contribute? Great! But we are not currently accepting any contributors as this is a short-sighted program requested by a company for me to test my programming prowessness!

Just fork it if you want!

### Background & Thoughts
I graduated near the end of [2020] with a neat Computer Science degree from [Monash University]. So I do what most fresh grads do, I apply to jobs. And one company requested me to write a test project (CRUD) with the technologies listed above (except the database, they allowed me to choose what to use), all within a week. I didn't know most of these techs (it was on purpose by them :o). I really only knew [React] at the time, and have just learned how to use [Express] three days prior. Also, I have spent the first two days configuring the project and learning the basics as I go. Naturally I am worried and stressed, so I went more spaghettier than I would have liked in terms of writing code. But at least I have learned much from this exprience!

Time taken: 7 days (23th December 2020 - 30th December 2020)

### Acknowledgement
[LavaX] for forcing me to learn faster.

License
----

GNU General Public License v3.0

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [express]: <http://expressjs.com>
   [react native]: <https://reactnative.dev/>
   [react]: <https://reactjs.org/>
   [apollo graphql]: <https://www.apollographql.com/>
   [node.js]: <https://nodejs.org/>
   [mongodb]: <https://www.mongodb.com/>
   [mongoose]: <https://mongoosejs.com/>
   [mern]: <https://www.mongodb.com/mern-stack/>
   [lavax]: <https://www.lavax.co/>
   [2020]: <https://en.wikipedia.org/wiki/COVID-19_pandemic>
   [monash university]: <https://www.monash.edu/>
