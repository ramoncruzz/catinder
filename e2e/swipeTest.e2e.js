describe('Testing Home page', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should home screen screen', async () => {
    await expect(element(by.id('home_pageview_page'))).toBeVisible();
    await expect(element(by.id('home_component_StackCardSwiper'))).toBeVisible();
  });

  it('should swipe the card', async () => {
    
    await element(by.id('StackCardSwiper_component_cat_0')).swipe('left', 'slow');
    await element(by.id('StackCardSwiper_component_cat_1')).swipe('right', 'slow');
    await element(by.id('StackCardSwiper_component_cat_2')).swipe('left', 'fast');
    await element(by.id('StackCardSwiper_component_cat_3')).swipe('left', 'fast');

    await element(by.id('StackCardSwiper_button_noMatch')).tap();
    await element(by.id('StackCardSwiper_button_noMatch')).tap();

    await element(by.id('StackCardSwiper_button_match')).tap();

    await element(by.id('StackCardSwiper_component_cat_7')).swipe('right', 'fast');
    await element(by.id('StackCardSwiper_component_cat_8')).swipe('right', 'fast');
    await element(by.id('StackCardSwiper_component_cat_9')).swipe('left', 'fast');
    await element(by.id('StackCardSwiper_component_cat_10')).swipe('right', 'fast');
    
    await element(by.id('StackCardSwiper_button_noMatch')).tap();
    await element(by.id('StackCardSwiper_button_match')).tap();
    
    await element(by.id('StackCardSwiper_component_cat_13')).swipe('right', 'fast');
    await element(by.id('StackCardSwiper_component_cat_14')).swipe('right', 'fast');

    await expect(element(by.id('StackCardSwiper_view_noMoreCards'))).toBeVisible();
  });

  it('should navigate between screens', async () => {
    await expect(element(by.id('home_pageview_page'))).toBeVisible();
    await element(by.id('bottombar_button_tab_1')).tap();

    await expect(element(by.id('chat_pageview_page'))).toBeVisible();
    await element(by.id('bottombar_button_tab_2')).tap();

    await expect(element(by.id('profile_pageview_page'))).toBeVisible();
    await element(by.id('bottombar_button_tab_0')).tap();

    await expect(element(by.id('home_pageview_page'))).toBeVisible();
    
  });

});
