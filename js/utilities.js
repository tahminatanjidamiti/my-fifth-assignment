function activeButtonById(id) {
    if (activeButton) {
        activeButton.classList.remove('bg-[#B4F461]', 'font-semibold', 'text-xl', 'text-black');
        activeButton.classList.add('font-medium', 'text-[#111111B3]');
    }
    activeButton = document.getElementById(id);
    activeButton.classList.add('bg-[#B4F461]', 'font-semibold', 'text-xl', 'text-black');
    activeButton.classList.remove('font-medium', 'text-[#111111B3]');

}

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
 
