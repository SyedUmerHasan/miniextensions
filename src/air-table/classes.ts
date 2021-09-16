var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key1Zmz5ZWcuCl2gR'}).base('app8ZbcPx7dkpOnP0');

export enum TablesAvailable {
    Classes = "Classes",
    Students = "Students"
} 

export function listRecord(tableName: TablesAvailable, maxRecords?: number, view : string = "Grid view") {

    let data: any = {};
    if(maxRecords) data["maxRecords"] = maxRecords
    if(view) data["view"] = view

    return new Promise((resolve, reject) => {
        base(tableName).select(data)
        .eachPage((records: any, fetchNextPage: ()=>{}) => {
            return resolve({
                records, 
                fetchNextPage
            })
        }, (err: any) => {
            if (err) { console.error(err); return reject({err}); }
        });    

    })
}



export function getRecordById(tableName: TablesAvailable, id: string) {

    return new Promise((resolve, reject) => {
        base(tableName).find(id,(err: any, record: any) => {
            if (err) { 
                return reject({
                    err
                })
            }
            return resolve({
                record
            })
        })
    })
}