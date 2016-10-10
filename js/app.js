(function(){
    
    angular.module('myapp',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    function ShoppingListCheckOffService()
    {
        var service=this;
        var totalitems=[
            {name:'milk',quantity:20},
            {name:'chocolate',quantity:10},
            {name:'cold drink',quantity:50},
            {name:'chips',quantity:100}
        ];
        var itemsbought=[];
//        service.gettotalitemscount=function()
//             {
//             return totalitems.length;
//            };
//            service.gettotalitemsboughtcount=function()
//            {
//            return itemsbought.length;
//            };
//            
    service.itembought=function(id)
    {
            var item=totalitems[id];
            itemsbought.push(item);
            totalitems.splice(id,1);
    };
    service.gettotalitems=function()
    {
        return totalitems;
    };
    service.getitemsbought=function()
    {
        return itemsbought;
    };
             
             
    }
    
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService)
    {
    var buy=this;
    buy.totalitems=ShoppingListCheckOffService.gettotalitems();
    //buy.totalitemscount=ShoppingListCheckOffService.gettotalitemscount();
    buy.buyitem=function(id)
    {
        //console.log("id=",id);
        ShoppingListCheckOffService.itembought(id);
       buy.totalitems=ShoppingListCheckOffService.gettotalitems();
        //buy.totalitemscount=ShoppingListCheckOffService.gettotalitemscount();
        
    }
    }

function AlreadyBoughtController(ShoppingListCheckOffService)
    {
    var vm=this;
    vm.totalboughtitems=ShoppingListCheckOffService.getitemsbought();
    //vm.totalitemsboughtcount=ShoppingListCheckOffService.gettotalitemsboughtcount();
       // console.log("totalbought=",vm.totalitemsboughtcount);
        
    }
    
    
    
    
    
})();