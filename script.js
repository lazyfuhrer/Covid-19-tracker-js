init()
            function init(){
                var url = "https://api.covid19api.com/summary"

                $.get(url,function(data){
                    console.log(data.Global)

                    data = `
                        <td>${data.Global.Date}</td>
                        <td>World</td>
                        <td>${data.Global.TotalConfirmed}</td>
                        <td>${data.Global.NewConfirmed}</td>
                        <td>${data.Global.TotalDeaths}</td>
                        <td><strong>${data.Global.NewDeaths}</strong></td>
                        <td>${data.Global.TotalRecovered}</td> 
                        <td>${data.Global.NewRecovered}</td>  `
                        
                    $('#data').html(data)
                })
            }
        function refreshData(){
                clearData()
                init()
            }
            function clearData(){
                $("#data").empty()
            }