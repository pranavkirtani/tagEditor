myAppModule.controller('tabsController', function($scope,$rootScope, $http) {
    
    $http.get('/tabs').success(function(success_data,status){
            
        $scope.tabs=success_data;
        });
    
    
  updateTab=function (event){
        
    var key = event.which;
    var that=$(event.target);
    var id=that.data('id');
    if(key == 13){
        var data=that.val();
        
        $.ajax({
            method: "PUT",
            url: "/tab/"+id,
            data: {data:data},
            success:function(result){
            
            that.parent().parent().html('<div class="close" onclick="removeTag(event)">X</div>'+data+'<div class="edit_button_container"> <input type="button" value="Edit" data-id='+id+' data-text='+data+'  class="edit_button" onclick="editTab(event);" /><input class="edit_text" type="text"  data-id='+id+' onkeydown="updateTab(event)"  maxlength=10 style="display:none"/></div>')
                
            }

        })

    }
          };
 
   
    $scope.createTab=function(){
        
        $http.post('/tab').success(function(success_data,status){
$('.newTab').before('<div class="tabList"> <div class="close" onclick="removeTag(event)">X</div><div class="edit_button_container"> <input type="button" value="Edit" data-id={{tab._id}} data-text={{tab.text}}  class="edit_button" onclick="editTab(event);" style="display:none"/><input class="edit_text" type="text"  data-id='+success_data._id+' onkeydown="updateTab(event)"  maxlength=10/></div></div>')
            
            
             
        
        });
    
    };
    
    
    
    
  
    
    
    
    
 });

function editTab(event){
var element=$(event.target);
    var id=element.data('id');
    var text=element.data('text');
     element.parent().parent().html('<div class="edit_button_container"> <input type="button" value="Edit" data-id={{tab._id}} data-text={{tab.text}}  class="edit_button" onclick="editTab(event);" style="display:none"/><input class="edit_text" type="text"  data-id='+id+' onkeydown="updateTab(event)" value='+text+' maxlength=10/></div>');
}


function removeTag(event){
var that=$(event.target)
var id=that.parent().find('.edit_button').data('id');
  
    $.ajax({
            method: "DELETE",
            url: "/tab/"+id,
            success:function(result){
           that.parent().hide();
                
            }

        })
    

};


