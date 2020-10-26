let init = () => {

    let main = (() => {
        let btnSub = document.getElementById(`btn-Submit`);
        let name = document.getElementById(`name`);
        let surname = document.getElementById(`surname`);
        let form = document.getElementById(`special`);
        let token = form.elements.csrfmiddlewaretoken.value;

        btnSub.onclick = (event) => {
            event.preventDefault();

            let url = `test/`;
            let xhttp = new XMLHttpRequest();


            let data = {
                name: name.value,
                surname: surname.value
            }

            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    alert(`Sucsess !`);
                }
            }
            xhttp.onload = () => {
                console.log(JSON.parse(xhttp.response));
            }

            xhttp.open(`POST`, url, true);
            xhttp.setRequestHeader(`Content-type`, `application/json`);
          
            xhttp.setRequestHeader(`X-CSRFToken`,token);
            xhttp.responseType = `json`;
           
            xhttp.send(JSON.stringify(data));
          
        }

    })();
    //deleting cookie expires=Thu, 01 Jan 1970 00:00:00 GMT;
}
window.addEventListener(`load`, init, false);