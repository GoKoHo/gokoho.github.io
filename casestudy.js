function login() {
    let account = document.getElementById("acc").value;
    let password = document.getElementById("pass").value;
    let adminAccount = "admin";
    let adminPassword = "admin";
    if (account === adminAccount && password === adminPassword) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Bạn đã nhập sai mật khẩu hoặc tài khoản");
    }
}
let listpro = [
    { id: '70001', name: 'NGŨ HẬU PHƯƠNG', birthday: '05/12/1994', sex: 'Nam', phone: '0938.952.943', date: '16/10/2010', area: 'Long An' },
    { id: '70034', name: 'PHẠM THỊ KIM VUI', birthday: '20/12/2000', sex: 'Nữ', phone: '0938.950.935', date: '01/08/2018', area: 'Long An' },
    { id: '70042', name: 'NGÔ VĂN THỪA', birthday: '01/01/1986', sex: 'Nam', phone: '0909.186.965', date: '01/11/2018', area: 'Long An' },
    { id: '70043', name: 'HỒ PHI YẾN', birthday: '18/03/1993', sex: 'Nữ', phone: '0723.853.744', date: '01/11/2018', area: 'Long An' },
    { id: '70058', name: 'NGUYỄN VĂN VŨ LINH', birthday: '01/01/1991', sex: 'Nam', phone: '0800.272.070', date: '01/05/2020', area: 'Tây Ninh' },
    { id: '70059', name: 'HUỲNH MINH CẢNH', birthday: '15/07/2003', sex: 'Nam', phone: '0707.159.742', date: '15/10/2020', area: 'Long An' },
    { id: '70061', name: 'HỒ QUỐC BẢO', birthday: '21/12/2004', sex: 'Nam', phone: '0903.856.951', date: '02/02/2021', area: 'Long An' },
    { id: '70142', name: 'ĐẶNG THỊ THU MAI ', birthday: '10/10/1986', sex: 'Nữ', phone: '0745.953.456', date: '23/05/2022', area: 'Tây Ninh' },
    { id: '70144', name: 'NGUYỄN THỊ KIM XUYẾN', birthday: '10/03/2000', sex: 'Nữ', phone: '0909.456.321', date: '23/05/2022', area: 'Long An' }
];

function list() {
    let main = '</section><select id="sortSelect"><option value="id">ID</option><option value="name">Tên</option><option value="birthday">Ngày sinh</option><option value="sex">Giới tính</option><option value="phone">Số điện thoại</option><option value="date">Ngày vào công ty</option><option value="area">Quê quán</option></select><button onclick="sapXep()"><h3>Sắp xếp</h3></button><table style="width: 100%; background-color: azure;"><tr><th style="width: 10%; border: 1px solid;">ID</th><th style="width: 20%; border: 1px solid;">Họ và Tên</th><th style="width: 15%; border: 1px solid;">Ngày tháng năm sinh</th><th style="width: 10%; border: 1px solid;">Giới Tính</th><th style="width: 15%; border: 1px solid;">Số điện thoại</th><th style="width: 15%; border: 1px solid;">Ngày vào công ty</th><th style="width: 15%; border: 1px solid;">Quê quán</th></tr></table>';

    for (let i = 0; i < listpro.length; i++) {
        main += `<table style="width: 100%; background-color: azure;">
            <tr>
                <th style="width: 10%; border: 1px solid;">${listpro[i].id}</th>
                <th style="width: 20%; border: 1px solid;">${listpro[i].name}</th>
                <th style="width: 15%; border: 1px solid;">${listpro[i].birthday}</th>
                <th style="width: 10%; border: 1px solid;">${listpro[i].sex}</th>
                <th style="width: 15%; border: 1px solid;">${listpro[i].phone}</th>
                <th style="width: 15%; border: 1px solid;">${listpro[i].date}</th>
                <th style="width: 15%; border: 1px solid;">${listpro[i].area}</th>
            </tr>
        </table>`;
    }

    document.getElementById("main").innerHTML = main;
}

function edit() {
    let main = '<table style="width: 100%; background-color: azure;"><tr><th style="width: 7%; border: 1px solid;">ID</th><th style="width: 20%; border: 1px solid;">Họ và Tên</th><th style="width: 12%; border: 1px solid;">Ngày tháng năm sinh</th><th style="width: 10%; border: 1px solid;">Giới Tính</th><th style="width: 12%; border: 1px solid;">Số điện thoại</th><th style="width: 15%; border: 1px solid;">Ngày vào công ty</th><th style="width: 12%; border: 1px solid;">Quê quán</th><th style="width: 12%; border: 1px solid;">Chỉnh sửa</th></tr></table>';

    for (let i = 0; i < listpro.length; i++) {
        main += `<table style="width: 100%; background-color: azure;">
            <tr>
                <th style="width: 7%; border: 1px solid;">${listpro[i].id}</th>
                <th style="width: 20%; border: 1px solid;">${listpro[i].name}</th>
                <th style="width: 12%; border: 1px solid;">${listpro[i].birthday}</th>
                <th style="width: 10%; border: 1px solid;">${listpro[i].sex}</th>
                <th style="width: 12%; border: 1px solid;">${listpro[i].phone}</th>
                <th style="width: 15%; border: 1px solid;">${listpro[i].date}</th>
                <th style="width: 12%; border: 1px solid;">${listpro[i].area}</th>
                <th style="width: 12%; border: 1px solid;"><button style="background-color: indigo;color: white" onclick="sua(${i})">Sửa</button> <button style="background-color: red; color: white" onclick="xoa(${i})">Xoá</button></th>
            </tr>
        </table>`;
    }

    document.getElementById("main").innerHTML = main;
}

function sua(danhsach) {
    let main = `<input value="${listpro[danhsach].id}" id="nhapid${danhsach}"> <br>
        <input value="${listpro[danhsach].name}" id="nhapname${danhsach}"> <br>
        <input value="${listpro[danhsach].birthday}" id="nhapbirthday${danhsach}"> <br>
        <input value="${listpro[danhsach].sex}" id="nhapsex${danhsach}"> <br>
        <input value="${listpro[danhsach].phone}" id="nhapphone${danhsach}"> <br>
        <input value="${listpro[danhsach].date}" id="nhapdate${danhsach}"> <br>
        <input value="${listpro[danhsach].area}" id="nhaparea${danhsach}"> <br>
        <button onclick="luu(${danhsach})">Lưu</button>`;

    document.getElementById("main").innerHTML = main;
}

function luu(danhsach) {
    listpro[danhsach].id = document.getElementById('nhapid' + danhsach).value;
    listpro[danhsach].name = document.getElementById('nhapname' + danhsach).value;
    listpro[danhsach].birthday = document.getElementById('nhapbirthday' + danhsach).value;
    listpro[danhsach].sex = document.getElementById('nhapsex' + danhsach).value;
    listpro[danhsach].phone = document.getElementById('nhapphone' + danhsach).value;
    listpro[danhsach].date = document.getElementById('nhapdate' + danhsach).value;
    listpro[danhsach].area = document.getElementById('nhaparea' + danhsach).value;
    list();
}
function xoa(danhsach) {
    if (confirm("Bạn có chắc chắn muốn xoá thông tin nhân viên này không?")) {
        listpro.splice(danhsach, 1);
        list();
    } else {
        return;
    }
}


function add() {
    let main = `<input placeholder="Nhập Id" id="nhapid-add"> <br>
        <input placeholder="Nhập Họ và Tên" id="nhapname-add"> <br>
        <input placeholder="Nhập ngày sinh" id="nhapbirthday-add"> <br>
        <input placeholder="Nhập giới tính" id="nhapsex-add"> <br>
        <input placeholder="Nhập số điện thoại" id="nhapphone-add"> <br>
        <input placeholder="Nhập ngày gia nhập" id="nhapdate-add"> <br>
        <input placeholder="Nhập khu vực" id="nhaparea-add"> <br>
        <button onclick="them()" >Thêm</button>`;

    document.getElementById("main").innerHTML = main;
}

function them() {
    let themid = document.getElementById('nhapid-add').value;
    let themname = document.getElementById('nhapname-add').value;
    let thembirthday = document.getElementById('nhapbirthday-add').value;
    let themsex = document.getElementById('nhapsex-add').value;
    let themphone = document.getElementById('nhapphone-add').value;
    let themdate = document.getElementById('nhapdate-add').value;
    let themarea = document.getElementById('nhaparea-add').value;
    let themnhavien = {
        id: themid,
        name: themname,
        birthday: thembirthday,
        sex: themsex,
        phone: themphone,
        date: themdate,
        area: themarea
    }
    listpro.push(themnhavien);
    list();
}

function sapXep() {
    let sortField = document.getElementById("sortSelect").value;
    listpro.sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
    });
    list();
}
function timkiem() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    let filteredList = listpro.filter(function (item) {
        return (
            item.id.toLowerCase().includes(keyword) ||
            item.name.toLowerCase().includes(keyword) ||
            item.birthday.toLowerCase().includes(keyword) ||
            item.sex.toLowerCase().includes(keyword) ||
            item.phone.toLowerCase().includes(keyword) ||
            item.date.toLowerCase().includes(keyword) ||
            item.area.toLowerCase().includes(keyword)
        );
    });

    let main = '<table style="width: 100%; background-color: azure;"><tr><th style="width: 10%; border: 1px solid;">ID</th><th style="width: 20%; border: 1px solid;">Họ và Tên</th><th style="width: 15%; border: 1px solid;">Ngày tháng năm sinh</th><th style="width: 10%; border: 1px solid;">Giới Tính</th><th style="width: 15%; border: 1px solid;">Số điện thoại</th><th style="width: 15%; border: 1px solid;">Ngày vào công ty</th><th style="width: 15%; border: 1px solid;">Quê quán</th></tr>';
    for (let i = 0; i < filteredList.length; i++) {
        main += `<tr>
    <td style="width: 10%; border: 1px solid;">${filteredList[i].id}</td>
    <td style="width: 20%; border: 1px solid;">${filteredList[i].name}</td>
    <td style="width: 15%; border: 1px solid;">${filteredList[i].birthday}</td>
    <td style="width: 10%; border: 1px solid;">${filteredList[i].sex}</td>
    <td style="width: 15%; border: 1px solid;">${filteredList[i].phone}</td>
    <td style="width: 15%; border: 1px solid;">${filteredList[i].date}</td>
    <td style="width: 15%; border: 1px solid;">${filteredList[i].area}</td>
</tr>`;
    }

    main += '</table>';

    document.getElementById("main").innerHTML = main;
}
