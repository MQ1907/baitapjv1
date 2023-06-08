// BAITAP1
function baitap1() {
  let soNgay = +document.getElementById("soNgay").value;
  let soLuong = +document.getElementById("soLuong").value;
  let tongLuong = soLuong * soNgay;
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
}

// BAiTAP2

function baitap2() {
  //input:  num1,num2,num3,num4,num5 :number
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let num3 = +document.getElementById("number3").value;
  let num4 = +document.getElementById("number4").value;
  let num5 = +document.getElementById("number5").value;

  // output : Trungbinh: number

  let trungBinh = (num1 + num2 + num3 + num4 + num5) / 5;

  document.getElementById("trungBinh").innerHTML = trungBinh.toLocaleString();
}

// BAITAP3

function baitap3() {
  let money = +document.getElementById("soTienUSD").value;
  let quyDoi = money * 23500;
  document.getElementById("quyDoi").innerHTML = quyDoi.toLocaleString();
}

//BAITAP4

function baitap4() {
  let cd = +document.getElementById("chieuDai").value;
  let cr = +document.getElementById("chieuRong").value;
  let dienTich = cd * cr;
  let chuVi = (cd + cr) * 2;
  document.getElementById("dienTich").innerHTML = dienTich.toLocaleString();
  document.getElementById("chuVi").innerHTML = chuVi.toLocaleString();
}

// BAITAP5
function baitap5() {
  let n = +document.getElementById("input-number").value;
  let sum = 0
  sum += n % 10; 
  n = Math.floor(n / 10); 
  
  sum += n % 10; 
  n = Math.floor(n / 10); 
  
  sum += n;
   
  document.getElementById("sum").innerHTML = sum.toLocaleString();
}



