window.fluid.dockBadge = '';
var count;
setInterval(updateDockBadge, 500);

function updateDockBadge() {
    
    var els = document.getElementsByClassName('ss');
    var hgts = document.getElementsByClassName('be lR');
    
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
    
    var hgtsct;
    if(hgts.length == 0)
        hgtsct = 0;
    else hgtsct = hgts.length - 1;
    count = els.length + hgtsct;
    
    if(count > 0) {
        window.fluid.dockBadge = count;
    }
    else {
        window.fluid.dockBadge = '';
    }
    console.log('count ' + count);
}
