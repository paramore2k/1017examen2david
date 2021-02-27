import {mount} from "@vue/test-utils"
import Top from './../../views/Top.vue'

describe("Test unitaire pour le header du site web", () => {

    test('Top est-til une instance de Vue ?', () => {

        const wrapper = mount( {
            Data: {
                Top:{
                    name: "Top"
                }
            }
        })

        // vérifie que `message` est restitué
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

    })
