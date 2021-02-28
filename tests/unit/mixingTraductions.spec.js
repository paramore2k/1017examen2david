import {mixinTraductions} from '@/mixins/mixinTraductions';
import { mount } from '@vue/test-utils';

describe('Test du fichier de traductions du site en vérifiant sa propriété et en vérifiant une phrase inexistante', () => {

    test("Est-ce que le fichier à le bon titre de propriété", () => {
        const Component = {
            render() {},
            title: 'translate',
            mixins: [mixinTraductions]
        }
        mount(Component)
        expect(document.title).toBe('translate')
    })
    test("Si on entre une phrase qui n'est pas incluse, rien ne se passe", () => {
        document.title = 'Mon test jest'
        const Component = {
            render() {},
            mixins: [mixinTraductions]
        }
        mount(Component)
        expect(document.title).toBe('Mon test jest')
    })
})
