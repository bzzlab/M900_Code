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
        const data = JSON.parse(evt.target.responseText);
        console.log(data);
    } else if (evt.target.readyState === 4){
        console.log(`Error might have occured with status ${evt.target.status}`);
    }
})


//URL of puzzle server with misspelling
request.open('GET','http://localhost:3000/puzle');
request.send();
