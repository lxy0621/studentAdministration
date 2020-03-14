//页面交互逻辑JS


//获取当前时间
function getTime() {
    var myDate;
    var time = document.querySelector('.time');
    setInterval(function () {
        myDate = new Date();
        time.innerHTML = myDate.toLocaleString();
    }, 1000)


}
getTime();

//首页菜单效果
function listStyle() {
    $('.student-gl-content div').mouseover(function () {
        $(this).siblings().stop().fadeTo(500, 0.5);
    })
    $('.student-gl-content div').mouseleave(function () {
        $(this).siblings().stop().fadeTo(500, 1);
    })
}
listStyle();

//学生信息列表
function studentMessage() {
    $('.studentMessage').click(function () {
        $('.student-gl-content').stop().hide();
        $('.studentList').fadeIn(500).show();
    })
}
studentMessage();

//学生信息列表返回
function studentMessageBack() {
    $('.studentList .back').click(function () {
        $('.studentList').stop().hide();
        $('.student-gl-content').fadeIn(500).show();
    })
}
studentMessageBack();

//编辑学生信息
function editStudentMessage() {
    $('.editStudentMessage').click(function () {
        $('.student-gl-content').stop().hide();
        $('.editStudent').fadeIn(500).show();
    })
}
editStudentMessage();

//编辑学生信息返回
function editStudentBack() {
    $('.editStudent .back').click(function () {
        $('.editStudent').stop().hide();
        $('.student-gl-content').fadeIn(500).show();
    })
}
editStudentBack();

//备忘录
function doList(){
    $('.doListMessage').click(function(){
        $('.student-gl-content').stop().hide();
        $('.doList').fadeIn(500).show();
    })
}
doList();

//备忘录返回
function doListBack() {
    $('.doList .back').click(function () {
        $('.doList').stop().hide();
        $('.student-gl-content').fadeIn(500).show();
    })
}
doListBack();

//系统设置
function setting(){
    $('.settingMessage').click(function(){
        $('.student-gl-content').stop().hide();
        $('.setting').fadeIn(500).show();
    })
}
setting();

//系统设置返回
function settingBack() {
    $('.setting .back').click(function () {
        $('.setting').stop().hide();
        $('.student-gl-content').fadeIn(500).show();
    })
}
settingBack();

//新增弹出遮罩层

function addMews(){
    $('.addNew').click(function(){
        $('.addNewsbox').css('display','block');
        $('.zzc').css('display','block');
    })
}
addMews();

function closeAdd(){
    $('.closeAdd').click(function(){
        $('.addNewsbox').css('display','none');
        $('.zzc').css('display','none');
    })
}
closeAdd();

function saveAdd(){
    $('.addSave').mouseover(function(){
        $(this).css('backgroundColor','#ccc');
    })
    $('.addSave').mouseleave(function(){
        $(this).css('backgroundColor','#000');
    })
    $('.addSave').click(function(){
        $('.addNewsbox').css('display','none');
        $('.zzc').css('display','none');
    })
}
saveAdd();


//编辑弹出遮罩层

function closeEdit(){
    $('.closeEdit').click(function(){
        $('.editNewsbox').css('display','none');
        $('.zzc').css('display','none');
    })
}
closeEdit();

function saveEdit(){
    $('.editSave').mouseover(function(){
        $(this).css('backgroundColor','#ccc');
    })
    $('.editSave').mouseleave(function(){
        $(this).css('backgroundColor','#000');
    })
    $('.editSave').click(function(){
        $('.editNewsbox').css('display','none');
        $('.zzc').css('display','none');
    })
}
saveEdit();






