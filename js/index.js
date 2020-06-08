function heder(flag)
{
    document.querySelector('.header-list').style.display = flag;
    document.querySelector('.header-search-set').style.display = flag;
}

var flag = 'block';
document.querySelector('.header-button').onclick = function()
{
    heder(flag);
    flag == 'none' ? flag = 'block' : flag = 'none' ;
}

window.onresize = function()
{
    if(document.documentElement.clientWidth > 576)
    {
        heder('block');
        flag = 'block';
    }
    else {
        heder(flag == 'none' ? 'block' : 'none');
    }
}