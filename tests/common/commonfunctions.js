import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
 
export class CommonFunctions {
    readFromCSV(filename) {
        const record = parse(fs.readFileSync(path.join('tests/testdata/'+ filename)),{columns:true, skip_empty_lines: true})
        console.log(record)
        return(record)
    }
}