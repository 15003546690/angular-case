var footer=document.querySelector('.footer');
var a=footer.querySelectorAll('a');
console.log(a[0].childNodes);
for(var i=0;i<a.length;i++){
    a[i].onclick=function(){
        for(var j=0;j< a.length;j++){
            a[j].childNodes[1].className=''
        }
        this.childNodes[1].className='bg'
    }
}

