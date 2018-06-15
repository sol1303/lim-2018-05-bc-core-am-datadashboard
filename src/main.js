let buttonEnter = () => {
    document.getElementById('main').style.display = 'none'; 
    document.getElementsByClassName('data')[0].style.display = 'initial'
};

document.getElementById('enter').addEventListener('click', buttonEnter);