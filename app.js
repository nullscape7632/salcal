const showButton = document.getElementById('showButton');
const answerDiv = document.querySelector('.answer');

function salcal() {
    const wd = parseFloat(document.getElementById("Working_days").value);
    const sal = parseFloat(document.getElementById("salary").value);
    const ot = parseFloat(document.getElementById("OT").value);

    if (isNaN(wd) || isNaN(sal) || isNaN(ot) || wd <= 0 || sal <= 0 || ot < 0) {
        alert("Please fill the empty boxes to proceed");  
    } 
    else {
        const result = ((((wd*9)+ot)*((sal/wd)/9))-(sal*.12))
        const one = wd*9
        const two = (sal/wd)/9

        document.getElementById("result").textContent = "Result: " + result.toFixed(3);
        document.getElementById("one").textContent = "worked in hrs: " + one.toFixed(3);
        document.getElementById("two").textContent = "sal/hr: " + two.toFixed(3);
        answerDiv.style.display = 'block';   
    }  
     // Show the answer div
}




