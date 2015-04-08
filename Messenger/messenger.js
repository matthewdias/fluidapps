window.fluid.dockBadge = '';
var count;
setInterval(updateDockBadge, 500);

function updateDockBadge() {
    
    var els = document.getElementsByClassName('_1ht3');
    
    if (els.length > count) {
        window.console.log('notifying');
        for(i = 0; i < els.length - count; i++) {
            var notifEl = els[i];
            var titleel = notifEl.getElementsByClassName('_1ht6')[0];
            var textel = notifEl.getElementsByClassName('_1htf')[0];
            window.console.log(titleel.innerText);
            window.console.log(textel.innerText);
            var title = titleel.innerText;
            var text = textel.innerText;
            window.webkitNotifications.createNotification('', title, text).show();
        }
    }
    
    count = els.length;
    
    if(count > 0) {
        window.fluid.dockBadge = count;
    }
    else {
        window.fluid.dockBadge = '';
    }
    console.log('count ' + count);
}