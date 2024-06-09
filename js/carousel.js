let currentIndex = 1;
const contents = document.querySelectorAll('#haircuts .content')
const totalItems = contents.length

function nextImg(){
    if (currentIndex >= 0 && currentIndex <= totalItems){
        contents[currentIndex].classList.remove('active');
        if (currentIndex == (totalItems - 2)){
            currentIndex = 1;
        } else {
            currentIndex += 1;
        }
        contents[currentIndex].classList.add('active');
        scrollToNext()
    }
}
function prevImg(){
    if (currentIndex >= 0 && currentIndex <= totalItems){
        contents[currentIndex].classList.remove('active');
        if (currentIndex != 1){
            currentIndex -= 1;
        } else if (currentIndex == 1){
            currentIndex = (totalItems - 2)
        }
        contents[currentIndex].classList.add('active');
        scrollToNext()   
    }
}
function scrollToNext() {
    const container = document.getElementById('haircuts');
    const activeImg = contents[currentIndex];
    const containerRect = container.getBoundingClientRect();
    const imgRect = activeImg.getBoundingClientRect();
    const offset = imgRect.left - containerRect.left - (containerRect.width - imgRect.width) / 2;
    container.scrollLeft += offset;
}
scrollToNext()