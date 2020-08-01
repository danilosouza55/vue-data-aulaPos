<template>  
    <div class="container">
        <table class="table table-stripped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Email</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td></td>
                   
                </tr>
            </tbody>
        </table>
        <ButtonUrl url="/adduser" btnClass="btn btn-success rounded-circle" fa="fa fa-plus" />
    </div>
    
</template>
<script>

import ButtonUrl from '../buttons/ButtonUrl';
export default {
    name:'TableView',
    components:{
        ButtonUrl
    },
    data:()=>{
        return{
            registros:{},
           
        }
    },
    
    

      
    
}
</script>