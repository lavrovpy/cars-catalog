export function filterDuplicates(arr){
    const uniqueElements = [];

    for(const el of arr){
        if(!uniqueElements.includes(el)){
            uniqueElements.push(el)
        }
    }

    return uniqueElements;
}

export function sortArray(arr, order){
    if(order === 'asc'){
        return arr.sort((a, b) => {
            return a - b
        })
    } else if(order === 'desc'){
        return arr.sort((a, b) => {
            return b - a
        })
    }
}

export function removeElements(parentElement){
    while(parentElement.lastChild){
        parentElement.removeChild(parentElement.lastChild)
    }
}