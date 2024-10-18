interface createTableUseCase {
    expect: ( options: createTableOptions ) => {}
};

interface createTableOptions {
    base: number,
    limit?: number

}

export class createTable implements createTableUseCase {

    constructor() {}
    expect({ base, limit = 10}: createTableOptions) {
        let outPutMessage = '';
        for (let i = 0; i <= limit; i++) {
            outPutMessage += `${ base } x ${ i } = ${ base * i}\n` 
        };
        return outPutMessage;
    }
}