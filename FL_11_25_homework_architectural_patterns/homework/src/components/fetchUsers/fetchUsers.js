import USERS from '../../store/data';
import headers from '../tableHeader/tableHeader';

export const fetchUsers = () => {
    const users = [...USERS];
    const root = document.getElementById("root");
    const usersTable = document.createElement("table");
    usersTable.align = "center";
    
    headers(usersTable);

    users.forEach((user) => {
        const row = document.createElement("tr");
        const buttonCell = document.createElement("td");
        const button = document.createElement("button");
        button.innerText = "Remove";
        for (const key in user) {
            if (key === 'picture') {
                let cell = document.createElement("td");
                const pic = document.createElement("img");
                pic.src = user[key];
                cell.appendChild(pic);
                row.appendChild(cell);
            } else {
                if(key === 'id'){
                    continue;
                }
                let cell = document.createElement("td");
                cell.innerHTML = user[key];
                row.appendChild(cell);
            }
        }
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);
        usersTable.appendChild(row);
    })
    root.appendChild(usersTable);
    return usersTable;
}