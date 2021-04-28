module.exports = {
    'удаление товара из корзины и изменение стоимости': function (browser) {
        browser
            .windowMaximize()
            .url('http://xn--80ankngjq0g.xn--p1ai/upakovka/?category_id=11945&page=1')
            .waitForElementVisible(
                'css selector',
                '#app > header > div.header > div > div.header__col.header__col_left > div.header__logo > a > img',
                5000
            )
            .click(
                'css selector',
                '#js-catalog > div:nth-child(1) > div.card-product__section.card-product__section_controls > button'
            )
            .click(
                'css selector',
                '#js-catalog > div:nth-child(2) > div.card-product__section.card-product__section_controls > button'
            )
            .url('http://xn--80ankngjq0g.xn--p1ai/korzina')
            .waitForElementVisible(
                'css selector',
                '#user-cart > div > div > h1',
                5000
            )
            .click(
                'css selector',
                '#app > div > div.section.gutter-md > div > div.content-inner > div:nth-child(2) > div.cart-item__price > div:nth-child(2) > div'
            )
            .pause(500)
            .assert.containsText(
                '#app > div > div.section.gutter-md > div > div.content-inner > div:nth-child(2) > div.cart-item__name > div.cart-item__name-left > div.text.text_size-info.gutter-8_top',
            '99921305'
            )
            .assert.containsText(
                '#app > div > div.section.gutter-md > div > div.content-sidebar > div > div.cart-widget__total > div > div.text.text_size-like-h3.text_color-white.text_weight-medium',
            '168,74'
        )
    }
}
