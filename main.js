$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })
    $('#botao-reset').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const urlNewImage = $('#url-img').val()
        
        const newItem = $('<li style="display: none"></li>')

        $(`<img src="${urlNewImage}"/>`).appendTo(newItem)
        $(`
            <div class="overlay-img-link">
                <a href="${urlNewImage}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem)

        $(newItem).appendTo('ul')
        $(newItem).fadeIn(1000)
        $('#url-img').val('')
    })
})