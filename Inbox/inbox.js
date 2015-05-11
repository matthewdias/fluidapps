window.fluid.dockBadge = '';
var count;
setInterval(updateDockBadge, 500);

function updateDockBadge() {
    
    var els = document.getElementsByClassName('ss');
    var hgts = document.getElementsByClassName('qb')[0].innerText;
    
    if (els.length > count) {
        window.console.log('notifying');
        for(i = 0; i < els.length - count; i++) {
            var notifEl = els[i];
            var newemails = document.getElementsByClassName('bg qG');
            var emailRow = newemails[i];
            var title = notifEl.innerText;
            var text = emailRow.innerText;
            window.webkitNotifications.createNotification('', title, text).show();
        }
    }
    
    count = els.length + eval(hgts);
    
    if(count > 0) {
        window.fluid.dockBadge = count;
    }
    else {
        window.fluid.dockBadge = '';
    }
    console.log('hgts ' + hgts.length);
}
