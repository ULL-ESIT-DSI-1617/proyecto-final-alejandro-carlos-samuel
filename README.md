[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dsi-mylib.herokuapp.com/)
# MYLIB

Tu biblioteca en la nube. Organiza tus libros favoritos de la manera más sencilla.

# Requisitos

Para el correcto funcionamiento de la aplicación es necesario disponer de MongoDB.

#### ¿Cómo instalarlo?

[Tutorial instalación MongoDB.](https://docs.mongodb.com/manual/installation/#tutorials)

# Uso

1. Iniciar en una terminal `$ mongod`.
2. Clonar el repo
3. Ejecutar `$ npm install`
4. Ejecutar `$ npm start`
5. Acceder desde un navegador a `localhost:3000`

# Autores

* [Alejandro Arzola](http://aleag.github.io)
* [Carlos de Armas](http://alu0100816167.github.io)
* [Samuel Valcárcel](http://cosaca.github.io)

# Estructura

```
.
├── LICENSE
├── README.md
├── app
│   ├── createbooks.js
│   ├── deletebooks.js
│   ├── findbooks.js
│   ├── getbooks.js
│   ├── models
│   │   ├── books_db.js
│   │   └── users_db.js
│   └── routes.js
├── config
│   └── passport.js
├── package.json
├── server.js
└── views
    ├── content
    │   ├── bookinfo.ejs
    │   ├── content.ejs
    │   ├── find.ejs
    │   └── profile.ejs
    ├── landing
    │   └── landing.ejs
    ├── login
    │   ├── login.ejs
    │   └── register.ejs
    └── prueba
        ├── connect-local.ejs
        ├── index.ejs
        ├── login.ejs
        ├── profile.ejs
        └── signup.ejs
```