
const pms = new Promise((resolve, reject) => {
        setTimeout(() => resolve( 'Promise resolved' ), 1000);
        setTimeout(() => reject( 'Promise rejected' ), 900);
    }
);


pms.then((data)=> console.log('pms promise then :: ', data))
    .catch((err)=> console.log('pms promise catch :: ', err));



const getData = async (url) => {
    console.log('---------- getaData --------');
    try {
        return await fetch(url);
    } catch (err) {
        return err
    }
}

// getData("https://fake-json-api.mock.beeceptor.com/users")
//     .then((data)=> console.log(data.body))
//     .catch((err)=> console.log(err));



const getData2 = async () => {
    console.log('---------- getaData2 --------');
    const url = "https://fake-json-api.mock.beeceptor.com/users";

    try {
        const res = await fetch(url);
        console.log(res.json());
    } catch (err) {
        console.log(err)
    }
}

// getData2();


async function getData3() {
    console.log('---------- getaData3 --------');
    const url = "https://fake-json-api.mock.beeceptor.comx/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

// getData3();



const getData4 = async() => {
    console.log('---------- getaData4 --------');
    const url = "https://fake-json-api.mock.beeceptor.com/users";
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        return res.json();
    } catch (e) {
        return e;
    }

}

getData4()
    .then((data) => console.log('PROMISE THEN => ', data))
    .catch(e => console.log('PROMISE CATCH => ', e))


