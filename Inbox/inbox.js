window.fluid.dockBadge = '';
var count;
setInterval(updateDockBadge, 500);

function updateDockBadge() {
    
    var els = document.getElementsByClassName('rx');
    
    if (els.length > count) {
        window.console.log('notifying');
        for(i = 0; i < els.length - count; i++) {
            var notifEl = els[i];
            var newemails = document.getElementsByClassName('a7 pH');
            var emailRow = newemails[i];
            var title = notifEl.innerText;
            var text = emailRow.innerText;
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
