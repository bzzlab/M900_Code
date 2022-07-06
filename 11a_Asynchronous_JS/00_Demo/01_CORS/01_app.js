/*
Thema: Asynchrone Verarbeitung im Web und CORS

Beispiel 1: Anstossen des TodoList-Service.

Origin Server: http://localhost:63342
CORS Request Server (http://localhost:3000)

Wichtig: Programm wird im Client verarbeitet.

Doc: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
*/

const request = new XMLHttpRequest();
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener('readystatechange', (evt) => {
    //wenn Verarbeitung ausgeführt (complete) ist ...
    if (evt.target.readyState === 4 && evt.target.status === 200){
        //dann tue ausgeben
        //target contains the request itself!
        console.log(evt.target);
    }
})


//URL of puzzle server
request.open('GET','http://localhost:3000/puzzle');
request.send();
