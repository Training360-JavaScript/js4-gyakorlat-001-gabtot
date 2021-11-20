
const sorterPromise = (array) => 
        new Promise( (resolve,reject) => {
            if (array.every( item => typeof item === 'string')) {
                array.sort( (a,b) => a.localeCompare(b) );
                resolve( array );
            } else
                reject('Error: Not all elements are string type!');
        });

export default sorterPromise;
