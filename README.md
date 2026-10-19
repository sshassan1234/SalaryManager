
<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Salary Manager</title>
<style>
body{font-family:Arial,sans-serif;background:#f1f5f9;margin:0;padding:16px}
h1{color:#14532d;text-align:center}
.card{background:white;padding:16px;margin:12px 0;border-radius:12px}
input,button{box-sizing:border-box;width:100%;padding:12px;margin:6px 0;border-radius:7px}
input{border:1px solid #ccc}
button{background:#15803d;color:white;border:0;font-size:16px}
label{display:block;margin-top:8px}
</style>
</head>
<body>
<h1>Salary Manager</h1>
<div class="card">
<h3>نیا ملازم شامل کریں</h3>
<label>ملازم کا نام</label>
<input id="name" placeholder="ملازم کا نام">
<label>ماہانہ تنخواہ (PKR)</label>
<input id="salary" type="number" placeholder="مثلاً 30000">
<button onclick="addEmployee()">ملازم محفوظ کریں</button>
</div>
<div class="card">
<h3>ملازمین کی فہرست</h3>
<div id="employees">ابھی کوئی ملازم شامل نہیں</div>
</div>
<script>
let employees = JSON.parse(localStorage.getItem('employees') || '[]');
function showEmployees(){
 document.getElementById('employees').innerHTML =
 employees.map((e,i)=>`<p>${i+1}. ${e.name} — Rs ${e.salary}</p>`).join('') || 'ابھی کوئی ملازم شامل نہیں';
}
function addEmployee(){
 const name=document.getElementById('name').value.trim();
 const salary=Number(document.getElementById('salary').value);
 if(!name || salary<=0){alert('نام اور درست تنخواہ درج کریں');return;}
 employees.push({name,salary});
 localStorage.setItem('employees',JSON.stringify(employees));
 document.getElementById('name').value='';
 document.getElementById('salary').value='';
 showEmployees();
}
showEmployees();
</script>
</body>
</html>
