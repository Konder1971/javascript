let out = '';
let q = 8;
let r = 0;
for (let i = 0; i < 8; i++) {
    for (let k = 0; k < 8; k++) {
        if (k < q || k > r) {
            out += '&nbsp;&nbsp;';
        }
        else {
            out += '*';
        }
    }
    q--;
    r++;
    out += '<br />';
}
document.querySelector('.out').innerHTML = out;