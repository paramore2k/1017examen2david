import {mount} from "@vue/test-utils"
import Profile from '@/views/Profile.vue'

describe("Test unitaire pour le Profile du site web", () => {

    test('Profile est-til une instance de Vue ?', () => {

        const wrapper = mount(Profile, {
            Data: {
                Profile:{
                    name: "Profile"
                }
            }
        })

        // vérifie que `message` est restitué
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

})
