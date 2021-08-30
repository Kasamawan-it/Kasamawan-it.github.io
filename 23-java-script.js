let sid
let sname
    function display_data(){
        sid = document.getElementById('sid').value
        sname = document.getElementById('sname').value

        document.getElementById('output').innerHTML = "รหัสนักศึกษา : " + sid + "<br>" + "ชื่อ-นามสกุล : " + name
        document.getElementById('sid').value = ''
        document.getElementById('sname').value = ''
    }
