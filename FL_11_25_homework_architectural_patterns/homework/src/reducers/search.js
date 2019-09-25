const search = (state = 0, action) => {
    // const input = document.getElementById("search");
    // input.addEventListener('change', (event) =>{
    //     console.log(event.target.value);
    // })

    // console.log(input.value);
    // console.log(input.innerHTML);
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}
export default search;

// filterList(value: string) {
//     let newList = [];
//     for(let event of this.news){
//       if (event.name.includes(value)) {
//         newList.push(event);
//       }
//     }
//     this.news = newList;
//   }