import DateField         from '../../../../src/form/field/Date.mjs';
import FormPageContainer from '../FormPageContainer.mjs';

/**
 * @class Form.view.pages.Page2
 * @extends Form.view.FormPageContainer
 */
class Page2 extends FormPageContainer {
    static config = {
        /**
         * @member {String} className='Form.view.pages.Page2'
         * @protected
         */
        className: 'Form.view.pages.Page2',
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : DateField,
            labelText: 'Birthday',
            name     : 'birthday'
        }]
    }
}

Neo.applyClassConfig(Page2);

export default Page2;
