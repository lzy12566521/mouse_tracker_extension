$(function(){
        $('a')
            .hover(function(){
                if($(this).hasClass('thuir_hover') == false)
                {
                    $(this).addClass('thuir_hover');
                    base_link_message($(this).get(0), "HOVER");
                }
            });

        $('a')
            .click(function(){
                if($(this).hasClass('thuir_click') == false)
                {   
                    $(this).addClass('thuir_click');
                    base_link_message($(this).get(0), "CLICK");
                }
            });
});




function base_link_message(link_obj, action_info){
    var message = {};
    var cur_pos = getMousePos();
    if(link_obj.childNodes.length > 1 && link_obj.childNodes[1].tagName == "IMG") {
            message.type = "image";
    }
    else {
        message.type = "anchor";
    }
    message.x = cur_pos.x;
    message.y = cur_pos.y;
    if(link_obj.href != undefined){
        message.href = link_obj.href;
    }
    send_mouse_info(formInfo(action_info, message));
}
