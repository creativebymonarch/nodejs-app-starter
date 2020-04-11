# Node.js App Starter
This Node.js App Starter is a starter pack to quickly launch a Node.js/Express application created by [monarch studio](https://www.monarchstudio.fr) and hosted on [.creative](https://creative.monarchstudio.fr).

Start coding, no server configuration, save time of your process.
Render your first template quickly and easily. ✌️

## Usage

We assume you know how Node.js and NPM works if you're using this Starter Pack. It's for developers who already know Node.js well. If not, please refer to the Node.js documentation.

### Node.js

Before all, you need [Node.js](https://nodejs.org/en/) and NPM installed and up to date.

### Template

The app using [Handlebars](https://handlebarsjs.com/) for template rendering.

### Database

The app include the ODM [Mongoose](https://mongoosejs.com/) for Mongo database management. 

You can choose about two methods to connect to database :

The Mongoose Client Connection
```Javascript
db.mongooseConnection()
```
The original MongoDB Client Connection
```Javascript
db.mongoConnection()
```

## Configuration

Before running your app, edit the `config.json` file in `./core/config` with your app description.
You can also edit the `ecosystem.config.js` file for production mode.

## Installation

### Init

If you run the app for the first time, you need to run this command.

Development mode :

```bash
npm run dev-init
```
Production mode :
```bash
npm run prod-init
```

### Run the app
After the init command, to start the app you can run this command.

```bash
npm run dev
```
Production mode :
```bash
npm run start
```
The app start listening  at http://localhost:3000.

## Finished

And that's it ! Your can now code your features, your server is running correctly. 💪

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Free for all.