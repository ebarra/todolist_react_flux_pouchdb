Añadir -d a browserify para que genere los sourcemaps

https://www.codementor.io/reactjs/tutorial/react-js-flux-architecture-tutorial
https://www.kirupa.com/react/simple_todo_app_react.htm
https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

LIBRO O´reilly gratis. La guia definitiva: http://guide.couchdb.org/editions/1/es/index.html


NOTAS:
1.-
A la hora de meter pouchdb hay dos opciones claras,
una es mandar los cambios a la bbdd y cuando actualice y vaya bien hacer el setState
Esto es lo que se hace aquí: https://blog.yld.io/2016/07/05/building-a-offline-first-application-using-react-native-and-pouchdb/#.WKLc1TvhDIV https://github.com/yldio/react-native-offline-first/blob/3e829d747e584078fda4fe4a346d6ff148c3952f/DocsApp.js

La otra es hacerlo en paralelo, con una setstate y una llamada al API (en el tutorial es un API remoto porque ponen pouchdb en el server, pero daría igual). Como hacen aquí: https://blog.cozycloud.cc/post/2015/12/15/Build-And-Share-Your-Single-page-App-With-React%2C-Node-and-Pouchdb%2C-part-III

Voy a ir con la primera opción. Aquí explican un poco en el blog oficial de pouchdb https://pouchdb.com/2015/02/28/efficiently-managing-ui-state-in-pouchdb.html

2.-
Siguiente opción es cuando me llega la notificación de que algo ha cambiado en la BBDD si hago un setstate añadiendo o quitando ese elemento o hago query a la bbdd y me traigo todo otra vez y hago setstate de eso. Voy a ir por sencillez con la segunda opción, entiendo que la primera sería una optimización pero complicaría tener que estar atento al estado.

3.-
Otra historia es con getInitialState, que no es para sacar nada de la db, según react se debe hacer devolviendo un array vacio y luego en el componentDidMount se carga lo que sea. ver http://stackoverflow.com/questions/26615307/why-async-requests-should-be-made-in-componentdidmount-instead-of-getinitialstat

IDEAS/MEJORAS:
- Hay una cosa que se llama couchapp que sirve para hacer todo desde couchdb. Se podría hacer algo así.
- 
