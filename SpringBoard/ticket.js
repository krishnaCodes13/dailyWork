const costPerTKT = 9;
let seatsToBook = 4;
let seatsBooked; 
(seatsToBook>=5)?document.write("Booking Not Allowed..!<br>") : seatsBooked=seatsToBook; 
let costOfTKT=0;
let dis=0;

if(seatsBooked<5){
for(let i = 1; i<=seatsBooked; i++){
    if(i==1) dis=5;
    else if(i==2) dis=7;
    else if(i==3) dis=9;
    else if(i==4) dis=11;
    var cost = costPerTKT-(costPerTKT/100)*dis;
    costOfTKT+=cost;
    document.write(`Ticket for customer ${i} gets ${dis}% discount! Cost: $${cost} <br>`);
}
let totalCost = costPerTKT*seatsBooked;
document.write(`For 4 tikets, you need to pay : $${costOfTKT} instead $${totalCost} `);
}
