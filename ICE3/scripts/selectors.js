console.log("selectors.js is ready");
$(function(){
    alert("DOM is Ready")
});

function highlight(element){
    element.css('background-color', "#fcf30040");
}

function cssSelectors() {
    // updating by tag
    $('p').css('background-color', '#2a9d8f');
    // updating by class
    $('.red-box').css('background-color', '#2a9d8f');
    // updating by id
    $('#list').css('font-size', '40px');

    $('li:odd').css('background-color', '#fcf30040');
}

function traversingTheDOM() {
    // find li with the id list and update color
    $('#list').find('li').css('background-color', '#2a9d8f');
    // traverse up 1 level
    $('#list').parent('div').css('font-size', '24px');
    // traverse all the way up tl the body
    $('#list').parents('body').css('font-size', '24px');
}

function filtering() {
    $('#list').find('li').filter(':even').css('background-color', '#2a9d8f');

    // long function of the shortcut filter
    $('#list').find('li').filter(function (i) {
        return i % 2 === 0;
    }).css('background-color', '#2a9d8f');
}

function addReplaceRemove() {
    $('ul#list li:first').append($("<ul><li> I'm going to be the last item of the first sub-list.</li></ul>"));
    // add to top
    $('ul#list').prepend($("<li>Prepended</li>"));
 
    // use after to add elements after another
    $('.red-box').after('<div class="red-box new-box">New Red Box</div>');
 
    let newText = 'Last night, Darth Vader came down from the planet Vulcan.';
 
    $('p.grumpy').replaceWith(`<p>${newText}</p>`);
}

// cssSelectors();
// traversingTheDOM();
// filtering();
// addReplaceRemove();