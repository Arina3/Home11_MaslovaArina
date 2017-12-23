jQuery(document).ready(function(){
  jQuery('#addItem').on('click', addItem);
  jQuery('#task-list').on('change', '.completeItem', completeItem);
  jQuery('#task-list').on('click', '.deleteItem', deleteItem);

  function addItem(){
    let newTodoText = jQuery('#newTodo').val();
    jQuery('#task-list').append('<li><input type="checkbox" class="completeItem">' + newTodoText + '<span class="glyphicon glyphicon-trash deleteItem"></span></li>')
    jQuery('#newTodo').val('');
  }

  function deleteItem(){
    jQuery(this).parent().remove();
  }

  function completeItem() {
    jQuery(this).parent().toggleClass('done');
  }
})