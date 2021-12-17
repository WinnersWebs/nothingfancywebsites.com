var fcHeight;var formIsSending=false;
//var formSentErrorResendCaptchaPrompt_oscillateBorderFlag=false;
function fcHeight_transition1(){
    dfc.style.height='0px';
    if(window.innerWidth<=376){dfc.style.margin='0 auto';document.getElementById('fmd').getElementsByClassName('fdd')[0].style.marginBottom='15px';}
    else if(window.innerWidth<=672){dfc.style.margin='5px auto';}
    else{dfc.style.margin='0 auto';}
    fc.removeEventListener('transitionend',fcHeight_transition1,false);
}
function fiChange(){
    for(i=0;i<fi.length;i++){
        if(fi[i].value===""){
            if(window.getComputedStyle(dfc).height!='0px'){
                if(fs.style.display=='flex'){captchaExpired();}
                fc.style.opacity='0';
                fc.addEventListener('transitionend',fcHeight_transition1);
                break;
            }
            else{break;}
        }
        else if(i===fi.length-1&&fi[i]!=""){
            if(captchaRendered===false){grecaptcha.enterprise.render('fc',{'sitekey':captchaSitekey,});fcHeight=fc.getBoundingClientRect().height;captchaRendered=true;}
            if(window.innerWidth<=376){dfc.style.margin='0 auto';document.getElementById('fmd').getElementsByClassName('fdd')[0].style.marginBottom='0';}
            else if(window.innerWidth<=672){dfc.style.margin='5px auto 10px';}
            else{dfc.style.margin='10px auto 20px';}
            dfc.style.height=fcHeight+'px';
            dfc.addEventListener('transitionend',function fcHeight_transition2(){dfc.appendChild(fc);fc.style.position='relative';fc.style.zIndex='0';fc.style.opacity='1';dfc.removeEventListener('transitionend',fcHeight_transition2,false);});
        }
    }
}
const fi=document.getElementById('f').getElementsByClassName('fi');const dfs=document.getElementById('dfs');const fs=document.getElementById('fs');const fsSend=document.getElementById('fsSend');const dfc=document.getElementById('dfc');const fsSentError=document.getElementById('fsSentError');const fsSentErrorResend=document.getElementById('fsSentErrorResend');const fsSentErrorResendDiv=document.getElementById('fsSentErrorResendDiv');for(i=0;i<fi.length;i++){fi[i].addEventListener('change',fiChange);}
function captchaValidated(){
    dfs.style.height='64px';
    if(window.innerWidth<=672){dfs.style.margin='0 auto 15px';}
    else{dfs.style.margin='0 auto 20px';}
    dfs.addEventListener('transitionend',function captchaValidated_transition(event){if(event.propertyName=='height'){fs.style.display='flex';setTimeout(function(){fs.style.opacity='1';dfs.removeEventListener('transitionend',captchaValidated_transition,false);},20);}});
    if(formSentErrorResendCaptchaPrompt_oscillateBorderFlag===true){clearInterval(formSentErrorResendCaptchaPrompt_oscillateBorder);}
}
function captchaExpired(){
    if(formIsSending===false){
        // if(fsSentErrorResend.style.display='flex'){
        //     formSentErrorResendCaptchaPrompt();
        // }
        // else{
            fs.type='button';
            fs.style.transition='opacity .25s';dfs.style.transition='transition:height .125s,margin .125s';
            fs.style.opacity='0';
            fs.addEventListener('transitionend',function captchaExpired_transition(){fs.style.display='none';dfs.style.height='0px';dfs.style.margin='0';fs.style.transition='opacity 1s';dfs.style.transition='transition:height .5s,margin .5s';fs.type='submit';fs.removeEventListener('transitionend',captchaExpired_transition,false);});
        // }
    }
}
// function formSend_transition4(event){
//         if(event.propertyName=='height'){
//             dfc.style.display='none';
//             fc.removeEventListener('transitionend',formSend_transition2,false);
//             //fsSend.removeEventListener('transitionend',formSend_transition,false);
//             //dfc.removeEventListener('transitionend',formSend_transition4,false);
//             //get response
//         }
//         dfc.removeEventListener('transitionend',formSend_transition4);
//     }
function formSend_transition2(event){
    fsSend.getElementsByTagName('img')[0].style.display='none';
    fsSend.getElementsByClassName('loader')[0].style.display='flex';
    setTimeout(function(){fsSend.getElementsByClassName('loader')[0].style.opacity='1';},20);
    dfc.style.height='0';dfc.style.margin='0';
    //dfc.addEventListener('transitionend',formSend_transition4);
    fc.removeEventListener('transitionend',formSend_transition2,false);
}
function formSend(){
    formIsSending=true;
    fsSend.getElementsByTagName('img')[0].style.opacity='0';
    for(i=0;i<fi.length;i++){fi[i].disabled='disabled';fi[i].style.backgroundColor='#ccc';}
    fsSend.addEventListener('transitionend',function formSend_transition(){
        fc.style.transition='all .5s';
        fc.style.opacity='0';
        fc.addEventListener('transitionend',formSend_transition2);
    });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", contactFormEndpoint, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var params = "?nullParam=nullParam&firstName="+document.getElementById('ffn').value+"&lastName="+document.getElementById('fln').value+"&email="+document.getElementById('fe').value+"&phone="+document.getElementById('fp').value+"&message="+document.getElementById('fm').value+"&grecaptchaToken="+grecaptcha.enterprise.getResponse();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            formSent();
        }
    }
    xhr.send(params);
}
function formSent(){
    fs.removeAttribute('onclick');fs.removeAttribute('role');fs.style.cursor='auto';
    let css = '#fs:hover{transition:background-color .25s;background-color:'+formSentCssBackgroundColorRgba+';}#fs:active{transition:background-color .25s;background-color:'+formSentCssBackgroundColorRgba+';}';let styleTag = document.createElement('style');styleTag.appendChild(document.createTextNode(css));document.getElementsByTagName('head')[0].appendChild(styleTag);
    fsSend.style.opacity='0';
    fsSend.addEventListener('transitionend',function(){
        fsSend.style.display='none';
        fsSent.style.display='flex';
        fs.style.borderColor='#0f0';
        setTimeout(function(){
            fsSent.getElementsByTagName('span')[0].style.opacity='1';
            setTimeout(function(){
                fsSent.getElementsByTagName('img')[0].style.opacity='1';
            },500);
        },1000);
    });
}
// function formSentError(){
//     //fc.removeEventListener('transitionend',formSend_transition2,false);
//     formIsSending=false;
//     fs.style.borderColor='#f00';
//     fsSend.style.opacity='0';
//     fsSend.addEventListener('transitionend',function formSentError_transition2(){
//         fsSend.style.display='none';
//         fsSentError.style.display='flex';
//         fsSentError.style.opacity='1';
//         setTimeout(function(){
//             fsSentError.style.opacity='0';
//             fsSentError.addEventListener('transitionend',function formSentError_transition(){
//                 fsSentError.style.display='none';
//                 fsSentErrorResend.style.display='flex';
//                 fsSentErrorResend.style.opacity='1';
//                 fs.style.borderColor='#fff';
//                 grecaptcha.enterprise.reset();
//                 //dfc.style.display='flex';
//                 if(window.innerWidth<=376){dfc.style.margin='0 auto';document.getElementById('fmd').getElementsByClassName('fdd')[0].style.marginBottom='0';}
//                 else if(window.innerWidth<=672){dfc.style.margin='5px auto 10px';}
//                 else{dfc.style.margin='10px auto 20px';}
//                 dfc.style.height=fcHeight+'px';
//                 fc.style.opacity='1';
//                 // dfc.addEventListener('transitionend',function fcHeight_transition2(){dfc.appendChild(fc);fc.style.position='relative';fc.style.zIndex='0';fc.style.opacity='1';
//                 //dfc.removeEventListener('transitionend',fcHeight_transition2,false);
//             });
//         },3000);
//     });
// }
// function formSentErrorResend(){
//     formIsSending=true;
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://us-central1-prod-305618.cloudfunctions.net/dovespropertymaintenance", true);
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     var params = "?firstName="+document.getElementById('ffn').value+"&lastName="+document.getElementById('fln').value+"&email="+document.getElementById('fe').value+"&phone="+document.getElementById('fp').value+"&message="+document.getElementById('').value+"&grecaptchaToken="+grecaptcha.enterprise.getResponse();
//     xhr.send(params);
// }
// var formSentErrorResendCaptchaPrompt_oscillateBorder=setInterval(function(){
//     if(fc.style.borderWidth='2'){fc.style.borderColor='4';}
//     else{fc.style.borderColor='2';}
//     formSentErrorResendCaptchaPrompt_oscillateBorderFlag=true;
// },500);
// function formSentErrorResendCaptchaPrompt(){
//     fc.style.borderWidth='2';
//     fc.addEventListener('transitionend',formSentErrorResendCaptchaPrompt_oscillateBorder);
// }

//transitionBackgroundColor
function focusTransitionBackgroundColor(n,c){
    n.parentNode.style.backgroundColor=c;
}
function blurTransitionBackgroundColor(n,c){
    n.parentNode.style.backgroundColor=c;
}