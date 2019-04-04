/**
 * Created by HP on 2019/2/20.
 */
$("#close").click(function(){
    chrome.runtime.sendMessage({what:"closeTips"});
    //$("#top").css('display','none');
    // 往存储中写入数据
})
$(".know").click(function(){
    chrome.runtime.sendMessage({what:"closeTips"});
    //$("#top").hide();
})