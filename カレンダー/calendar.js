var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();
var dateview=year+"年"+month+"月"+day+"日";
document.write(("本日は"+dateview+"です。").fontsize(6));