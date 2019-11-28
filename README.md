# js-band-hw-task-5

**Ciklum University: JS Band Internship. Homework task 5**

The app allows to track information about delivery services by truck and by
ship. Also, there is an ability to keep a tab on information about delivery
cost. To add some peace of information, use forms in the header. User's data is
stored in local storage.

**Improvements:**

- Travis CI is implemented.
- Jest test are added.

**Scripts**

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode. Open http://localhost:8080 to check it in
the browser.

```bash
npm run build
```

Builds the app for production to the dist folder.

```bash
npm run lint
```

Runs Eslint commands from inside your repository.

```bash
npm run test
```

Runs Jest to start testing your project.

**Project Structure**

```bash
├── js
│   ├── __test__
│   │   ├── Controller.test.js
│   │   ├── Model.test.js
│   │   └── View.test.js
│   ├── classes
│   │   ├── __test__
│   │   │   │── Cost.test.js
│   │   │   │── Ship.test.js
│   │   │   │── Truck.test.js
│   │   │   │── Vehicle.test.js
│   │   │   └── VehicleFactory.test.js
│   │   ├── Cost.js
│   │   ├── Ship.js
│   │   ├── Truck.js
│   │   ├── Vehicle.js
│   │   └── VehicleFactory.js
│   ├── constants
│   │   └── collectionTypes.js
│   ├── services
│   │   ├── __test__
│   │   │   │── EventEmitter.test.js
│   │   │   └── LocalStorage.test.js
│   │   ├── EventEmitter.js
│   │   └── LocalStorage.js
│   ├── Controller.js
│   ├── Model.js
│   └── View.js
├── sass
│   ├── base
│   │   └── normalize.scss
│   ├── components
│   │   ├── form
│   │   │   │── cancel-btn.scss
│   │   │   │── create-btn.scss
│   │   │   └── form.scss
│   │   ├── header
│   │   │   └── header.scss
│   │   ├── item
│   │   │   └── item.scss
│   │   └── main-content
│   │       └── main-content.scss
│   ├── common.scss
│   └── main.scss
├── index.html
└── index.js
```

Check the demo via link: https://romanbezpalyi.github.io/js-band-hw-task-5/
