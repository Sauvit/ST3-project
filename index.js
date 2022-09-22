function calcweight(gravity){

    var mass=document.getElementById("wt").value;
    mass=mass/9.8;
    var res = mass*gravity;
    document.getElementById("outt").innerText="Now, Weight is: "+res;
    console.log(gravity);
}