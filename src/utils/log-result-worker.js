module.exports = function(arrayLogs){

    return new Promise(((resolve, reject) => {
        
        const result = {
            totalRegisters: 0,
            registerTypes: {},
            todayRegisters: {},
            lastDate: null
        }
    
        result.totalRegisters = arrayLogs.length;
    
        arrayLogs.forEach(item => {
            
            //Activities
            if(result.registerTypes[item.operation_type])
                result.registerTypes[item.operation_type].qtd++;
            else
                result.registerTypes[item.operation_type] = {
                    descr: item.operation_type,
                    qtd: 1
                };
    
            //Date
            const now = new Date();
            const date = new Date(item.operation_time);

            if(date.getDay() == now.getDay()){
                let hour = date.getHours();
                if(result.todayRegisters[hour])
                    result.todayRegisters[hour]++;
                else
                    result.todayRegisters[hour] = 1
            }

        });

        resolve(result);

    }));

};