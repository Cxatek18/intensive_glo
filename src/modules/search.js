const search = () => {
    const inputSearch = document.querySelector('.search-wrapper_input');
    const btnSearch   = document.querySelector('.search-btn');
    
    const searchValue = () => {
        console.log(inputSearch.value);
    }

    btnSearch.addEventListener('click', searchValue);
}

export default search;