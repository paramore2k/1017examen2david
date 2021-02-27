import {mount} from "@vue/test-utils"
import Bottom from "./../../components/Bottom.vue"


describe("Test unitaire pour le footer du site web", () => {

    test('Top est-til une instance de Vue ?', () => {

        const wrapper = mount(Bottom.vue, {
            Data: {
                Bottom:{
                    name: "Bottom"
                }
            }
        })

        // vérifie que `message` est restitué
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

})
