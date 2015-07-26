app
    .config(function ($translateProvider) {
    $translateProvider.translations('de', {
        MADE_SIMPLE:  'Ganz einfach.',                
        COYNO_WELCOME:  'Willkommen alter Freund.',
        BUTTON_LANG_EN: 'Englisch',
        BUTTON_LANG_DE: 'Deutsch'
    });
    $translateProvider.translations('en', {
        MADE_SIMPLE:  'Made simple.',        
        COYNO_WELCOME:  'Welcome old mate.',
        BUTTON_LANG_EN: 'English',
        BUTTON_LANG_DE: 'German'
    });
    $translateProvider.preferredLanguage('de');
});