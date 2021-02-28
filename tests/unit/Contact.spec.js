import {mount, shallowMount} from "@vue/test-utils"
import Contact from '@/views/Contact'

describe("Test unitaire pour le Contact du site web", () => {

    test('Contact est-til une instance de Vue ?', () => {

        const wrapper = mount(Contact, {
            Data: {
                Top:{
                    name: "Contact"
                }
            }
        })

        // vérifie que `message` est restitué
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
// Test pour savoir si on va retrouver le bouton button sur la page
    test('button', () => {
            const wrapper = shallowMount(Contact)
            expect(wrapper.contains('button')).toBe(true)
        })

})
