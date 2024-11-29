
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generate () {
    let num1 = getRandomArbitrary(10, 99);
    let num2 = getRandomArbitrary(10, 99);
    let ans = num1 * num2;
    document.getElementById("divA").textContent = `${num1} ✕ ${num2}`;
    console.log(`${num1} ✕ ${num2}`);
    console.log(num1);
    console.log(num2);
    document.getElementById("answer").addEventListener('click', () => {window.alert(ans);});
    document.getElementById('next').addEventListener('click', () => {window.location.reload();});
}
generate(); 
