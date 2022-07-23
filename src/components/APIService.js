
export default class ApiService {

    static LoginUser(body){

        return fetch('http://127.0.0.1:8000/auth/',{
            'method':'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json()
        ).catch(error =>console.log(error))
    }

    static CreateUser(body){
        return fetch('http://127.0.0.1:8000/users/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    static GetCategories(){
        return fetch('http://127.0.0.1:8000/category/',{
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(resp => resp.json())
            .catch(error => console.log(error))


    }



    // render() {
    //     return (
    //         <div>
    //
    //         </div>
    //     );
    // }
}
