//wait until the window is loaded to start doing anything to prevent things from breaking 
window.onload = function() {

    //the declaration and population of form are taken from the demo as of 11:49 PM on the 15th of May with some of my own changes
    let form = document.createElement('form');
    
    //set up the title for the form 
    let formTitle = document.createElement("h3");
    formTitle.innerText = "New Journal Entry";
    form.append(formTitle);

    let textArea = document.createElement('textarea');
    textArea.setAttribute('rows',20);
    textArea.setAttribute('cols',100);
    form.append(textArea);

    form.append(document.createElement('br'));
    form.append(document.createElement('br'));

    let submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.value = 'Submit';
    
    form.append(submit);
    
    let addBtn = document.getElementById("addButton");

    addBtn.addEventListener("click", function() {
        
        document.querySelector('main').append(form);

    });
}
