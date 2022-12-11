function toggleHidden(id,tri){
    const li = document.getElementById(id);
    if(li.classList.contains('hidden')){
        document.getElementById(tri).style.transform='rotate(180deg)';
    }else{
        document.getElementById(tri).style.transform='rotate(-90deg)'
    }
    li.classList.toggle('hidden');
}