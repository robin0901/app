$("#nav-footprint").click(function() {
    toggleNavBar($(this));
    window.location = '/';
});

$("#nav-checklist").click(function() {
    toggleNavBar($(this));
    window.location = '/checklist';
});

$("#nav-ranking").click(function() {
    toggleNavBar($(this));
    window.location = '/ranking';
});

function toggleNavBar(btn) {
    let elems = [$("#nav-footprint"), $("#nav-checklist"), $("#nav-ranking")];
    let filenames = ["footprint", "checklist", "rank"];

    elems.forEach(function (elem, i) {
        let filename = filenames[i];

        let imageTag = elem.children("img")[0];
        let textTag = elem.children("div")[0];
        if ($(btn).get(0) == $(elem).get(0)) {
            $(imageTag).attr("src", `/static/image/${filename}_green.svg`);
            $(textTag).addClass("txt-green");
            elem.addClass("selected");
        }
        else {
            $(imageTag).attr("src", `/static/image/${filename}.svg`);
            $(textTag).removeClass("txt-green");
            elem.removeClass("selected");
        }
    });
}