import {mount, shallowMount} from "@vue/test-utils"
import Home from '@/views/Home.vue'

describe("Test unitaire pour la page Home en vérifiant que le nom soit le bon", () => {

    test('Home est-t-il bien nommé ?', () => {

        const wrapper = mount(Home, {
            Data: {
                Home:{
                    name: "Home"
                }
            }
        })

        // vérifie que `message` est restitué
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
    test("Existe-t-il une méthode loggedin sur la page ?", () => {
            const wrapper = shallowMount(Home)
            expect(wrapper.contains('loggedIn')).toBe(false)
        })
})


