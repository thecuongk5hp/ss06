let tenDem: string = "nguyễn";
let hoVaTen: string = "thế cường";
if (tenDem.charAt(0) !== tenDem.charAt(0).toUpperCase()) {
  tenDem = tenDem.charAt(0).toUpperCase() + tenDem.slice(1);
}
if (hoVaTen.charAt(0) !== hoVaTen.charAt(0).toUpperCase()) {
  hoVaTen = hoVaTen.charAt(0).toUpperCase() + hoVaTen.slice(1);
}
let hoTenDayDu: string = tenDem + " " + hoVaTen;
console.log(hoTenDayDu);
