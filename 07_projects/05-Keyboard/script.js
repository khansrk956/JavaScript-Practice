const insert = document.getElementById('insert')

// Function to get ASCII code for alphabets
function getAlphabatKeyCode(key){
    if(/^[a-z]$/.test(key)){
        // convert lowercase alphabet to ASCII code
        return key.charCodeAt(0);
    }else if(/^[A-Z]$/.test(key)){
        // convert uppercase alphabet to ASCII code
        return key.charCodeAt(0);
    }else if(/^\d$/.test(key)){
        // convert number to ascii code
        return key.charCodeAt(0);
    }else{
        // return key for non-alphabet keys
        return key;
    }
}

window.addEventListener('keydown', (e)=>{
    let key = e.key;
    // console.log(key)
    // Get ASCII code for alphabet keys
    let keyCode = getAlphabatKeyCode(key);
    insert.innerHTML = `
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
            <td>${key === " " ? "Space" : key }</td>
            <td>${keyCode}</td>
            <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `;
})