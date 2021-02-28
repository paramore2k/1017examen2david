import {mount} from "@vue/test-utils"
import Projet from '@/views/Projet.vue'

describe("Test unitaire pour le Bottom du site web", () => {

    test('Bottom est-til une instance de Vue ?', () => {

        const wrapper = mount(Projet, {
            Data: {
                Projet:{
                    name: "Projet"
                }
            }
        })

        // vérifie que `message` est restitué
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

})
