(()=>{"use strict";const e=(e,t)=>{const o=document.createElement(e);return o.classList.add(t),o};let t=!1;const o=(e,o,c,y)=>{switch(e){case"CapsLock":case"ShiftRight":case"ShiftLeft":t=!t,o.innerHTML="",k(o);break;case"Backspace":c.setRangeText("",c.selectionStart-1,c.selectionStart,"end");break;case"Delete":c.setRangeText("",c.selectionStart,c.selectionStart+1,"end");break;case"Enter":c.value+="\n",y=c.selectionStart;break;case"ArrowLeft":(y=c.selectionStart)>0&&(c.setSelectionRange(y-1,y-1),y=c.selectionStart);break;case"ArrowRight":(y=c.selectionStart)<c.value.length&&(c.setSelectionRange(y+1,y+1),y=c.selectionStart);break;case"Tab":c.value+="    ";break;default:y+=1}},c=e=>{t&&(t=!t,e.innerHTML="",k(e))},y=[{key:"`",keyRu:"ё",code:"Backquote"},{key:"1",code:"Digit1"},{key:"2",code:"Digit2"},{key:"3",code:"Digit3"},{key:"4",code:"Digit4"},{key:"5",code:"Digit5"},{key:"6",code:"Digit6"},{key:"7",code:"Digit7"},{key:"8",code:"Digit8"},{key:"9",code:"Digit9"},{key:"0",code:"Digit0"},{key:"-",code:"Minus"},{key:"=",code:"Equal"},{key:"BACKSPACE",code:"Backspace"},{key:"TAB",code:"Tab"},{key:"q",keyRu:"й",code:"KeyQ"},{key:"w",keyRu:"ц",code:"KeyW"},{key:"e",keyRu:"у",code:"KeyE"},{key:"r",keyRu:"к",code:"KeyR"},{key:"t",keyRu:"е",code:"KeyT"},{key:"y",keyRu:"н",code:"KeyY"},{key:"u",keyRu:"г",code:"KeyU"},{key:"i",keyRu:"ш",code:"KeyI"},{key:"o",keyRu:"щ",code:"KeyO"},{key:"p",keyRu:"з",code:"KeyP"},{key:"[",keyRu:"х",code:"BracketLeft"},{key:"]",keyRu:"ъ",code:"BracketRight"},{key:"\\",code:"Backslash"},{key:"DEL",code:"Delete"},{key:"CAPSLOCK",code:"CapsLock"},{key:"a",keyRu:"ф",code:"KeyA"},{key:"s",keyRu:"ы",code:"KeyS"},{key:"d",keyRu:"в",code:"KeyD"},{key:"f",keyRu:"а",code:"KeyF"},{key:"g",keyRu:"п",code:"KeyG"},{key:"h",keyRu:"р",code:"KeyH"},{key:"j",keyRu:"о",code:"KeyJ"},{key:"k",keyRu:"л",code:"KeyK"},{key:"l",keyRu:"д",code:"KeyL"},{key:";",keyRu:"ж",code:"Semicolon"},{key:"'",keyRu:"э",code:"Quote"},{key:"ENTER",code:"Enter"},{key:"SHIFT",code:"ShiftLeft"},{key:"z",keyRu:"я",code:"KeyZ"},{key:"x",keyRu:"ч",code:"KeyX"},{key:"c",keyRu:"с",code:"KeyC"},{key:"v",keyRu:"м",code:"KeyV"},{key:"b",keyRu:"и",code:"KeyB"},{key:"n",keyRu:"т",code:"KeyN"},{key:"m",keyRu:"ь",code:"KeyM"},{key:",",keyRu:"б",code:"Comma"},{key:".",keyRu:"ю",code:"Period"},{key:"/",keyRu:".",code:"Slash"},{key:"ArrowUp",code:"ArrowUp"},{key:"SHIFT",code:"ShiftRight"},{key:"CTRL",code:"ControlLeft"},{key:"&#128420",code:"MetaLeft"},{key:"ALT",code:"AltLeft"},{key:" ",code:"Space"},{key:"ALT",code:"AltRight"},{key:"ArrowLeft",code:"ArrowLeft"},{key:"ArrowDown",code:"ArrowDown"},{key:"ArrowRight",code:"ArrowRight"},{key:"CTRL",code:"ControlRight"}];let a=!1;const k=o=>{y.forEach((c=>((o,c)=>{const y=e("span","button");switch(y.setAttribute("data-code",o.code),o.code){case"Space":y.classList="button space";break;case"Backspace":y.classList="button backspace";break;case"Enter":y.classList="button enter";break;case"CapsLock":y.classList="button capslock";break;case"ShiftRight":y.classList="button shift-right";break;case"ShiftLeft":y.classList="button shift-left"}switch(y.setAttribute("data-code",o.code),y.innerHTML=!0===a?t?o.keyRu?o.keyRu.toUpperCase():o.key:o.keyRu?o.keyRu:o.key:t?o.key.toUpperCase():o.key,o.code){case"ArrowLeft":y.textContent="◄";break;case"ArrowRight":y.textContent="►";break;case"ArrowUp":y.textContent="▲";break;case"ArrowDown":y.textContent="▼"}c.appendChild(y)})(c,o)))},d=["Backspace","Enter","ShiftRight","ShiftLeft","ArrowLeft","ArrowRight","AltLeft","AltRight","ControlLeft","ControlRight","Delete","CapsLock","Tab","MetaLeft"],s=(e,t,o)=>{if(d.includes(t))return;const c=e.value,y=e.selectionStart,a=e.selectionEnd,k=c.substring(0,y)+o.innerHTML+c.substring(a),s=y+o.innerHTML.length;e.value=k,e.setSelectionRange(s,s)},n=e("div","root"),r=e("textarea","input");r.placeholder="Поле для ввода текста: \n Для смены раскладки leftCTRL + leftAlt",document.body.appendChild(n),document.body.appendChild(r),k(n),document.body.addEventListener("mousedown",(e=>{const t=e.target.dataset.code;if(!t)return;const c=document.querySelector(`.button[data-code="${t}"]`);c.classList.add("active"),o(t,n,r,0),s(r,t,c)})),document.body.addEventListener("mouseup",(e=>{r.focus();const t=e.target.dataset.code;t&&(r.focus(),"ShiftRight"!==t&&"ShiftLeft"!==t||c(n),document.querySelector(`.button[data-code="${e.target.dataset.code}"]`).classList.remove("active"))})),document.addEventListener("keydown",(e=>{const t=e.code;document.activeElement.blur(),r.focus(),e.preventDefault(),o(t,n,r,0);const c=document.querySelector(`.button[data-code="${e.code}"]`);c.classList.add("active"),s(r,t,c)})),document.addEventListener("keyup",(e=>{const t=e.code;document.querySelector(`.button[data-code="${t}"]`).classList.remove("active"),"ShiftRight"!==t&&"ShiftLeft"!==t||c(n),((e,t)=>{e.ctrlKey&&"Alt"===e.key&&(a=!a,t.innerHTML="",k(t))})(e,n)}))})();