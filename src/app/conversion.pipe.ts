import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({name: 'unixToDateTime'})
export class UnixToDateTime implements PipeTransform{
    transform(value: number){
        if(value && !isNaN(value)){
            return moment.unix(value).format("DD MMM, YYYY HH:mm:ss");
        }
        return null;
    };
}

@Pipe({name: 'unixToDate'})
export class UnixToDate implements PipeTransform{
    transform(value: number){
        if(value && !isNaN(value)){
            return moment.unix(value).format("DD MMM, YYYY");
        }
        return null;
    };
}



@Pipe({name: 'kelvinToCelsius'})
export class KelvinToCelsius implements PipeTransform{
    transform(value: number){
        if(value && !isNaN(value)){
            return parseFloat((value - 273.15).toFixed(2));
        }
        return null;
    };
}
