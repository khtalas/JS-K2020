/* global listArea, newItemTextField, warningArea */

/**
 * The main application function. Gets activated on window.onload event at
 * the end of this file.
 * 
 * @returns {undefined}
 */
function app() {

    /**
     * Define page title.
     * @type String
     */
    const title = 'Project 1 - ToDo-list';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
    
    /**
     * Define page model as list of items and whether we are editing some
     * item. If editing is -1 we are not editing anything and if editing
     * is non-negative we are editing item of that index.
     * @type type
     */
    const model = {
        items: [],
        editing: -1
    };

    /**
     * Function for redrawing the application when state has changed or
     * creating the application at loading the page.
     * 
     * @returns {undefined}
     */
    function show() {
        
        /**
         * Function for validating new item or edited item. If the item is
         * shorter than 5 characters long, it cannot be submitted and a
         * warning is shown on warningArea.
         * @returns {undefined}
         */
        function validate() {
            const activeInput = document.querySelector('input');
            document.querySelector('button').disabled = (activeInput.value.length < 5);
            if (activeInput.value.length < 5) {
                warningArea.innerHTML = `
<div class="w3-panel w3-red w3-round-large">
    <p>Item text must be at least 5 characters long</p>
</div>
`;
            } else {
                warningArea.innerHTML = '';
            }
        }

        listArea.innerHTML = '';
        
        /**
         * The main loop for drawing the list.
         * @param item
         * @param index
         */
        model.items.forEach((item, index) => {
            const listItem = document.createElement('li');
            
            /**
             * Display text input if we are editing the item.
             */
            if (index === model.editing) {
                const modifyItemForm = document.createElement('form');
                modifyItemForm.className = 'w3-container';
                modifyItemForm.innerHTML = `
<input type="text" value="${item}"/>
<button style="display: none;" type="submit">Modify item</button>
`;

                /**
                 * Modify list item when form is submitted.
                 * @param {type} e
                 * @param {type} index
                 * @returns {undefined}
                 */
                function modify(e, index) {
                    e.preventDefault();
                    let textValue = e.target.querySelector('input').value;
                    model.items.splice(index, 1, textValue);
                    model.editing = -1;
                    show();
                }

                modifyItemForm.onsubmit = e => modify(e, index);
                
                /**
                 * Cancel editing when ESC is pressed. When other keys are
                 * pressed, call validation function.
                 * @param {type} e
                 * @returns {undefined}
                 */
                modifyItemForm.querySelector('input').onkeyup = e => {
                    if (e.key === 'Escape') {
                        model.editing = -1;
                        show();
                    } else {
                        validate();
                    }
                };
                listItem.appendChild(modifyItemForm);
                
            /**
             * Display list item if we are not editing the item.
             */
            } else {
                listItem.className = 'w3-display-container';
                let listItemContent = `<span>${item}</span>`;
                
                /**
                 * Display remove item button if we are not editing any item.
                 */
                if (model.editing === -1) {
                    listItemContent += `<span class="w3-button w3-transparent w3-display-right w3-xlarge">&times;</span>`;
                }
                listItem.innerHTML = listItemContent;
                const spans = listItem.querySelectorAll('span');
                spans[0].onclick = e => {
                    model.editing = index;
                    show();
                };
                
                /**
                 * Assign remove item button the item removal functionality
                 * when it is clicked.
                 */
                if (model.editing === -1) {
                    spans[1].onclick = () => {
                        model.items.splice(index, 1);
                        show();
                    };
                }
            }
            
            /**
             * Append the list item to list area.
             */
            listArea.appendChild(listItem);
        }); // ... items.forEach

        /**
         * Create and display new item form if we are not editing an item.
         */
        if (model.editing === -1) {
            const newItemForm = document.createElement('form');
            newItemForm.className = 'w3-container';
            newItemForm.innerHTML = `
<p>
    <label for="newItemTextField"><b>New ToDo item:</b></label>
    <input id="newItemTextField" class="w3-input" type="text"/>
</p>
<button class="w3-btn w3-blue w3-round-large" type="submit">Add item</button>
`;
            /**
             * Function for adding item to the list when form is submitted.
             * @param {type} e
             * @returns {undefined}
             */
            function add(e) {
                e.preventDefault();
                const textValue = newItemTextField.value;
                model.items.push(textValue);
                show();
            }

            /**
             * Item is added on submit.
             */
            newItemForm.onsubmit = add;
            
            /**
             * When user edits input, validate it.
             */
            newItemForm.querySelector('input').onkeyup = validate;
            
            /**
             * Append new item form to list area and focus on the text field.
             */
            listArea.appendChild(newItemForm);
            newItemTextField.focus();
        } else {
            /**
             * If we are editing an item, focus on the edited item's text field.
             */
            document.querySelector('ul input').focus();
        }// ... if (editing > -1)

        /**
         * Validate form at start.
         * @returns {undefined}
         */
        validate();
    } // ... function show

    /**
     * Draw page according to the model at start.
     * @returns {undefined}
     */
    show();
}

/**
 * Run the application at page load.
 * @returns {undefined}
 */
window.onload = app;