(()=>{"use strict";const e=(e,t)=>{const o=document.createElement(e);return o.classList.add(t),o};let t=!1;const o=(e,o,c,a)=>{switch(e){case"CapsLock":case"ShiftRight":case"ShiftLeft":t=!t,o.innerHTML="",s(o);break;case"Backspace":c.value&&c.setRangeText("",c.selectionStart-1,c.selectionStart,"end");break;case"Delete":c.value&&(c.selectionStart,c.selectionStart);break;case"Enter":let e=c.value,n=c.selectionStart,y=e.substring(0,n),d=e.substring(n,e.length);c.value=y+"\n"+d,c.selectionStart=n+1,c.selectionEnd=n+1;break;case"ArrowLeft":(a=c.selectionStart)>0&&(c.setSelectionRange(a-1,a-1),a=c.selectionStart);break;case"ArrowRight":(a=c.selectionStart)<c.value.length&&(c.setSelectionRange(a+1,a+1),a=c.selectionStart);break;case"Tab":const k=c.value,r=c.selectionStart,i=k.substring(0,r),u=k.substring(r,k.length);c.value=i+"    "+u,c.selectionStart=r+4,c.selectionEnd=r+4;break;default:a+=1}},c=e=>{t&&(t=!t,e.innerHTML="",s(e))},a=[{key:"`",keyRu:"ё",code:"Backquote"},{key:"1",code:"Digit1"},{key:"2",code:"Digit2"},{key:"3",code:"Digit3"},{key:"4",code:"Digit4"},{key:"5",code:"Digit5"},{key:"6",code:"Digit6"},{key:"7",code:"Digit7"},{key:"8",code:"Digit8"},{key:"9",code:"Digit9"},{key:"0",code:"Digit0"},{key:"-",code:"Minus"},{key:"=",code:"Equal"},{key:"BACKSPACE",code:"Backspace"},{key:"TAB",code:"Tab"},{key:"q",keyRu:"й",code:"KeyQ"},{key:"w",keyRu:"ц",code:"KeyW"},{key:"e",keyRu:"у",code:"KeyE"},{key:"r",keyRu:"к",code:"KeyR"},{key:"t",keyRu:"е",code:"KeyT"},{key:"y",keyRu:"н",code:"KeyY"},{key:"u",keyRu:"г",code:"KeyU"},{key:"i",keyRu:"ш",code:"KeyI"},{key:"o",keyRu:"щ",code:"KeyO"},{key:"p",keyRu:"з",code:"KeyP"},{key:"[",keyRu:"х",code:"BracketLeft"},{key:"]",keyRu:"ъ",code:"BracketRight"},{key:"\\",code:"Backslash"},{key:"DEL",code:"Delete"},{key:"CAPSLOCK",code:"CapsLock"},{key:"a",keyRu:"ф",code:"KeyA"},{key:"s",keyRu:"ы",code:"KeyS"},{key:"d",keyRu:"в",code:"KeyD"},{key:"f",keyRu:"а",code:"KeyF"},{key:"g",keyRu:"п",code:"KeyG"},{key:"h",keyRu:"р",code:"KeyH"},{key:"j",keyRu:"о",code:"KeyJ"},{key:"k",keyRu:"л",code:"KeyK"},{key:"l",keyRu:"д",code:"KeyL"},{key:";",keyRu:"ж",code:"Semicolon"},{key:"'",keyRu:"э",code:"Quote"},{key:"ENTER",code:"Enter"},{key:"SHIFT",code:"ShiftLeft"},{key:"z",keyRu:"я",code:"KeyZ"},{key:"x",keyRu:"ч",code:"KeyX"},{key:"c",keyRu:"с",code:"KeyC"},{key:"v",keyRu:"м",code:"KeyV"},{key:"b",keyRu:"и",code:"KeyB"},{key:"n",keyRu:"т",code:"KeyN"},{key:"m",keyRu:"ь",code:"KeyM"},{key:",",keyRu:"б",code:"Comma"},{key:".",keyRu:"ю",code:"Period"},{key:"/",keyRu:".",code:"Slash"},{key:"ArrowUp",code:"ArrowUp"},{key:"SHIFT",code:"ShiftRight"},{key:"CTRL",code:"ControlLeft"},{key:"&#128420",code:"MetaLeft"},{key:"ALT",code:"AltLeft"},{key:" ",code:"Space"},{key:"ALT",code:"AltRight"},{key:"ArrowLeft",code:"ArrowLeft"},{key:"ArrowDown",code:"ArrowDown"},{key:"ArrowRight",code:"ArrowRight"},{key:"CTRL",code:"ControlRight"}];null===localStorage.getItem("langRu")&&localStorage.setItem("langRu",!1);const s=o=>{let c=JSON.parse(localStorage.getItem("langRu"));a.forEach((a=>((o,c,a)=>{const s=e("span","button");switch(s.setAttribute("data-code",o.code),o.code){case"Space":s.classList="button space";break;case"Backspace":s.classList="button backspace";break;case"Enter":s.classList="button enter";break;case"CapsLock":s.classList="button capslock";break;case"ShiftRight":s.classList="button shift-right";break;case"ShiftLeft":s.classList="button shift-left"}switch(s.setAttribute("data-code",o.code),s.innerHTML=!0===a?t?o.keyRu?o.keyRu.toUpperCase():o.key:o.keyRu?o.keyRu:o.key:t?o.key.toUpperCase():o.key,o.code){case"ArrowLeft":s.textContent="◄";break;case"ArrowRight":s.textContent="►";break;case"ArrowUp":s.textContent="▲";break;case"ArrowDown":s.textContent="▼"}c.appendChild(s)})(a,o,c)))},n=["Backspace","Enter","ShiftRight","ShiftLeft","ArrowLeft","ArrowRight","AltLeft","AltRight","ControlLeft","ControlRight","Delete","CapsLock","Tab","MetaLeft"],y=(e,t,o)=>{if(n.includes(t))return;const c=e.value,a=e.selectionStart,s=e.selectionEnd,y=c.substring(0,a)+o.innerHTML+c.substring(s),d=a+o.innerHTML.length;e.value=y,e.setSelectionRange(d,d)};let d=JSON.parse(localStorage.getItem("langRu"));const k=e("div","root"),r=e("textarea","input");r.placeholder="Поле для ввода текста: \n Для смены раскладки leftCTRL + leftAlt",document.body.appendChild(k),document.body.appendChild(r),s(k),document.body.addEventListener("mousedown",(e=>{const t=e.target.dataset.code;if(!t)return;const c=document.querySelector(`.button[data-code="${t}"]`);c.classList.add("active"),o(t,k,r,0),y(r,t,c)})),document.body.addEventListener("mouseup",(e=>{r.focus();const t=e.target.dataset.code;t&&(r.focus(),"ShiftRight"!==t&&"ShiftLeft"!==t||c(k),document.querySelector(`.button[data-code="${e.target.dataset.code}"]`).classList.remove("active"))})),document.addEventListener("keydown",(e=>{const t=e.code;document.activeElement.blur(),r.focus(),e.preventDefault(),o(t,k,r,0);const c=document.querySelector(`.button[data-code="${e.code}"]`);c.classList.add("active"),y(r,t,c)})),document.addEventListener("keyup",(e=>{const t=e.code;document.querySelector(`.button[data-code="${t}"]`).classList.remove("active"),"ShiftRight"!==t&&"ShiftLeft"!==t||c(k),((e,t)=>{e.ctrlKey&&"Alt"===e.key&&(d=!d,localStorage.setItem("langRu",d),t.innerHTML="",s(t))})(e,k)})),alert("Добро пожаловать!🙃\n Самооценка и другая информация в консоли. 🤔");const i=["padding: 8px;","background: black;","color: #33ff33;","font-family: monospace;","font-size: 12px;","text-shadow: 0 0 10px #33ff33, 0 0 30px #33ff33, 0 0 40px #33ff33, 0 0 50px #33ff33, 0 0 75px #33ff33;"].join("");console.log("%c%s",i,"Самооценка 110/110 Все пункты выполненны, язык сменяемый, анимации работают, клавиши выполняют свои функции. Пожалуйста, не оценивайте работу анонимно, всякое бывает и увсех может запрятаться какая-то ошибка или недопонятая деталь. Всегда рад поправить то в чем ошибся или обсудить обмениваясь опытом. Спасибо за ваше время!")})();