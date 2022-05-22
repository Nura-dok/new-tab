let imgs=localStorage.getItem('imgs')  
let imgs1=localStorage.getItem('imgs1')
let imgs2=localStorage.getItem('imgs2')
let imgs3=localStorage.getItem('imgs3')
let imgs4=localStorage.getItem('imgs4')
let imgs5=localStorage.getItem('imgs5')
let imgs6=localStorage.getItem('imgs6')
let imgs7=localStorage.getItem('imgs7')
let imgs8=localStorage.getItem('imgs8')
let imgs9=localStorage.getItem('imgs9')


let bgv=localStorage.getItem('back')
let bgv1=localStorage.getItem('back1')
let bgv2=localStorage.getItem('back2')
let bgv3=localStorage.getItem('back3')
let bgv4=localStorage.getItem('back4')
let bgv5=localStorage.getItem('back5')
let bgv6=localStorage.getItem('back6')
let bgv7=localStorage.getItem('back7')
let bgv8=localStorage.getItem('back8')
let bgv9=localStorage.getItem('back9')
let bgv10=localStorage.getItem('back10')
let bgv11=localStorage.getItem('back11')
let bgv12=localStorage.getItem('back12')
let bgv13=localStorage.getItem('back13')
let bgv14=localStorage.getItem('back14')
let bgv15=localStorage.getItem('back15')
let bgv16=localStorage.getItem('back16')
let bgv17=localStorage.getItem('back17')
let bgv18=localStorage.getItem('back18')
let bgv19=localStorage.getItem('back19')
let bgv20=localStorage.getItem('back20')
let bgv21=localStorage.getItem('back21')
let bgv22=localStorage.getItem('back22')
let bgv23=localStorage.getItem('back23')
let bgv24=localStorage.getItem('back24')
let bgv25=localStorage.getItem('back25')
let bgv26=localStorage.getItem('back26')
let bgv27=localStorage.getItem('back27')
let bgv28=localStorage.getItem('back28')
let bgv29=localStorage.getItem('back29')
let bgv30=localStorage.getItem('back30')
let bgv31=localStorage.getItem('back31')
let bgv32=localStorage.getItem('back32')
let bgv33=localStorage.getItem('back33')
let bgv34=localStorage.getItem('back34')
let bgv35=localStorage.getItem('back35')
let bgv36=localStorage.getItem('back36')
let bgv37=localStorage.getItem('back37')
let bgv38=localStorage.getItem('back38')
let bgv39=localStorage.getItem('back39')
let bgv40=localStorage.getItem('back40')
let bgv41=localStorage.getItem('back41')
let bgv42=localStorage.getItem('back42')
let bgv43=localStorage.getItem('back43')
let bgv44=localStorage.getItem('back44')
let bgv45=localStorage.getItem('back45')
let bgv46=localStorage.getItem('back46')
let bgv47=localStorage.getItem('back47')
let bgv48=localStorage.getItem('back48')
let bgv49=localStorage.getItem('back49')


let icn=localStorage.getItem('icon')

setInterval(() => {
    

if(bgv==null){false}else{bgvideo.src = bgv+bgv1+bgv2+bgv3+bgv4+bgv5+bgv6+bgv7+bgv8+bgv9+bgv10+bgv11+bgv12+bgv13+bgv14+bgv15+bgv16+bgv17+bgv18+bgv19+bgv20+bgv21+bgv22+bgv23+bgv24+bgv25+bgv26+bgv27+bgv28+bgv29+bgv30+bgv31+bgv32+bgv33+bgv34+bgv35+bgv36+bgv37+bgv38+bgv39+bgv40+bgv41+bgv42+bgv43+bgv44+bgv45+bgv46+bgv47+bgv48+bgv49}

if(icn==null){false}else{icon.href = icn}

if(imgs==null){false}else{img.src = imgs+imgs1+imgs2+imgs3+imgs4+imgs5+imgs6+imgs7+imgs8+imgs9}

img.style.opacity=localStorage.getItem('ranI')  

inp.style.backgroundColor = localStorage.getItem('colS')+localStorage.getItem('ranS')

if(localStorage.getItem('chekSh')==0){
    img.style.boxShadow ='0 0 0 0'
}else{
img.style.boxShadow ='0 0 80px 10px'+' '+localStorage.getItem('colSh')
}

if(localStorage.getItem('colT')==null){false}else{
document.querySelector('input[type=text]').style.setProperty("--c", localStorage.getItem('colT'));}

if(localStorage.getItem('textP')==null){false}else{
    inp.setAttribute('placeholder', localStorage.getItem('textP'))
}
 
}, 50);



