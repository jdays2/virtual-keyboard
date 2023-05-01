(()=>{"use strict";const e=(e,t)=>{const o=document.createElement(e);return o.classList.add(t),o},t=[{key:"`",keyRu:"ё",code:"Backquote"},{key:"1",code:"Digit1"},{key:"2",code:"Digit2"},{key:"3",code:"Digit3"},{key:"4",code:"Digit4"},{key:"5",code:"Digit5"},{key:"6",code:"Digit6"},{key:"7",code:"Digit7"},{key:"8",code:"Digit8"},{key:"9",code:"Digit9"},{key:"0",code:"Digit0"},{key:"-",code:"Minus"},{key:"=",code:"Equal"},{key:"BACKSPACE",code:"Backspace"},{key:"TAB",code:"Tab"},{key:"q",keyRu:"й",code:"KeyQ"},{key:"w",keyRu:"ц",code:"KeyW"},{key:"e",keyRu:"у",code:"KeyE"},{key:"r",keyRu:"к",code:"KeyR"},{key:"t",keyRu:"е",code:"KeyT"},{key:"y",keyRu:"н",code:"KeyY"},{key:"u",keyRu:"г",code:"KeyU"},{key:"i",keyRu:"ш",code:"KeyI"},{key:"o",keyRu:"щ",code:"KeyO"},{key:"p",keyRu:"з",code:"KeyP"},{key:"[",keyRu:"х",code:"BracketLeft"},{key:"]",keyRu:"ъ",code:"BracketRight"},{key:"\\",code:"Backslash"},{key:"DEL",code:"Delete"},{key:"CAPSLOCK",code:"CapsLock"},{key:"a",keyRu:"ф",code:"KeyA"},{key:"s",keyRu:"ы",code:"KeyS"},{key:"d",keyRu:"в",code:"KeyD"},{key:"f",keyRu:"а",code:"KeyF"},{key:"g",keyRu:"п",code:"KeyG"},{key:"h",keyRu:"р",code:"KeyH"},{key:"j",keyRu:"о",code:"KeyJ"},{key:"k",keyRu:"л",code:"KeyK"},{key:"l",keyRu:"д",code:"KeyL"},{key:";",keyRu:"ж",code:"Semicolon"},{key:"'",keyRu:"э",code:"Quote"},{key:"ENTER",code:"Enter"},{key:"SHIFT",code:"ShiftLeft"},{key:"z",keyRu:"я",code:"KeyZ"},{key:"x",keyRu:"ч",code:"KeyX"},{key:"c",keyRu:"с",code:"KeyC"},{key:"v",keyRu:"м",code:"KeyV"},{key:"b",keyRu:"и",code:"KeyB"},{key:"n",keyRu:"т",code:"KeyN"},{key:"m",keyRu:"ь",code:"KeyM"},{key:",",keyRu:"б",code:"Comma"},{key:".",keyRu:"ю",code:"Period"},{key:"/",keyRu:".",code:"Slash"},{key:"ArrowUp",code:"ArrowUp"},{key:"SHIFT",code:"ShiftRight"},{key:"CTRL",code:"ControlLeft"},{key:"&#128420",code:"MetaLeft"},{key:"ALT",code:"AltLeft"},{key:" ",code:"Space"},{key:"ALT",code:"AltRight"},{key:"ArrowLeft",code:"ArrowLeft"},{key:"ArrowDown",code:"ArrowDown"},{key:"ArrowRight",code:"ArrowRight"},{key:"CTRL",code:"ControlRight"}],o=(t,o,c,y)=>{t.forEach((t=>((t,o,c,y)=>{const k=e("span","button");switch(k.setAttribute("data-code",t.code),t.code){case"Space":k.classList="button space";break;case"Backspace":k.classList="button backspace";break;case"Enter":k.classList="button enter";break;case"CapsLock":k.classList="button capslock";break;case"ShiftRight":k.classList="button shift-right";break;case"ShiftLeft":k.classList="button shift-left"}switch(k.setAttribute("data-code",t.code),k.textContent=o&&t.keyRu?y?t.keyRu.toUpperCase():t.keyRu:y?t.key.toUpperCase():t.key,t.code){case"ArrowLeft":k.textContent="◄";break;case"ArrowRight":k.textContent="►";break;case"ArrowUp":k.textContent="▲";break;case"ArrowDown":k.textContent="▼"}c.appendChild(k)})(t,o,c,y)))};let c=!1;const y=["Backspace","Enter","ShiftRight","ShiftLeft","ArrowLeft","ArrowRight","AltLeft","AltRight","ControlLeft","ControlRight","Delete","CapsLock","Tab","MetaLeft"],k=e("div","root"),d=e("textarea","input");document.body.appendChild(k),document.body.appendChild(d),o(t,!1,k),document.body.addEventListener("mousedown",(e=>{const a=e.target.dataset.code;if(!a)return;const s=document.querySelector(`.button[data-code="${a}"]`);var n,r,i,u,R;s.classList.add("active"),r=!1,i=k,u=d,R=0,"CapsLock"===(n=a)?(R=u.selectionStart,c=!c,i.innerHTML="",o(t,r,i,c)):"Backspace"===n?u.setRangeText("",u.selectionStart-1,u.selectionStart,"end"):"Delete"===n?u.setRangeText("",u.selectionStart,u.selectionStart+1,"end"):"Enter"===n?(u.textContent+="\n",R=u.selectionStart):"ArrowLeft"===n?(R=u.selectionStart)>0&&(u.setSelectionRange(R-1,R-1),R=u.selectionStart):"ArrowRight"===n?(R=u.selectionStart)<u.value.length&&(u.setSelectionRange(R+1,R+1),R=u.selectionStart):"Tab"===n?u.value+="    ":R+=1,((e,t,o)=>{if(y.includes(t))return;const c=e.value,k=e.selectionStart,d=e.selectionEnd,a=c.substring(0,k)+o.innerHTML+c.substring(d),s=k+o.innerHTML.length;e.value=a,e.setSelectionRange(s,s)})(d,a,s)})),document.body.addEventListener("mouseup",(e=>{a(e),d.focus(),document.querySelector(`.button[data-code="${e.target.dataset.code}"]`).classList.remove("active")})),document.body.addEventListener("mouseup",(e=>{a(e),document.querySelector(`.button[data-code="${e.target.dataset.code}"]`).classList.remove("active")}));const a=e=>{const t=e.target.dataset.code;if(t)return t}})();