import './search.scss';

export const searchComponent = () => {
    const root = document.getElementById("root");

    const searchBlock = document.createElement("div");
    searchBlock.id = "search-container";
    const label = document.createElement("label");
    label.innerText = "Search by name: ";
    const input = document.createElement("input");
    input.placeholder = "Enter user name";
    input.id = "search";
    input.addEventListener('change', (event) =>{
        console.log(event.target.value);
    })

    searchBlock.appendChild(label);
    searchBlock.appendChild(input);

    root.appendChild(searchBlock)
    return searchBlock;
}