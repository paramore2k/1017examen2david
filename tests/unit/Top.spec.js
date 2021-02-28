import {mount} from "@vue/test-utils"
import Top from '@/components/Top.vue'

describe("Test unitaire pour le header du site web", () => {

    test('Top', () => {

        const wrapper = mount(Top, {
            Data: {
                menuHeader:{
                    name: "Top"
                }
            }
        })

        // vérifie que `message` est restitué
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

    })
