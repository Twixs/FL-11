import './header.scss';

export default function headers(table) {
    const headerRow = document.createElement("tr");
    const tableName = document.createElement("th");
    tableName.innerHTML = "Name";
    const tableLocation = document.createElement("th");
    tableLocation.innerHTML = "Location";
    const tableEmail = document.createElement("th");
    tableEmail.innerHTML = "Email";
    const tablePhone = document.createElement("th");
    tablePhone.innerHTML = "Phone";
    const tablePic = document.createElement("th");
    tablePic.innerHTML = "Picture";
    const tableTZ = document.createElement("th");
    tableTZ.innerHTML = "Time Zone";
    const tableAction = document.createElement("th");
    tableAction.innerHTML = "Actions";
    
    headerRow.appendChild(tableName);
    headerRow.appendChild(tableLocation);
    headerRow.appendChild(tableEmail);
    headerRow.appendChild(tablePhone);
    headerRow.appendChild(tablePic);
    headerRow.appendChild(tableTZ);
    headerRow.appendChild(tableAction);

    return table.appendChild(headerRow)    
}