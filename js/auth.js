let auth = localStorage.getItem('o');
if(!auth) {
    location.href = "./index.html";
}

function loginout() {
    localStorage.removeItem('o');
    localStorage.removeItem('u');
    location.href = './index.html';
}

function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
    var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
    var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
    var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes());
    //var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
    return Y+M+D+h+m;
}

function getQueryString(name) {
    const url = new URL(location.href);
    return url.searchParams.get(name);
}

function createPage(total, cur_page) {
    let pgcons = '<div id="page-box">';
    if(total < 10) {
        for(i=1; i <= total; i++) {
            if(i==cur_page) {
                pgcons += `<div class="plist cur">${i}</div>`;
            } else {
                pgcons += `<div class="plist">${i}</div>`;
            }
        }
    } else {
        let start = cur_page - 4;
        if(start > 2){
            pgcons += `<div class="plist">1</div>...`
        } else if(start < 1) {
            start = 1;
        }
        let end = start + 8;
        if(end > total) {
            end = total;
        }
        for(i=start; i <= end; i++) {
            if(i==cur_page) {
                pgcons += `<div class="plist cur">${i}</div>`;
            } else {
                pgcons += `<div class="plist">${i}</div>`;
            }
        }
        if(end < (total - 1)) {
            pgcons += `...<div class="plist">${total}</div>`
        }
    }
    pgcons += '<div class="clean"></div></div>';

    return pgcons;
}