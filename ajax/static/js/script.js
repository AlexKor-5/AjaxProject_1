let init = () => {

    let main = (() => {
        let btnSub = document.getElementById(`btn-Submit`);
        let name = document.getElementById(`name`);
        let surname = document.getElementById(`surname`);
        let form = document.getElementById(`special`);
        let taker = document.getElementById(`taker`);
        let token = form.elements.csrfmiddlewaretoken.value;
        takenObject = {};

        btnSub.onclick = (event) => {
            event.preventDefault();
            let data = {
                name: name.value,
                surname: surname.value
            }
            let url = `test/`;
            async function action() {
                takenObject = await fetch(url, {
                    method: `POST`,
                    headers: {
                        'X-CSRFToken': token
                    },
                    body: JSON.stringify(data)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            console.log(`Mistake ${response.status}`);
                        }
                    })
                    .then((res) => {
                        return res;
                    });

                    taker.innerHTML = `Hello: <b>${takenObject.name} ${takenObject.surname}</b>`;
            } action();
            // let xhttp = new XMLHttpRequest();


            // let data = {
            //     name: name.value,
            //     surname: surname.value
            // }

            // xhttp.onload = () => {
            //     let gottendObject = xhttp.response;
            //     console.log(gottendObject);
            //     takenObject = gottendObject;
            //     taker.innerHTML = `Hello: <b>${takenObject.name} ${takenObject.surname}</b>`;
            // }

            // xhttp.onreadystatechange = () => {
            //     if (xhttp.readyState == 4 && xhttp.status == 200) {
            //         alert(`Sucsess !`);
            //     }
            // }

            // xhttp.open(`POST`, url, true);
            // xhttp.setRequestHeader(`X-CSRFToken`, token);
            // xhttp.responseType = `json`;
            // xhttp.send(JSON.stringify(data));

        }

    })();
    //deleting cookie expires=Thu, 01 Jan 1970 00:00:00 GMT;
}
window.addEventListener(`load`, init, false);