let init = () => {

    let main = (() => {
        let btnSub = document.getElementById(`btn-Submit`);
        let name = document.getElementById(`name`);
        let surname = document.getElementById(`surname`);

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
            xhttp.setRequestHeader(`Content-type`,`application/json`);
            xhttp.setRequestHeader(`X-CSRFToken`,`ahqfcbzMo48WJKcZLFLTyUmELeg2dkSQ`);
            xhttp.responseType = `json`;
            xhttp.send(JSON.stringify(data));
        }

    })();

}
window.addEventListener(`load`, init, false);