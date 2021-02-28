import {mount, shallowMount} from "@vue/test-utils"
import Bottom from '@/components/Bottom'

describe("Test unitaire pour le Bottom du site web", () => {

    test('Bottom est-til une instance de Vue ?', () => {

        const wrapper = mount(Bottom, {
            Data: {
                Bottom:{
                    name: "Bottom"
                }
            }
        })

        // On s'attends à retrouver le nom Bottom
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

})
        test('Vas-t-on retrouver un lien router-link dans le bottom ?', () => {
            const wrapper = shallowMount(Bottom)
            /* On s'attends à ce que la réponse soit négative */
            expect(wrapper.contains('router-link')).toBe(false);
        })

