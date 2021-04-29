function AddItemToCart(browser) {
    browser
        .windowMaximize()
        //переходим по ссылке url
        .url('http://xn--80ankngjq0g.xn--p1ai/upakovka/?category_id=11945&page=1')
        //ждем ,пока элемент не станет видимым(лого упакцентр)этот метод нужен для того,
        // что бы убедиться , что тест готов к следующему действию
        .waitForElementVisible(
            'css selector',
            '#app > header > div.header > div > div.header__col.header__col_left > div.header__logo > a > img',
            5000
        )
        //Метод выполняет нажатие на элемент (добавляет товар по кнопке добавить)
        .click(
            'css selector',
            '#js-catalog > div:nth-child(1) > div.card-product__section.card-product__section_controls > button'
        )
        .pause(500)
        .click(
            'css selector',
            '#js-catalog > div:nth-child(2) > div.card-product__section.card-product__section_controls > button'
        )
        .pause(500)
        //переход на страницу корзина
        .url('http://xn--80ankngjq0g.xn--p1ai/korzina')
        //ждем пока элемент(корзина)не появится на странице
        .waitForElementVisible(
            'css selector',
            '#user-cart > div > div > h1',
            5000
        )
        .pause(500);
}

module.exports = {
    'удаление товара из корзины и изменение стоимости': function (browser) {
        AddItemToCart(browser);

        browser
            //нажимаем на кнопку удаление одного товара
            .click(
                'css selector',
                '#app > div > div.section.gutter-md > div > div.content-inner > div:nth-child(2) > div.cart-item__price > div:nth-child(2) > div'
            )
            //пауза.
            .pause(500)
            //(assert)условие определяющее успешность теста
            // (containsText) определяет наличие нужного текста на нужном месте
            .assert.containsText(
                '#app > div > div.section.gutter-md > div > div.content-inner > div:nth-child(2) > div.cart-item__name > div.cart-item__name-left > div.text.text_size-info.gutter-8_top',
            '99921305'
            )
            .assert.containsText(
                '#app > div > div.section.gutter-md > div > div.content-sidebar > div > div.cart-widget__total > div > div.text.text_size-like-h3.text_color-white.text_weight-medium',
            '168,74'
            ).end();
    },
    'Полная очистка корзины': function (browser) {
        AddItemToCart(browser);

        browser
            .click(
                'css selector',
                '#app > div > div.section.gutter-md > div > div.content-inner > div.cart-total.grid-col-2 > div.grid-col-3.cart-total__controls > a'
            )
            .pause(500)
            .assert.containsText(
                '#app > div > div.section.gutter-md > div > div.content-sidebar > div > div.cart-widget__total > div > div.text.text_size-like-h3.text_color-white.text_weight-medium',
            '0,00'
        )
            .assert.containsText(
                '#app > div > div.section.gutter-md > div > div.content-inner > div.cart-empty > div',
            'Вы еще не добавили ни одного товара :('
        ).end();
    }
}
