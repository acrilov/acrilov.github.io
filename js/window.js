(function(){window.addEventListener('keydown',function(evt){const a=[123,85,17,16,74,116,73];if(a.includes(evt.keyCode)||(evt.ctrlKey&&(evt.shiftKey&&evt.keyCode===73))||(evt.ctrlKey&&(evt.shiftKey&&evt.keyCode===74))||(evt.ctrlKey&&evt.keyCode===85)){evt.preventDefault()}});document.addEventListener('contextmenu',function(e){e.preventDefault()});const a=document.createElement('style');a.textContent=`body{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}`;document.head.appendChild(a);function seriousObfuscate(a){let b={};let c=/[a-zA-Z_$][a-zA-Z0-9_$]*/g;a=a.replace(c,function(a){if(!b[a]){b[a]='_'+Math.random().toString(36).substring(2,15)}return b[a]});let d=a.split('\n');d=d.sort(()=>Math.random()-.5);let e=d.map(a=>btoa(a));let f=`let _lines=${JSON.stringify(e)};let _decoded=_lines.map(a=>atob(a)).join('\\n');eval(_decoded)`;return f}function advancedAntiDebug(){function a(){if(window.Firebug||window.devtools){return!0}if(void 0!==window.orientation){return!0}try{console.profile();console.profileEnd();return!1}catch(a){return!0}}function b(){c()}function c(){fetch('/api/check_debug', {method: 'POST'}).then(response => {
    if (response.status === 200) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
}).catch(error => {
    console.error('Ошибка при отправке запроса на сервер:', error);
})}setInterval(function(){a()&&b()},500)}advancedAntiDebug();function loadAndSeriousObfuscate(a){fetch(a).then(a=>a.text()).then(b=>{const c=seriousObfuscate(b);const d=document.createElement('script');d.textContent=c;document.head.appendChild(d)}).catch(a=>console.error('error loading script:',a))}loadAndSeriousObfuscate('js/common.js');loadAndSeriousObfuscate('js/index.js');console.warn('!!! СЕРЬЕЗНОЕ ПРЕДУПРЕЖДЕНИЕ !!!')})();
