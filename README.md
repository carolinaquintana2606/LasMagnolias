# Las Magnolias Store
Proyecto basado en una Tienda Online de Perfumes y Maquillaje, utilizando React.
En este proyecto, se puede navegar por las diferentes categorias, ir al detalle de un producto, agregar los mismos al carrito y generar la órden de compra.

## Run the app
```sh 
$ git clone https://github.com/carolinaquintana2606/LasMagnolias
$ npx create-react-app
$ npm install react-router-dom
$ npm install react-bootstrap bootstrap
$ npm install sweetalert --save
```

```sh 
$ npm install --save firebase
```

- Create proyect from [Firebase](https://firebase.google.com/?hl=es)
- Create collection from Firestore: 
    - Data for collection:
    {
        name: name's product
        price: price's product
        stock: stock's product
        category: category's product
        description: description's product
        img: image's product
        brand: brand's product
    }

- Create file > .env:
    - REACT_APP_apiKey=
    - REACT_APP_authDomain=
    - REACT_APP_projectId=
    - REACT_APP_storageBucket=
    - REACT_APP_messagingSenderId=
    - REACT_APP_appId=

```sh 
$ npm start
```
