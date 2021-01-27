function getHtml5Video(block) {

    var url = block.body;

    var width = block.kwargs.width || '100%';
    var height = block.kwargs.height || '100%';

    var items = [];
    items.push("src='" + url + "'");
    items.push("width='" + width + "'");
    items.push("height='" + height + "'");
    if (block.kwargs.poster) {
        items.push("poster='" + block.kwargs.poster + "'")
    }
    if (block.kwargs.autoplay) {
        items.push('autoplay')
    }
    if (block.kwargs.controls) {
        items.push('controls')
    }
    if (block.kwargs.loop) {
        items.push('loop')
    }

    return '<video ' + items.filter(v => !!v).join(' ') + '></video>';
}

module.exports = {
    blocks: {
        video: {
            process: function (block) {
                return getHtml5Video(block);
            }
        }
    }
};
