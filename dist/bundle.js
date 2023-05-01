(()=>{"use strict";const e=(e,t)=>{const o=document.createElement(e);return o.classList.add(t),o},t=[{key:"`",keyRu:"ё",code:"Backquote"},{key:"1",code:"Digit1"},{key:"2",code:"Digit2"},{key:"3",code:"Digit3"},{key:"4",code:"Digit4"},{key:"5",code:"Digit5"},{key:"6",code:"Digit6"},{key:"7",code:"Digit7"},{key:"8",code:"Digit8"},{key:"9",code:"Digit9"},{key:"0",code:"Digit0"},{key:"-",code:"Minus"},{key:"=",code:"Equal"},{key:"BACKSPACE",code:"Backspace"},{key:"TAB",code:"Tab"},{key:"q",keyRu:"й",code:"KeyQ"},{key:"w",keyRu:"ц",code:"KeyW"},{key:"e",keyRu:"у",code:"KeyE"},{key:"r",keyRu:"к",code:"KeyR"},{key:"t",keyRu:"е",code:"KeyT"},{key:"y",keyRu:"н",code:"KeyY"},{key:"u",keyRu:"г",code:"KeyU"},{key:"i",keyRu:"ш",code:"KeyI"},{key:"o",keyRu:"щ",code:"KeyO"},{key:"p",keyRu:"з",code:"KeyP"},{key:"[",keyRu:"х",code:"BracketLeft"},{key:"]",keyRu:"ъ",code:"BracketRight"},{key:"\\",code:"Backslash"},{key:"DEL",code:"Delete"},{key:"CAPSLOCK",code:"CapsLock"},{key:"a",keyRu:"ф",code:"KeyA"},{key:"s",keyRu:"ы",code:"KeyS"},{key:"d",keyRu:"в",code:"KeyD"},{key:"f",keyRu:"а",code:"KeyF"},{key:"g",keyRu:"п",code:"KeyG"},{key:"h",keyRu:"р",code:"KeyH"},{key:"j",keyRu:"о",code:"KeyJ"},{key:"k",keyRu:"л",code:"KeyK"},{key:"l",keyRu:"д",code:"KeyL"},{key:";",keyRu:"ж",code:"Semicolon"},{key:"'",keyRu:"э",code:"Quote"},{key:"ENTER",code:"Enter"},{key:"SHIFT",code:"ShiftLeft"},{key:"z",keyRu:"я",code:"KeyZ"},{key:"x",keyRu:"ч",code:"KeyX"},{key:"c",keyRu:"с",code:"KeyC"},{key:"v",keyRu:"м",code:"KeyV"},{key:"b",keyRu:"и",code:"KeyB"},{key:"n",keyRu:"т",code:"KeyN"},{key:"m",keyRu:"ь",code:"KeyM"},{key:",",keyRu:"б",code:"Comma"},{key:".",keyRu:"ю",code:"Period"},{key:"/",keyRu:".",code:"Slash"},{key:"ArrowUp",code:"ArrowUp"},{key:"SHIFT",code:"ShiftRight"},{key:"CTRL",code:"ControlLeft"},{key:"&#128420",code:"MetaLeft"},{key:"ALT",code:"AltLeft"},{key:" ",code:"Space"},{key:"ALT",code:"AltRight"},{key:"ArrowLeft",code:"ArrowLeft"},{key:"ArrowDown",code:"ArrowDown"},{key:"ArrowRight",code:"ArrowRight"},{key:"CTRL",code:"ControlRight"}],o=(t,o,c,a)=>{t.forEach((t=>((t,o,c,a)=>{const y=e("span","button");switch(y.setAttribute("data-code",t.code),t.code){case"Space":y.classList="button space";break;case"Backspace":y.classList="button backspace";break;case"Enter":y.classList="button enter";break;case"CapsLock":y.classList="button capslock";break;case"ShiftRight":y.classList="button shift-right";break;case"ShiftLeft":y.classList="button shift-left"}switch(y.setAttribute("data-code",t.code),y.textContent=o&&t.keyRu?a?t.keyRu.toUpperCase():t.keyRu:a?t.key.toUpperCase():t.key,t.code){case"ArrowLeft":y.textContent="◄";break;case"ArrowRight":y.textContent="►";break;case"ArrowUp":y.textContent="▲";break;case"ArrowDown":y.textContent="▼"}c.appendChild(y)})(t,o,c,a))),alert(o)},c=(e,c,a,y,d,k)=>{switch(e){case"CapsLock":case"ShiftRight":case"ShiftLeft":k=!k,a.innerHTML="",o(t,c,a,k);break;case"Backspace":y.setRangeText("",y.selectionStart-1,y.selectionStart,"end");break;case"Delete":y.setRangeText("",y.selectionStart,y.selectionStart+1,"end");break;case"Enter":y.textContent+="\n",d=y.selectionStart;break;case"ArrowLeft":(d=y.selectionStart)>0&&(y.setSelectionRange(d-1,d-1),d=y.selectionStart);break;case"ArrowRight":(d=y.selectionStart)<y.value.length&&(y.setSelectionRange(d+1,d+1),d=y.selectionStart);break;case"Tab":y.value+="    ";break;default:d+=1}},a=(e,t,c,a)=>{a&&(a=!1,c.innerHTML="",o(e,t,c,a))},y=["Backspace","Enter","ShiftRight","ShiftLeft","ArrowLeft","ArrowRight","AltLeft","AltRight","ControlLeft","ControlRight","Delete","CapsLock","Tab","MetaLeft"],d=(e,t,o)=>{if(y.includes(t))return;const c=e.value,a=e.selectionStart,d=e.selectionEnd,k=c.substring(0,a)+o.innerHTML+c.substring(d),s=a+o.innerHTML.length;e.value=k,e.setSelectionRange(s,s)},k=e("div","root"),s=e("textarea","input");let n=!1;document.body.appendChild(k),document.body.appendChild(s),o(t,n,k),document.body.addEventListener("mousedown",(e=>{const t=e.target.dataset.code;if(!t)return;const o=document.querySelector(`.button[data-code="${t}"]`);o.classList.add("active"),c(t,n,k,s,0),d(s,t,o)})),document.body.addEventListener("mouseup",(e=>{s.focus();const o=e.target.dataset.code;o&&(s.focus(),"ShiftRight"!==o&&"ShiftLeft"!==o||a(t,n,k,s),document.querySelector(`.button[data-code="${e.target.dataset.code}"]`).classList.remove("active"))})),document.addEventListener("keydown",(e=>{const a=e.code;document.activeElement.blur(),s.focus(),e.preventDefault(),c(a,n,k,s,0);const y=document.querySelector(`.button[data-code="${e.code}"]`);y.classList.add("active"),d(s,a,y),((e,t,c,a,y)=>{t.altKey&&t.ctrlKey&&(e=!e,c.innerHTML="",o(y,e,c,a))})(n,e,k,!1,t)})),document.addEventListener("keyup",(e=>{const o=e.code;document.querySelector(`.button[data-code="${o}"]`).classList.remove("active"),"ShiftRight"!==o&&"ShiftLeft"!==o||a(t,n,k,s)}))})();