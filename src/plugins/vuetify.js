import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light: {
                primary: colors.shades.white,
                secondary: colors.blue.darken1,
                accent: colors.blue.lighten1,
                anchor:colors.red.darken1
            },
            dark: {
                primary: colors.red.base,
                secondary:colors.shades.white
                
            }
            
        }
    }
});
