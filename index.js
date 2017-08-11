function getHtml5Video(block){

    var url = block.body;

    var width = block.kwargs.width || '100%';
    var height = block.kwargs.height || '100%';
    var loop = block.kwargs.loop ? 'loop' : '';
    var controls = block.kwargs.controls ? 'controls' : '';
    var autoplay = block.kwargs.autoplay ? 'autoplay' : '';

    return '<video src="'+url+'" width="'+width+'" height="'+height+'" '+controls+' '+loop+' '+autoplay+'></video>';
}

/*
{%video%, width = "100%", height = "74", loop = "loop", controls = "controls", autoplay = "autoplay"} http://**.mp4 {%video%}
*/
module.exports = {
    blocks: {
        video: {
            process: function(block) {
                return getHtml5Video(block);
            }
        }
    }
};
