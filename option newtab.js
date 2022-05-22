
// document.querySelector(".r-i").addEventListener('input', () => {
//     let data = document.querySelector(".r-i").value;
//     console.log(data);
// });

// document.querySelector(".f-s").addEventListener('input', () => {
//     let data = document.querySelector(".f-s").files[0];
//     localStorage.setItem('imgs', URL.createObjectURL(data))
//     let dts=localStorage.getItem('imgs')
//     console.log(dts); 
// });


// КАРТИНКА НАД ПОИСКОВИКОМ
document.querySelector(".f-s").addEventListener("input", function () {
      var fr = new FileReader();
      fr.addEventListener("load", function () {
        src=fr.result
        let a = src.substring(0,src.length /10);
        let a1 = src.substring(src.length /10, src.length/100*20);
        let a2 = src.substring(src.length /100*20, src.length/100*30);
        let a3 = src.substring(src.length/100*30, src.length/100*40);
        let a4 = src.substring(src.length/100*40, src.length/100*50)
        let a5 = src.substring(src.length/100*50, src.length/100*60);
        let a6 = src.substring(src.length/100*60, src.length/100*70);
        let a7 = src.substring(src.length/100*70, src.length/100*80);
        let a8 = src.substring(src.length/100*80, src.length/100*90);
        let a9 = src.substring(src.length/100*90, src.length);
        
        localStorage.setItem('imgs', a)
        localStorage.setItem('imgs1', a1)
        localStorage.setItem('imgs2', a2)
        localStorage.setItem('imgs3', a3)
        localStorage.setItem('imgs4', a4)
        localStorage.setItem('imgs5', a5)
        localStorage.setItem('imgs6', a6)
        localStorage.setItem('imgs7', a7)
        localStorage.setItem('imgs8', a8)
        localStorage.setItem('imgs9', a9)
      }, false);
  
      fr.readAsDataURL(this.files[0]); 
  });


// ЗАДНИЙ ФОН
document.querySelector(".f-b").addEventListener('input', function () {
    var fr1 = new FileReader();
    
      fr1.addEventListener("load", function () {
  
        src1=fr1.result
        let b1 = src1.substring(0,src1.length/100*2);
        let b2 = src1.substring(src1.length/100*2, src1.length/100*4);
        let b3 = src1.substring(src1.length/100*4, src1.length/100*6);
        let b4 = src1.substring(src1.length/100*6, src1.length/100*8);
        let b5 = src1.substring(src1.length/100*8, src1.length/100*10);
        let b6 = src1.substring(src1.length/100*10, src1.length/100*12);
        let b7 = src1.substring(src1.length/100*12, src1.length/100*14);
        let b8 = src1.substring(src1.length/100*14, src1.length/100*16);
        let b9 = src1.substring(src1.length/100*16, src1.length/100*18);
        let b10 = src1.substring(src1.length/100*18, src1.length/100*20);
        let b11 = src1.substring(src1.length/100*20, src1.length/100*2);
        let b12 = src1.substring(src1.length/100*22, src1.length/100*24);
        let b13 = src1.substring(src1.length/100*24, src1.length/100*26);
        let b14 = src1.substring(src1.length/100*26, src1.length/100*28);
        let b15 = src1.substring(src1.length/100*28, src1.length/100*30);
        let b16 = src1.substring(src1.length/100*30, src1.length/100*32);
        let b17 = src1.substring(src1.length/100*32, src1.length/100*34);
        let b18 = src1.substring(src1.length/100*34, src1.length/100*36);
        let b19 = src1.substring(src1.length/100*36, src1.length/100*38);
        let b20 = src1.substring(src1.length/100*38, src1.length/100*40);
        let b21 = src1.substring(src1.length/100*40, src1.length/100*42);
        let b22 = src1.substring(src1.length/100*42, src1.length/100*44);
        let b23 = src1.substring(src1.length/100*44, src1.length/100*46);
        let b24 = src1.substring(src1.length/100*46, src1.length/100*48);
        let b25 = src1.substring(src1.length/100*48, src1.length/100*50);
        let b26 = src1.substring(src1.length/100*50, src1.length/100*52);
        let b27 = src1.substring(src1.length/100*52, src1.length/100*54);
        let b28 = src1.substring(src1.length/100*54, src1.length/100*56);
        let b29 = src1.substring(src1.length/100*56, src1.length/100*58);
        let b30 = src1.substring(src1.length/100*58, src1.length/100*60);
        let b31 = src1.substring(src1.length/100*60, src1.length/100*62);
        let b32 = src1.substring(src1.length/100*62, src1.length/100*64);
        let b33 = src1.substring(src1.length/100*64, src1.length/100*66);
        let b34 = src1.substring(src1.length/100*66, src1.length/100*68);
        let b35 = src1.substring(src1.length/100*68, src1.length/100*70);
        let b36 = src1.substring(src1.length/100*70, src1.length/100*72);
        let b37 = src1.substring(src1.length/100*72, src1.length/100*74);
        let b38 = src1.substring(src1.length/100*74, src1.length/100*76);
        let b39 = src1.substring(src1.length/100*76, src1.length/100*78);
        let b40 = src1.substring(src1.length/100*78, src1.length/100*80);
        let b41 = src1.substring(src1.length/100*80, src1.length/100*82);
        let b42 = src1.substring(src1.length/100*82, src1.length/100*84);
        let b43 = src1.substring(src1.length/100*84, src1.length/100*86);
        let b44 = src1.substring(src1.length/100*86, src1.length/100*88);
        let b45 = src1.substring(src1.length/100*88, src1.length/100*90);
        let b46 = src1.substring(src1.length/100*90, src1.length/100*92);
        let b47 = src1.substring(src1.length/100*92, src1.length/100*94);
        let b48 = src1.substring(src1.length/100*94, src1.length/100*96);
        let b49 = src1.substring(src1.length/100*96, src1.length/100*98);
        let b50 = src1.substring(src1.length/100*98, src1.length);



        localStorage.setItem('back', b1);
        localStorage.setItem('back1', b2);
        localStorage.setItem('back2', b3);
        localStorage.setItem('back3', b4);
        localStorage.setItem('back4', b5);
        localStorage.setItem('back5', b6);
        localStorage.setItem('back6', b7);
        localStorage.setItem('back7', b8);
        localStorage.setItem('back8', b9);
        localStorage.setItem('back9', b10);
        localStorage.setItem('back10', b11);
        localStorage.setItem('back11', b12);
        localStorage.setItem('back12', b13);
        localStorage.setItem('back13', b14);
        localStorage.setItem('back14', b15);
        localStorage.setItem('back15', b16);
        localStorage.setItem('back16', b17);
        localStorage.setItem('back17', b18);
        localStorage.setItem('back18', b19);
        localStorage.setItem('back19', b20);
        localStorage.setItem('back20', b21);
        localStorage.setItem('back21', b22);
        localStorage.setItem('back22', b23);
        localStorage.setItem('back23', b24);
        localStorage.setItem('back24', b25);
        localStorage.setItem('back25', b26);
        localStorage.setItem('back26', b27);
        localStorage.setItem('back27', b28);
        localStorage.setItem('back28', b29);
        localStorage.setItem('back29', b30);
        localStorage.setItem('back30', b31);
        localStorage.setItem('back31', b32);
        localStorage.setItem('back32', b33);
        localStorage.setItem('back33', b34);
        localStorage.setItem('back34', b35);
        localStorage.setItem('back35', b36);
        localStorage.setItem('back36', b37);
        localStorage.setItem('back37', b38);
        localStorage.setItem('back38', b39);
        localStorage.setItem('back39', b40);
        localStorage.setItem('back40', b41);
        localStorage.setItem('back41', b42);
        localStorage.setItem('back42', b43);
        localStorage.setItem('back43', b44);
        localStorage.setItem('back44', b45);
        localStorage.setItem('back45', b46);
        localStorage.setItem('back46', b47);
        localStorage.setItem('back47', b48);
        localStorage.setItem('back48', b49);
        localStorage.setItem('back39', b50);
        
      }, false);
  
      fr1.readAsDataURL(this.files[0]); 
});

// ИКОНКА ВКЛАДКИ 
document.querySelector(".f-i").addEventListener('input', function () {
    var fr2 = new FileReader();
      fr2.addEventListener("load", function () {
        localStorage.setItem('icon', fr2.result)
      }, false);
      fr2.readAsDataURL(this.files[0]);  
});

// Прозрачность картинки над поисковиком
document.querySelector(".r-i").addEventListener('input', () => {
    let data = document.querySelector(".r-i").value;
    localStorage.setItem('ranI', data)
});
if(localStorage.getItem('ranI')==null){false}else{
ri.setAttribute('value', localStorage.getItem('ranI'))}

// Цвет поисковика
document.querySelector(".c-s").addEventListener('input', () => {
  let data = document.querySelector(".c-s").value;
  localStorage.setItem('colS', data)
});
if(localStorage.getItem('colS')==null){false}else{
cs.setAttribute('value', localStorage.getItem('colS'))}

// Прозрачность поисковика
document.querySelector(".r-s").addEventListener('input', () => {
  let data = document.querySelector(".r-s").value;
  localStorage.setItem('ranS', data)
});
if(localStorage.getItem('ranS')==null){false}else{
rs.setAttribute('value', localStorage.getItem('ranS'))}

// Цвет тени картинки
document.querySelector(".c-sh").addEventListener('input', () => {
  let data = document.querySelector(".c-sh").value;
  localStorage.setItem('colSh', data)
});
if(localStorage.getItem('colSh')==null){false}else{
csh.setAttribute('value', localStorage.getItem('colSh'))}
 
// тень картинки над поисковиком
document.querySelector(".ch-s").addEventListener('change', () => {
  if(chs.checked){
    csh.removeAttribute('disabled')
    localStorage.setItem('chekSh', 1)
  }else{
    csh.setAttribute('disabled', 1)
    localStorage.setItem('chekSh', 0)
  }});
if(localStorage.getItem('chekSh')==0){
    csh.setAttribute('disabled', 1)
    chs.removeAttribute('checked') }

// Цвет текста заполнителя
document.querySelector(".c-t").addEventListener('input', () => {
  let data = document.querySelector(".c-t").value;
  localStorage.setItem('colT', data)
});
if(localStorage.getItem('colT')==null){false}else{
ct.setAttribute('value', localStorage.getItem('colT'))}

// Изменить текст заполнителя
document.querySelector(".t-p").addEventListener('input', () => {
  let data = document.querySelector(".t-p").value;
  localStorage.setItem('textP', data)
});
if(localStorage.getItem('textP')==null){false}else{
  tp.setAttribute('value', localStorage.getItem('textP'))
  }

// Изменить текст заглавления вкладки
document.querySelector(".t-t").addEventListener('input', () => {
  let data = document.querySelector(".t-t").value;
  localStorage.setItem('textT', data)
});
if(localStorage.getItem('textT')==null){false}else{
tt.setAttribute('value', localStorage.getItem('textT'))
}